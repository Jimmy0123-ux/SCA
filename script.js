document.getElementById("spinButton").addEventListener("click", spinWheel);

function spinWheel() {
    const wheel = document.getElementById("wheel");
    const resultDisplay = document.getElementById("result");
    const segments = ["奖品A", "奖品B", "奖品C", "奖品D"]; // 你可以修改奖品内容

    // 随机生成转动的角度，通常大于360度以实现多圈旋转效果
    const randomAngle = Math.floor(360 * 5 + Math.random() * 360);
    wheel.style.transform = `rotate(${randomAngle}deg)`;

    // 计算结果
    const segmentSize = 360 / segments.length;
    const resultIndex = Math.floor(((randomAngle % 360) / segmentSize) % segments.length);

    // 展示结果
    setTimeout(() => {
        resultDisplay.innerText = `恭喜你获得: ${segments[resultIndex]}`;
    }, 4000); // 延迟显示结果，让转盘旋转完成
}
