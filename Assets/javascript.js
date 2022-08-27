var timeDisplayEl = document.querySelector("#dateTime");

function timeDisplay() {
    timeDisplayEl.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(timeDisplay, 1000);

