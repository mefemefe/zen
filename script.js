// Simple text synchronizer
const label = document.getElementById('label');

function syncText() {
    // Reset
    label.innerText = "Inhale";
    label.style.opacity = 1;

    // Hold at 4s
    setTimeout(() => {
        label.innerText = "Hold";
    }, 4000);

    // Exhale at 11s (4+7)
    setTimeout(() => {
        label.innerText = "Exhale";
    }, 11000);

    // Fade out text slightly at the end of exhale
    setTimeout(() => {
        label.style.opacity = 0.5;
    }, 18000);
}

syncText();
setInterval(syncText, 19000);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/zen/service-worker.js').then(() => {
    console.log('Service Worker Registered');
  });
}