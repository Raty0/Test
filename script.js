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
let clickable = true; // 控制 2~4 秒冷却

/* --- 点击欢迎页面进入主页面 --- */
welcome.addEventListener("click", () => {
  stopClouds(); // 停止云朵

  // 欢迎界面电影感放大
  welcome.style.transition = "transform 1.5s ease, opacity 1.5s";
  welcome.style.transform = "scale(1.15)";
  welcome.style.opacity = 0;

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

/* 进入主页面动画 */
function enterMain() {
  mainPage.style.display = "flex";
  exitBtn.style.display = "block";

  showQuote();
  startHearts();
}

/* --- 飘动爱心持续生成 --- */
function startHearts() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.textContent = "💗";

    h.style.left = Math.random() * 100 + "vw";
    h.style.bottom = "-10vh";
    h.style.fontSize = (18 + Math.random() * 16) + "px";

    document.body.appendChild(h);

    setTimeout(() => h.remove(), 6000);
  }, 600);
}

/* --- 显示语录 --- */
function showQuote() {
  quoteBox.textContent = quotes[qIndex];
  quoteBox.style.transition = "opacity 1s ease, transform 1s";
  quoteBox.style.opacity = 1;
  quoteBox.style.transform = "translateY(0)";
  qIndex = (qIndex + 1) % quotes.length;
}

/* --- 点击主页面切换下一个语录 --- */
mainPage.addEventListener("click", () => {
  if (!clickable) return; // 冷却中不能点击

  clickable = false;

  implodeHearts();
  quoteBox.style.opacity = 0;

  const delay = 1000; // 收缩时间

  setTimeout(() => {
    explodeHearts();

    setTimeout(() => {
      showQuote();
      clickable = true; // 可以点击下一次
    }, 800);

  }, delay);
});

/* --- 爱心缩进 --- */
function implodeHearts() {
  document.querySelectorAll(".heart").forEach(h => {
    h.style.animation = "implode 1s forwards";
  });
}

/* --- 爱心爆开 --- */
function explodeHearts() {
  document.querySelectorAll(".heart").forEach(h => {
    h.style.animation = "explode 0.8s forwards";
  });
}

/* --- 退出 --- */
exitBtn.addEventListener("click", () => {
  mainPage.style.display = "none";
  exitBtn.style.display = "none";

  qIndex = 0;
  quoteBox.style.opacity = 0;

  welcome.style.display = "flex";
  welcome.style.opacity = 1;
  welcome.style.transform = "scale(1)";
});
