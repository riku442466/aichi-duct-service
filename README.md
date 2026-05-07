# 愛知ダクトサービス 完全版デモサイト

## 構成

上部タブと階層リンクを含む複数ページ構成です。

- index.html
- duct.html
- aircon.html
- corporate.html
- works.html
- before-after.html
- symptoms.html
- company.html
- estimate.html
- contact.html
- assets/style.css
- assets/main.js
- google-apps-script-contact.gs

## GitHub Pagesにアップするもの

このZIPを解凍して、中身すべてをリポジトリ直下にアップしてください。

## デモ状態

LINE URLとGoogle Apps Script URLは仮設定です。
フォームはデモ送信完了表示のみ出ます。

## 本番化

assets/main.js の以下を変更します。

const LINE_URL = "#contact";
const GAS_WEB_APP_URL = "DEMO_MODE";

本番では、LINE公式URLとGASのウェブアプリURLに差し替えてください。
