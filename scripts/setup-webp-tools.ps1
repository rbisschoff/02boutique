# One-time download of portable libwebp (cwebp, webpinfo) for Windows x64
$ErrorActionPreference = 'Stop'
$tools = Join-Path $PSScriptRoot 'tools'
$cwebp = Join-Path $tools 'libwebp-1.4.0-windows-x64\bin\cwebp.exe'
if (Test-Path $cwebp) {
    Write-Host "Already installed: $cwebp"
    exit 0
}
New-Item -ItemType Directory -Force -Path $tools | Out-Null
$zip = Join-Path $env:TEMP 'libwebp.zip'
$url = 'https://storage.googleapis.com/downloads.webmproject.org/releases/webp/libwebp-1.4.0-windows-x64.zip'
Invoke-WebRequest -Uri $url -OutFile $zip -UseBasicParsing
Expand-Archive -Path $zip -DestinationPath $tools -Force
Remove-Item $zip -Force -ErrorAction SilentlyContinue
Write-Host "Installed: $cwebp"
