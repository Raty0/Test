// ------------------ 语录列表 ------------------
const quotes = [
    "你已经做得够好，不用再对自己那么严格。",
    "我一直都看到你的努力，不要小看自己。",
    "累的话就休息一下，我永远站在你那边。",
    "你值得被爱，也值得被温柔对待。",
    "再小的进步也是进步，我为你骄傲。",
    "别急，你正在慢慢变得更好。",
    "你从来不需要假装坚强，我会陪你。"
];

const flowers = ["🌸", "🌻", "🌹"]; // 花瓣选择
let index = 0;

// ------------------ 点击欢迎页面，显示主内容 ------------------
const welcome = document.getElementById("welcome");
const mainPage = document.getElementById("mainPage");

function enterMainPage() {
    welcome.style.display = "none";
    mainPage.style.display = "flex";
}

// 手机和PC通用点击事件，触发一次
welcome.addEventListener("click", enterMainPage, { once: true });
welcome.addEventListener("touchstart", enterMainPage, { once: true });

// ------------------ 点击下一句，显示新语录 ------------------
const card = document.getElementById("card");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
    card.textContent = quotes[index];
    index = (index + 1) % quotes.length;
    spawnPetals();
});

// ------------------ 花瓣生成函数 ------------------
function spawnPetals() {
    for (let i = 0; i < 18; i++) {
        const petal = document.createElement("div");
        petal.className = "petal";
        petal.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        
        // 随机水平位置
        petal.style.left = Math.random() * 100 + "vw";
        // 随机字体大小
        petal.style.fontSize = (20 + Math.random() * 20) + "px";
        // 随机动画持续时间
        petal.style.animationDuration = (3 + Math.random() * 3) + "s";
        
        document.body.appendChild(petal);
        
        // 6秒后自动删除
        setTimeout(() => petal.remove(), 6000);
    }
}
