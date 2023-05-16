
    let secs = document.getElementById("second") as HTMLParagraphElement;
    let hourTime = document.getElementById("hour") as HTMLParagraphElement;
    let minutesTime = document.getElementById("minute") as HTMLParagraphElement;
    
    function getTime() {
        let now: Date = new Date();
        let hour: number = now.getHours();
        let minutes: number = now.getMinutes();
        let seconds: number = now.getSeconds();

        let weekDay:string[] = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        let monthDate:string[] = ["Enero", "Febrero", "Marzo", "Abril", "Marzo", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

        let day: string = weekDay[now.getDay() - 1];
        let month: string = monthDate[now.getMonth()];
        let year: number = now.getFullYear();
        console.log(day);
        
        hourTime.innerText = String(hour);

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

        (document.getElementById("clock__date") as HTMLParagraphElement).innerText = day + ", " + month + " del " + year;
    };

    setInterval(function(){getTime()}, 1000);
    