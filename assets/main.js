
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
// =========================
// Before / After タブ切り替え
// =========================
const baData = {
  duct: {
    title: "ダクト清掃 前後"
  },
  fan: {
    title: "中間ダクトファン"
  },
  bath: {
    title: "浴室暖房乾燥機"
  },
  factory: {
    title: "工場排気ファン"
  },
  aircon: {
    title: "4方向カセットエアコン"
  },
  dryer: {
    title: "乾燥機ダクト"
  }
};

const baTabs = document.querySelectorAll(".ba-tab");
const baBefore = document.getElementById("baBefore");
const baAfter = document.getElementById("baAfter");

if (baTabs.length && baBefore && baAfter) {
  baTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.dataset.key;
      const item = baData[key];
      if (!item) return;

      baTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      baBefore.innerHTML = `
        <div class="ba-image-placeholder">
          <div class="ba-label">BEFORE</div>
          <div class="ba-caption">${item.title}</div>
        </div>
      `;

      baAfter.innerHTML = `
        <div class="ba-image-placeholder ba-image-placeholder-after">
          <div class="ba-label">AFTER</div>
          <div class="ba-caption">${item.title}</div>
        </div>
      `;
    });
  });
}
