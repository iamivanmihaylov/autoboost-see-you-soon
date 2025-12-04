function getNextMarch15() {
    const now = new Date();
    const year = now.getFullYear();

    const target = new Date(year, 2, 15, 0, 0, 0, 0); // March 15
    if (target <= now) target.setFullYear(year + 1);
    return target;
}

let targetDate = getNextMarch15();

function updateCountdown() {
    const now = new Date();
    let diff = targetDate - now;

    if (diff <= 0) {
        targetDate = getNextMarch15();
        diff = targetDate - now;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown-days").textContent = days;
    document.getElementById("countdown-hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("countdown-minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("countdown-seconds").textContent = seconds.toString().padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);
