var timeDisplayEl = document.querySelector("#dateTime");

var day = [
    {
        id: "0",
        hour: "12",
        time: "12",
        meridiem: "am",
        commentSection: ""
    }, {
        id: "1",
        hour: "01",
        time: "01",
        meridiem: "am",
        commentSection: ""
    }, {
        id: "2",
        hour: "02",
        time: "02",
        meridiem: "am",
        commentSection: ""
    },
    {
        id: "3",
        hour: "03",
        time: "03",
        meridiem: "am",
        commentSection: ""
    },
    {
        id: "4",
        hour: "04",
        time: "04",
        meridiem: "am",
        commentSection: ""
    },
    {
        id: "5",
        hour: "05",
        time: "05",
        meridiem: "am",
        commentSection: ""
    },
    {
        id: "6",
        hour: "06",
        time: "06",
        meridiem: "am",
        commentSection: ""
    },
    {
        id: "7",
        hour: "07",
        time: "07",
        meridiem: "am",
        commentSection: ""
    },
    {
        id: "8",
        hour: "08",
        time: "08",
        meridiem: "am",
        commentSection: ""
    },
    {
        id: "9",
        hour: "09",
        time: "09",
        meridiem: "am",
        commentSection: ""
    },
    {
        id: "10",
        hour: "10",
        time: "10",
        meridiem: "am",
        commentSection: ""
    },
    {
        id: "11",
        hour: "11",
        time: "11",
        meridiem: "am",
        commentSection: ""
    },
    {
        id: "12",
        hour: "12",
        time: "12",
        meridiem: "pm",
        commentSection: ""
    },
    {
        id: "13",
        hour: "01",
        time: "01",
        meridiem: "pm",
        commentSection: ""
    },
    {
        id: "14",
        hour: "02",
        time: "02",
        meridiem: "pm",
        commentSection: ""
    },
    {
        id: "15",
        hour: "03",
        time: "03",
        meridiem: "pm",
        commentSection: ""
    },
    {
        id: "16",
        hour: "04",
        time: "04",
        meridiem: "am",
        commentSection: ""
    },
    {
        id: "17",
        hour: "05",
        time: "05",
        meridiem: "pm",
        commentSection: ""
    },
    {
        id: "18",
        hour: "06",
        time: "06",
        meridiem: "pm",
        commentSection: ""
    },
    {
        id: "19",
        hour: "07",
        time: "07",
        meridiem: "pm",
        commentSection: ""
    },
    {
        id: "20",
        hour: "08",
        time: "08",
        meridiem: "pm",
        commentSection: ""
    },
    {
        id: "21",
        hour: "09",
        time: "09",
        meridiem: "pm",
        commentSection: ""
    },
    {
        id: "22",
        hour: "10",
        time: "10",
        meridiem: "pm",
        commentSection: ""
    },
    {
        id: "23",
        hour: "11",
        time: "11",
        meridiem: "pm",
        commentSection: ""
    },

]
day.forEach(function (thisHour) {
    var perHourRow = $("<form>").attr({
        "class": "row"
    });
    $("#container").append(perHourRow);
    var hourDisplay = $("<div>")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({ "class": "col-sm-4 col-md-3 p-3 border hour" });

    perHourRow.append(hourDisplay)
})


function timeDisplay() {
    timeDisplayEl.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
};
setInterval(timeDisplay, 1000);