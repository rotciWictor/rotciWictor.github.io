function startTimer(duration, display) {
    let timer = duration
    let interval =
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.innerHTML = `${minutes}:${seconds}`;
            if (--timer < 0) {
                clearInterval(interval);
            }
            animatedTimer(timer, duration)
        }, 1000);

}

function animatedTimer(timer, duration) {
    console.log("timer", timer)
    console.log("duration", duration)
    const time = Math.floor((timer / duration) * 100);
    console.log("time", time)
    document.getElementById("animated-timer").style.setProperty('--tr', time);
}
window.onload = function () {
    const duration = 60 * 1;
    display = document.getElementById('timer');
    startTimer(duration, display);
};