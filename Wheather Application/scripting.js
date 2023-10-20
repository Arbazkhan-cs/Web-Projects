const time = document.getElementsByClassName("time")[0];
const forecast = document.getElementsByClassName('real-temp')[0];
const weather = document.getElementById("weather");
var date;

const Day = ()=>{
    let Day = date.getDay();
    const arr = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    return arr[Day];
}

const _Date = ()=>{
    let month = date.getMonth();
    let num_date = date.getDate();
    let arr = [
        "Jan",
        "Feb", 
        "Mar",
        "Apr",
        "May",
        "Jun", 
        "Jul", 
        "Aug",
        "Sep", 
        "Oct",
        "Nov",
        "Dec"
    ]

    return `${arr[month]} ${num_date}`;
}

const Time = ()=>{
    let local_time = date.toLocaleTimeString();
    return local_time;
}


const real_time_date = ()=>{
    date = new Date();
    time.innerHTML = `${Day()} | ${_Date()} | ${Time()}`;
}
setInterval(real_time_date, 1);


if(parseFloat(forecast.innerHTML) >= 23.5){
    weather.src = "/images/sun.png";
}
else if(parseFloat(forecast.innerHTML) >= 17){
    weather.src = "/images/cloud.png";
}
else if(parseFloat(forecast.innerHTML) <= 16){
    weather.src = "/images/rain.png";
}
