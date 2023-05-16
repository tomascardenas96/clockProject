var secs = document.getElementById("second");
var hourTime = document.getElementById("hour");
var minutesTime = document.getElementById("minute");
function getTime() {
    var now = new Date();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var weekDay = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    var monthDate = ["Enero", "Febrero", "Marzo", "Abril", "Marzo", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var day = weekDay[now.getDay()];
    var month = monthDate[now.getMonth()];
    var year = now.getFullYear();

    hourTime.innerText = String(hour);
    if (minutes < 10) {
        minutesTime.innerText = "0" + String(minutes);
    }
    else {
        minutesTime.innerText = String(minutes);
    }
    if (seconds < 10) {
        secs.innerText = "0" + String(seconds);
    }
    else {
        secs.innerText = String(seconds);
    }
    document.getElementById("clock__date").innerText = day + ", " + month + " del " + year;
}
;
setInterval(function () { getTime(); }, 1000);




