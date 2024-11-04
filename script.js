// Zieldatum und -zeit einstellen (z. B. für einen Tag in der Zukunft)
const targetTime = new Date("2025-05-18T23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    // Calculate time units
    const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update HTML content
    document.getElementById("years").textContent = years.toString().padStart(2, '0');
    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

    // Change color to red when any value reaches 0
    document.getElementById("years").classList.toggle("zero", years === 0);
    document.getElementById("days").classList.toggle("zero", days === 0);
    document.getElementById("hours").classList.toggle("zero", hours === 0);
    document.getElementById("minutes").classList.toggle("zero", minutes === 0);
    document.getElementById("seconds").classList.toggle("zero", seconds === 0);

    // Stop countdown at zero
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("years").textContent = "00";
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
    }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);