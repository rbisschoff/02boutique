# PayPal + Google Sheets setup — 02 Boutique

This minisite can accept **PayPal payments** and log every order in a **Google Sheet** (mini CRM).

---

## 1. GitHub Pages (hosting)

1. Create a repo on [github.com/rbisschoff](https://github.com/rbisschoff), e.g. `02boutique`
2. Upload the `Roger-Boutique` folder (exclude `tmp_*` files)
3. **Settings → Pages →** Deploy from branch `main`, folder `/ (root)`
4. Your shop URL: `https://rbisschoff.github.io/02boutique/`

---

## 2. PayPal

1. Go to [developer.paypal.com](https://developer.paypal.com/) → log in with the **shop PayPal business account**
2. **Apps & Credentials →** create app (Sandbox first for testing)
3. Copy the **Client ID**
4. In `index.html`, set:

```javascript
const SHOP_CONFIG = {
  paypalClientId: 'YOUR_SANDBOX_OR_LIVE_CLIENT_ID',
  // ...
};
```

5. Test with [PayPal Sandbox buyer accounts](https://developer.paypal.com/tools/sandbox/accounts/)
6. When ready, switch to **Live** Client ID in the same place

Payments go to the PayPal account linked to that app.

---

## 3. Google Sheet CRM

### Create the spreadsheet

1. [Google Sheets](https://sheets.google.com) → new spreadsheet → name it `02 Boutique CRM`
2. Copy the **Sheet ID** from the URL:  
   `https://docs.google.com/spreadsheets/d/`**THIS_PART**`/edit`

### Install the script

1. **Extensions → Apps Script**
2. Replace `Code.gs` with the file in `google-apps-script/Code.gs`
3. Set `SHEET_ID` and `SECRET` (same secret as in `SHOP_CONFIG.googleScriptSecret`)
4. Run **`setupSheets`** once (authorize when prompted)

### Deploy as web app

1. **Deploy → New deployment → Web app**
2. Execute as: **Me**
3. Who has access: **Anyone**
4. Copy the **Web app URL** (ends with `/exec`)

### Connect the shop

In `index.html`:

```javascript
const SHOP_CONFIG = {
  googleScriptUrl: 'https://script.google.com/macros/s/...../exec',
  googleScriptSecret: 'same-secret-as-Code.gs',
  // ...
};
```

---

## 4. What gets stored

### Sheet: **Orders**

| Column | Example |
|--------|---------|
| Timestamp | 2026-06-17 14:30 |
| PayPal Order ID | 8AB12345… |
| Status | paid |
| Paid | yes |
| Shipped | no *(owner updates manually)* |
| Name, Phone, Email | Client details |
| Delivery | pickup / delivery |
| Subtotal, Shipping, Total | €97,93 + €12 + €109,93 |
| Items | Product lines |
| Language | it / en |

### Sheet: **Clients**

Phone, name, email, last order date, order count (auto-updated).

---

## 5. Delivery rules (already in the site)

| Option | Cost |
|--------|------|
| Ritiro in negozio | €0 |
| Spedizione, order &lt; €150 | €12 |
| Spedizione, order ≥ €150 | €0 |

Edit in `SHOP_CONFIG`: `deliveryFee: 12`, `freeDeliveryFrom: 150`

---

## 6. Owner workflow

1. Client pays with **PayPal** in the cart
2. Row appears in **Orders** (paid = yes)
3. Owner prepares order, ships or holds for pickup
4. Owner sets **Shipped** column to `yes` in the sheet
5. Optional: WhatsApp client using number from sheet

**WhatsApp fallback:** clients can still use “Preferisci WhatsApp?” if PayPal is not configured.

---

## 7. Offers / SMS (manual for now)

Use the **“Per il negoziante — testo SMS pronto”** section on the page.  
Optional later: add an **Offers** tab in the sheet and log when you send a promo (not automated yet).

---

## 8. Security notes

- Use a long random `googleScriptSecret`
- Never commit live secrets to a public repo — use private repo or env-specific config
- PayPal handles card data; the site never sees card numbers
