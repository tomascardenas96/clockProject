//Here i bring paragraphs of html who shows the hour, minutes and seconds
    let secs = document.getElementById("second") as HTMLParagraphElement;
    let hourTime = document.getElementById("hour") as HTMLParagraphElement;
    let minutesTime = document.getElementById("minute") as HTMLParagraphElement;

//Function that gives the current hour and date from Argentina.
    function getTime() {

//"now" variable bring all data of present. 
        let now: Date = new Date();

//Hour, minutes and seconds variables takes from "now" variable only info that need
        let hour: number = now.getHours();
        let minutes: number = now.getMinutes();
        let seconds: number = now.getSeconds();

//Here i did an array for weekday and monthdate, to iterate in both.
        let weekDay:string[] = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        let monthDate:string[] = ["Enero", "Febrero", "Marzo", "Abril", "Marzo", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//now.getDay() and getMonth() functions return a number, so they will iterate in weekDay / monthdate arrays to show the correct information as 
//appropriate. And year variable returns current year.
        let day: string = weekDay[now.getDay() - 1];
        let month: string = monthDate[now.getMonth()];
        let year: number = now.getFullYear();

//Now here, show in DOM hour, minutes and seconds by innerText method (turning them in string).
        hourTime.innerText = String(hour);


//I put a conditional to show a zero before numbers minor to ten. (I did the same to seconds). 
        if (minutes < 10) {
            minutesTime.innerText = "0" + String(minutes) ;
        } else {
            minutesTime.innerText = String(minutes) ;
        }

        if (seconds < 10) {
            secs.innerText = "0" + String(seconds);
        } else {
            secs.innerText = String(seconds);
        }

//Then i manipulated DOM to show current information.
        (document.getElementById("clock__date") as HTMLParagraphElement).innerText = day + ", " + month + " del " + year;
    };

//With setInterval method, update each every second to give information in real time.
    setInterval(function(){getTime()}, 1000);
    
