document.addEventListener('DOMContentLoaded', function() {
    
    function updateTime() {
        const timeElement = document.getElementById('currentTimeUTC');
        const now = new Date();
        const timeString = now.toUTCString();
        timeElement.textContent = `Current Time: ${timeString.split(" ")[4]} UTC`;
    };
    
    function updateDay(){
        const dayElement = document.getElementById('currentDay')
        const day = new Date();
        const dayString = day.toUTCString();
        dayElement.textContent = `Current Day: ${dayString.split(" ").slice(0).join(" ")}`;
    }

    // Update the time immediately and then every second
    updateTime();
    setInterval(updateTime, 1000);

    updateDay();
    setInterval(updateDay, 1000000)
});
