# 02 Boutique — Men's Promotions

Bilingual (IT/EN) promotional shop for a small boutique. PayPal checkout, delivery rules, WhatsApp fallback, Google Sheets CRM.

## Quick start

1. Open `index.html` locally, or deploy to [GitHub Pages](https://pages.github.com/)
2. Configure `SHOP_CONFIG` in `index.html` (PayPal, WhatsApp, Google Script URL)
3. Follow **`SETUP-PAYPAL-SHEETS.md`** for PayPal + Google Sheet CRM

## Project structure

```
Roger-Boutique/
├── index.html              Main shop
├── help.html               FAQ & legal pages
├── help-content.js
├── legal-content.js
├── google-apps-script/     CRM script for Google Sheets
├── SETUP-PAYPAL-SHEETS.md  PayPal + Sheets setup guide
├── images/                 Product photos
└── mobile-preview.html     Phone preview frame
```

## Features

- IT/EN language toggle
- Tommy Hilfiger promo catalog (paired tops/bottoms)
- Cart with size/colour selection
- **PayPal** payment (when Client ID is set)
- **Delivery:** €12 shipping, free over €150, free store pickup
- **Google Sheet CRM** on paid orders (name, phone, orders, paid/shipped columns)
- WhatsApp / SMS share kit for owner promos
- Feedback mockups (Google / Instagram preview)

## Deploy to GitHub Pages

Push to [github.com/rbisschoff](https://github.com/rbisschoff) and enable Pages on the `main` branch.
