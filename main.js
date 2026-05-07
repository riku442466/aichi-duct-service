
const LINE_URL = "#contact"; // デモ。本番ではLINE公式URLに変更
const GAS_WEB_APP_URL = "DEMO_MODE"; // デモ。本番ではGAS URLに変更

document.querySelectorAll(".js-line-link").forEach(a => {
  a.href = LINE_URL;
});

const form = document.querySelector("#contactForm");
const statusBox = document.querySelector("#formStatus");

if(form && statusBox){
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    data.submittedAt = new Date().toLocaleString("ja-JP", {timeZone:"Asia/Tokyo"});
    localStorage.setItem("ads_demo_last_contact", JSON.stringify(data));
    const btn = form.querySelector("button[type='submit']");
    btn.disabled = true;
    btn.textContent = "送信中...";
    await new Promise(r => setTimeout(r, 600));
    form.reset();
    statusBox.className = "status success";
    statusBox.textContent = "デモ送信が完了しました。本番ではメール通知とスプレッドシート保存が有効になります。";
    btn.disabled = false;
    btn.textContent = "フォーム内容を送信する";
  });
}
