const quotes = [
  "你已经做得够好，不用再对自己那么严格。",
  "我一直都看到你的努力，不要小看自己。",
  "累的话就休息一下，我永远站在你那边。",
  "你值得被爱，也值得被温柔对待。",
  "再小的进步也是进步，我为你骄傲。",
  "别急，你正在慢慢变得更好。",
  "你从来不需要假装坚强，我会陪你。"
];

const flowers = ["🌸", "🌻", "🌹"];
let index = 0;

const welcome = document.getElementById("welcome");
const mainPage = document.getElementById("mainPage");
const card = document.getElementById("card");
const nextBtn = document.getElementById("nextBtn");
const exitBtn = document.getElementById("exitBtn");

// 进入主页面
function enterMainPage() {
  welcome.style.display = "none";
  mainPage.style.display = "flex";
}
welcome.addEventListener("click", enterMainPage, { once: true });
welcome.addEventListener("touchstart", enterMainPage, { once: true });

// 下一句按钮
nextBtn.addEventListener("click", () => {
  card.textContent = quotes[index];
  index = (index + 1) % quotes.length;
  spawnPetals();
});

// 退出按钮
exitBtn.addEventListener("click", () => {
  mainPage.style.display = "none";
  welcome.style.display = "block";
  card.textContent = "点一下以获得一句鼓励 💗";
  index = 0;
});

// 花瓣特效
function spawnPetals() {
  for (let i = 0; i < 18; i++) {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.fontSize = (20 + Math.random() * 20) + "px";
    petal.style.animationDuration = (3 + Math.random() * 3) + "s";
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 6000);
  }
}
