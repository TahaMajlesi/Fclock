let Year = document.getElementById("Year");
let Month = document.getElementById("Month");
let Day = document.getElementById("Day");
let Hours = document.getElementById("Hours");
let Minutes = document.getElementById("Minutes");
let Seconds = document.getElementById("Seconds");
let Today = document.getElementById("Today");
let Date = document.getElementById("Date");
let Time = document.getElementById("Time");

let Ip = 0;

fetch("https://api64.ipify.org/?format=json")
  .then((response) => response.json())
  .then((data) => {
    Ip = data.ip;
  });

fetch(`https://timeapi.io/api/time/current/ip?ipAddress=${Ip}`)
  .then((response) => response.json())
  .then((data) => {
    Year.innerHTML = data.year;
    Month.innerHTML = data.month;
    Day.innerHTML = data.day;
    Hours.innerHTML = data.hour;
    Minutes.innerHTML = data.minute;
    Seconds.innerHTML = data.seconds;
    Today.innerHTML = data.dayOfWeek;
    Date.innerHTML = data.date;
    Time.innerHTML = data.time;
  });
