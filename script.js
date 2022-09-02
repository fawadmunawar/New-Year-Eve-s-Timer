const newyear = new Date("1 jan 2023");

function time() {
    const todaydate = new Date();
    let milliseconds = newyear - todaydate;
    let seconds = milliseconds/1000;
    let days = seconds/3600/24;
    let hours = (days*24) % 24;
    let minutes = (hours*60) % 60;
    seconds = seconds%60;

    seconds = Math.floor(seconds);
    days = Math.floor(days);
    hours = Math.floor(hours);
    minutes = Math.floor(minutes);

    

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;    
    document.getElementById("secs").innerHTML = seconds;

    if(seconds<10){
        document.getElementById("secs").innerHTML = `0${seconds}`
    }

}

setInterval(() => {
    time();
}, 1000);
time();