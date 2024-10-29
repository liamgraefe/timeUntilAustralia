// Zieldatum und -zeit einstellen (z. B. für einen Tag in der Zukunft)
const targetDate = new Date("2025-05-18T23:59:59").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("timer").innerText = 
            `${days} Tage ${hours} Stunden ${minutes} Minuten ${seconds} Sekunden`;
    } else {
        document.getElementById("timer").innerText = "Countdown beendet!";
    }
}

updateTimer();
// Update alle 1 Sekunde
setInterval(updateTimer, 1000);
