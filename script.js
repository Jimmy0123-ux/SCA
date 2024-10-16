const canvas = document.getElementById("wheelcanvas");
const ctx = canvas.getContext("2d");
const spinButton = document.getElementById("spin");

let arc = Math.PI / 3;  // 一圈分为6份，每个奖品占1/6圈
const colors = ["#f94144", "#f3722c", "#f9c74f", "#90be6d", "#577590", "#8d99ae"];
const prizes = ["奖品A", "奖品B", "奖品C", "奖品D", "奖品E", "奖品F"];
let startAngle = 0;

function drawWheel() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < prizes.length; i++) {
        const angle = startAngle + i * arc;
        ctx.beginPath();
        ctx.arc(250, 250, 250, angle, angle + arc, false);
        ctx.lineTo(250, 250);
        ctx.fillStyle = colors[i];
        ctx.fill();
        ctx.save();
        ctx.translate(250 + Math.cos(angle + arc / 2) * 150, 250 + Math.sin(angle + arc / 2) * 150);
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        ctx.fillStyle = "#000";
        ctx.font = "bold 16px Arial";
        ctx.fillText(prizes[i], -ctx.measureText(prizes[i]).width / 2, 0);
        ctx.restore();
    }
}

spinButton.addEventListener("click", () => {
    let randomSpin = Math.floor(3000 + Math.random() * 3000);  // 随机旋转角度
    let spinInterval = setInterval(() => {
        startAngle += 0.05;
        drawWheel();
    }, 10);

    setTimeout(() => {
        clearInterval(spinInterval);
        const finalAngle = (startAngle % (2 * Math.PI)) + Math.PI / 6;  // 停止角度
        const winningIndex = Math.floor(finalAngle / arc) % prizes.length;
        alert("恭喜你获得了：" + prizes[winningIndex]);
    }, randomSpin);
});

drawWheel();
