const canvas = document.getElementById("wheelCanvas");
const ctx = canvas.getContext("2d");
const spinButton = document.getElementById("spinButton");
const resultDisplay = document.getElementById("result");

const segments = ["奖品A", "奖品B", "奖品C", "奖品D", "奖品E", "奖品F"];
const segmentColors = ["#FF6347", "#FFD700", "#4CAF50", "#1E90FF", "#FF69B4", "#8A2BE2"];
const segmentAngle = 360 / segments.length;
let currentAngle = 0;

// 绘制转盘
function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除画布
    segments.forEach((segment, i) => {
        const startAngle = (i * segmentAngle * Math.PI) / 180;
        const endAngle = ((i + 1) * segmentAngle * Math.PI) / 180;
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height / 2);
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, startAngle, endAngle);
        ctx.fillStyle = segmentColors[i];
        ctx.fill();
        ctx.save();

        // 绘制奖品文字
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(startAngle + (segmentAngle * Math.PI) / 360);
        ctx.textAlign = "center";
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 16px Arial";
        ctx.fillText(segment, canvas.width / 4, 0);
        ctx.restore();
    });
}

// 旋转转盘
function spinWheel() {
    const randomAngle = Math.floor(360 * 5 + Math.random() * 360);
    const finalAngle = currentAngle + randomAngle;
    const segmentSize = 360 / segments.length;

    // 计算转盘停止的获奖分区
    const resultIndex = Math.floor(((360 - (finalAngle % 360)) / segmentSize) % segments.length);

    // 动画旋转
    let currentRotation = 0;
    const animation = setInterval(() => {
        currentRotation += 20;
        if (currentRotation >= randomAngle) {
            clearInterval(animation);
            resultDisplay.innerText = `恭喜你获得: ${segments[resultIndex]}`;
            resultDisplay.classList.add("show");
            currentAngle = finalAngle % 360; // 更新当前角度
        }
        canvas.style.transform = `rotate(${currentRotation}deg)`;
    }, 20);
}

// 初始化转盘
drawWheel();
spinButton.addEventListener("click", () => {
    resultDisplay.classList.remove("show");
    spinWheel();
});
