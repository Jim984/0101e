document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const startMenu = document.getElementById('startMenu');
    const clock = document.getElementById('clock');


    startButton.addEventListener('click', function() {
        if (startMenu.style.display === 'none' || startMenu.style.display === '') {
            startMenu.style.display = 'block';
        } else {
            startMenu.style.display = 'none';
        }
    });
	

    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        clock.textContent = hours + ':' + minutes;
    }

    setInterval(updateClock, 1000);
    updateClock(); // Initial call to display clock immediately
});
