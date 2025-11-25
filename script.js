const welcome = document.getElementById("welcome");
const mainPage = document.getElementById("mainPage");
const quoteBox = document.getElementById("quoteBox");
const exitBtn = document.getElementById("exitBtn");

const quotes = [
  "你已经做得够好，不用再对自己那么严格。",
  "我一直都看到你的努力，不要小看自己。",
  "累的话就休息一下，我永远站在你那边。",
  "你值得被爱，也值得被温柔对待。",
  "再小的进步也是进步，我为你骄傲。",
  "别急，你正在慢慢变得更好。",
  "你从来不需要假装坚强，我会陪你。"
];

let qIndex = 0;
let clickable = true;   // 点击冷却开关


/* ----------------------------
   点击欢迎界面 → 进入主界面
----------------------------- */
welcome.addEventListener("click", () => {
  stopClouds();

  welcome.style.transition = "transform 1.5s ease, opacity 1.5s ease";
  welcome.style.transform = "scale(1.15)";
  welcome.style.opacity = "0";

  setTimeout(() => {
    welcome.style.display = "none";
    enterMain();
  }, 1500);
});


/* 停止云朵飘动 */
function stopClouds() {
  document.querySelectorAll(".cloud").forEach(c => {
    c.style.animationPlayState = "paused";
  });
}


/* 主界面启动 */
function enterMain() {
  mainPage.style.display = "flex";
  exitBtn.style.display = "block";

  // 初始语录出现
  showQuote();

  // 启动爱心生成
  startHearts();
}


/* ----------------------------
   不断生成飘动爱心
----------------------------- */
function startHearts() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.textContent = "💗";

    h.style.left = Math.random() * 100 + "vw";
    h.style.bottom = "-10vh";
    h.style.fontSize = (18 + Math.random() * 16) + "px";

    document.body.appendChild(h);

    // 6 秒后自动移除
    setTimeout(() => h.remove(), 6000);
  }, 600);
}


/* ----------------------------
   显示语录
----------------------------- */
function showQuote() {
  quoteBox.textContent = quotes[qIndex];
  quoteBox.style.opacity = "1";
  quoteBox.style.transform = "translateY(0)";

  qIndex = (qIndex + 1) % quotes.length;
}


/* ----------------------------
   点击主界面 → 切换语录
----------------------------- */
mainPage.addEventListener("click", () => {
  // 冷却时间防止乱点
  if (!clickable) return;
  clickable = false;

  // 当前语录淡出
  quoteBox.style.opacity = "0";
  quoteBox.style.transform = "translateY(20px)";

  // 心形缩进动画
  implodeHearts();

  // 等缩进去后爆开
  setTimeout(() => {
    explodeHearts();

    // 爆开结束后切换语录
    setTimeout(() => {
      showQuote();
      clickable = true;
    }, 800);

  }, 1000);
});


/* 心形缩进 */
function implodeHearts() {
  document.querySelectorAll(".heart").forEach(h => {
    h.style.animation = "implode 1s forwards";
  });
}

/* 心形爆开 */
function explodeHearts() {
  document.querySelectorAll(".heart").forEach(h => {
    h.style.animation = "explode 0.8s forwards";
  });
}


/* ----------------------------
   退出 → 回到欢迎界面
----------------------------- */
exitBtn.addEventListener("click", () => {
  mainPage.style.display = "none";
  exitBtn.style.display = "none";

  qIndex = 0;
  quoteBox.style.opacity = "0";

  // 重置欢迎界面
  welcome.style.display = "flex";
  welcome.style.opacity = "1";
  welcome.style.transform = "scale(1)";
});
