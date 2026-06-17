# Batch resize + WebP compress product images (uses bundled cwebp from libwebp release)
$ErrorActionPreference = 'Stop'

$imagesDir = Join-Path $PSScriptRoot '..\images' | Resolve-Path
$backupDir = Join-Path $imagesDir '_originals'
$binDir = Join-Path $PSScriptRoot 'tools\libwebp-1.4.0-windows-x64\bin'
$cwebp = Join-Path $binDir 'cwebp.exe'
$webpinfo = Join-Path $binDir 'webpinfo.exe'
$maxDim = 1200
$quality = 80

if (-not (Test-Path $cwebp)) {
    throw "cwebp not found at $cwebp. Run scripts/setup-webp-tools.ps1 first."
}

Add-Type -AssemblyName System.Drawing

function Get-ImageSize($path) {
    $ext = [IO.Path]::GetExtension($path).ToLowerInvariant()
    if ($ext -eq '.webp' -and (Test-Path $webpinfo)) {
        $out = & $webpinfo $path 2>&1 | Out-String
        if ($out -match 'Width:\s*(\d+)') { $w = [int]$Matches[1] } else { $w = 0 }
        if ($out -match 'Height:\s*(\d+)') { $h = [int]$Matches[1] } else { $h = 0 }
        if ($w -gt 0 -and $h -gt 0) { return @{ W = $w; H = $h } }
    }
    $img = [System.Drawing.Image]::FromFile($path)
    try {
        return @{ W = $img.Width; H = $img.Height }
    } finally {
        $img.Dispose()
    }
}

function Get-ResizeArgs($w, $h) {
    if ($w -le $maxDim -and $h -le $maxDim) { return @() }
    if ($w -ge $h) { return @('-resize', [string]$maxDim, '0') }
    return @('-resize', '0', [string]$maxDim)
}

if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Path $backupDir | Out-Null
}

$stats = @()
$convertedFrom = @()

Get-ChildItem $imagesDir -File |
    Where-Object { $_.Extension -match '\.(jpe?g|webp|png)$' -and $_.Name -ne '.gitkeep' } |
    ForEach-Object {
        $file = $_
        $webpOut = Join-Path $imagesDir ($file.BaseName + '.webp')
        $tempOut = Join-Path $imagesDir ($file.BaseName + '.webp.tmp')

        $backupPath = Join-Path $backupDir $file.Name
        if (-not (Test-Path $backupPath)) {
            Copy-Item $file.FullName $backupPath
        }

        try {
            $size = Get-ImageSize $file.FullName
        } catch {
            Write-Warning ('Skip (cannot read): {0} - {1}' -f $file.Name, $_.Exception.Message)
            return
        }

        $resize = Get-ResizeArgs $size.W $size.H
        $beforeKB = [Math]::Round($file.Length / 1KB, 1)

        if (Test-Path $tempOut) { Remove-Item $tempOut -Force }

        $args = @('-q', [string]$quality, '-m', '6', '-mt', '-sharp_yuv') + $resize + @($file.FullName, '-o', $tempOut)
        $prevEap = $ErrorActionPreference
        $ErrorActionPreference = 'Continue'
        & $cwebp @args 2>&1 | Out-Null
        $ErrorActionPreference = $prevEap

        if (-not (Test-Path $tempOut)) {
            Write-Warning "cwebp failed: $($file.Name)"
            return
        }

        Move-Item $tempOut $webpOut -Force

        if ($file.FullName -ne $webpOut) {
            Remove-Item $file.FullName -Force
            if ($file.Extension -match '\.jpe?g$') {
                $convertedFrom += $file.Name
            }
        }

        $out = Get-Item $webpOut
        $afterKB = [Math]::Round($out.Length / 1KB, 1)
        $saved = [Math]::Round((1 - ($out.Length / $file.Length)) * 100, 0)

        $stats += [PSCustomObject]@{
            File = $out.Name
            BeforeKB = $beforeKB
            AfterKB = $afterKB
            SavedPct = $saved
        }
    }

Write-Host ""
Write-Host ('Optimized {0} files (q={1}, max {2}px):' -f $stats.Count, $quality, $maxDim)
$stats | Sort-Object AfterKB -Descending | Format-Table -AutoSize

$beforeTotal = [Math]::Round(($stats | Measure-Object BeforeKB -Sum).Sum / 1024, 2)
$afterTotal = [Math]::Round(($stats | Measure-Object AfterKB -Sum).Sum / 1024, 2)
$pctSaved = if ($beforeTotal -gt 0) { [Math]::Round((1 - $afterTotal / $beforeTotal) * 100) } else { 0 }
Write-Host ('Total: {0} MB -> {1} MB ({2}% smaller)' -f $beforeTotal, $afterTotal, $pctSaved)

if ($convertedFrom.Count -gt 0) {
    Write-Host ""
    Write-Host ('Converted JPG to WebP: {0} files. Update index.html references.' -f $convertedFrom.Count)
}
