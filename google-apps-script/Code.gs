/**
 * 02 Boutique — Google Sheets CRM
 * Deploy as Web App (Execute as: Me, Who has access: Anyone)
 */

const SHEET_ID = 'PASTE_YOUR_GOOGLE_SHEET_ID_HERE';
const SECRET = 'change-me-to-a-long-random-string';

const ORDERS_HEADERS = [
  'Timestamp', 'PayPal Order ID', 'Status', 'Paid', 'Shipped',
  'Name', 'Phone', 'Email', 'Delivery',
  'Subtotal', 'Shipping', 'Total', 'Items', 'Language'
];

const CLIENTS_HEADERS = ['Phone', 'Name', 'Email', 'Last Order', 'Order Count'];

function doGet() {
  return json_({ ok: true, service: '02 Boutique CRM' });
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.secret !== SECRET) {
      return json_({ ok: false, error: 'Unauthorized' });
    }
    ensureSheets_();
    const orderRow = appendOrder_(data);
    upsertClient_(data);
    return json_({ ok: true, row: orderRow });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function ensureSheets_() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let orders = ss.getSheetByName('Orders');
  if (!orders) {
    orders = ss.insertSheet('Orders');
    orders.appendRow(ORDERS_HEADERS);
    orders.getRange(1, 1, 1, ORDERS_HEADERS.length).setFontWeight('bold');
  }
  let clients = ss.getSheetByName('Clients');
  if (!clients) {
    clients = ss.insertSheet('Clients');
    clients.appendRow(CLIENTS_HEADERS);
    clients.getRange(1, 1, 1, CLIENTS_HEADERS.length).setFontWeight('bold');
  }
}

function appendOrder_(data) {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName('Orders');
  sheet.appendRow([
    new Date(),
    data.paypalOrderId || '',
    data.status || 'paid',
    data.paid || 'yes',
    data.shipped || 'no',
    data.name || '',
    data.phone || '',
    data.email || '',
    data.delivery || '',
    data.subtotal || 0,
    data.shipping || 0,
    data.total || 0,
    data.items || '',
    data.language || 'it'
  ]);
  return sheet.getLastRow();
}

function upsertClient_(data) {
  const phone = String(data.phone || '').replace(/\s/g, '');
  if (!phone) return;
  const ss = SpreadsheetApp.openById(SHEET_ID);
  const sheet = ss.getSheetByName('Clients');
  const values = sheet.getDataRange().getValues();
  for (let i = 1; i < values.length; i++) {
    if (String(values[i][0]).replace(/\s/g, '') === phone) {
      sheet.getRange(i + 1, 2, 1, 2).setValues([[data.name || values[i][1], data.email || values[i][2]]]);
      sheet.getRange(i + 1, 4).setValue(new Date());
      sheet.getRange(i + 1, 5).setValue(Number(values[i][4] || 0) + 1);
      return;
    }
  }
  sheet.appendRow([phone, data.name || '', data.email || '', new Date(), 1]);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/** Run once from Apps Script editor to create sheet tabs with headers */
function setupSheets() {
  ensureSheets_();
}
