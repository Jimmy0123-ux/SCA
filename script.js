document.getElementById("spinButton").addEventListener("click", spinWheel);

const segments = ["奖品A", "奖品B", "奖品C", "奖品D"]; // 奖品内容可以自行修改
const wheel = document.getElementById("wheel");

// 动态创建转盘分区
const segmentAngle = 360 / segments.length;
segments.forEach((prize, i) => {
    const segment = document.createElement("div");
    segment.classList.add("segment");
    segment.style.backgroundColor = `hsl(${(i * 360) / segments.length}, 70%, 50%)`;
    segment.style.transform = `rotate(${i * segmentAngle}deg) skewY(${90 - segmentAngle}deg)`;

    const text = document.createElement("span");
    text.innerText = prize;
    text.style.transform = `rotate(${segmentAngle / 2}deg)`;
    segment.appendChild(text);

    wheel.appendChild(segment);
});

function spinWheel() {
    const resultDisplay = document.getElementById("result");

    // 随机生成转动的角度，通常大于360度以实现多圈旋转效果
    const randomAngle = Math.floor(360 * 5 + Math.random() * 360);
    wheel.style.transform = `rotate(${randomAngle}deg)`;

    // 计算获奖分区
    const resultIndex = Math.floor((360 - (randomAngle % 360)) / segmentAngle) % segments.length;

    // 展示结果
    setTimeout(() => {
        resultDisplay.innerText = `恭喜你获得: ${segments[resultIndex]}`;
        resultDisplay.classList.add("show");
    }, 4000); // 延迟显示结果，让转盘旋转完成
}
