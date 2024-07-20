/* Time Display */
// create a function to update the date and time
function time() {
    // Create date object
    const time = new Date();
    // Convert to string 
    const currentDateTime = time.toDateString() + ' ' + time.toLocaleTimeString('en-UK');
    // Update the HTML to reflect time 
    document.querySelector('#time').textContent = currentDateTime;
}
// Update time every second
setInterval(time, 1000);

/* Play/Stop Button */
document.getElementById('stop-play').addEventListener('click', function() { 
    if (this.textContent=='▶'){ 
        this.textContent = '◼';
    } 
    else if (this.textContent=='◼'){ 
        this.textContent = '▶'; 
    }
})

