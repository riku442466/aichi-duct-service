/**
 * 本番用 Google Apps Script
 * TO_EMAILを変更して、ウェブアプリとしてデプロイしてください。
 */
const TO_EMAIL = "demo@example.com";
const SHEET_NAME = "お問い合わせ";

function doPost(e) {
  const params = e.parameter || {};
  const sheet = getOrCreateSheet_(SpreadsheetApp.getActiveSpreadsheet(), SHEET_NAME);
  sheet.appendRow([
    new Date(),
    params.name || "",
    params.tel || "",
    params.email || "",
    params.area || "",
    params.building || "",
    params.service || "",
    params.preferredDate || "",
    params.message || ""
  ]);

  const body =
`ホームページからお問い合わせがありました。

お名前：${params.name || ""}
電話番号：${params.tel || ""}
メール：${params.email || ""}
住所・対応エリア：${params.area || ""}
建物種別：${params.building || ""}
希望サービス：${params.service || ""}
希望日時：${params.preferredDate || ""}

お問い合わせ内容：
${params.message || ""}`;

  MailApp.sendEmail({to: TO_EMAIL, subject: "【愛知ダクトサービス】お問い合わせ", body, replyTo: params.email || undefined});
  return ContentService.createTextOutput(JSON.stringify({result:"success"})).setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet_(ss, name) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(["受付日時","お名前","電話番号","メール","住所・対応エリア","建物種別","希望サービス","希望日時","お問い合わせ内容"]);
  }
  return sheet;
}
