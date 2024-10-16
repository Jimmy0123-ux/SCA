document.addEventListener('DOMContentLoaded', () => {
    const wheel = document.getElementById('wheel');
    const button = document.getElementById('spinButton');
    const prizes = ["奖项1", "奖项2", "奖项3", "奖项4", "奖项5", "奖项6"];

    button.addEventListener('click', () => {
        // 随机角度（0到360度之间的随机值）
        const randomDegree = Math.floor(3600 + Math.random() * 360);
        
        // 设置旋转动画
        wheel.style.transform = `rotate(${randomDegree}deg)`;

        // 计算获奖奖项
        const prizeIndex = Math.floor((randomDegree % 360) / (360 / prizes.length));

        // 显示结果
        setTimeout(() => {
            alert(`恭喜你获得：${prizes[prizeIndex]}`);
        }, 4000); // 等待动画完成后显示
    });
});
