const http = require('http');
var requests = require('requests');
const fs = require('fs');
const port = 8000;
const host = "127.0.0.1";

let sun = fs.readFileSync("images/sun.png");
let cloud = fs.readFileSync("images/cloud.png");
let rain = fs.readFileSync("images/rain.png");
let street = fs.readFileSync("images/street.png");
let scriptfile = fs.readFileSync("scripting.js", "utf-8");
let stylefile = fs.readFileSync("style.css", "utf-8");
let homefile = fs.readFileSync("index.html", "utf-8");

const replaceval = (tempdata, newdata)=>{
    let temperary = tempdata.replace("{%Temp%}", `${((newdata.main.temp)-273.15).toFixed(2)}`);
    temperary = temperary.replace("{%min%}", `${((newdata.main.temp_min)-273.15).toFixed(2)}`);
    temperary = temperary.replace("{%max%}", `${((newdata.main.temp_max)-273.15).toFixed(2)}`);
    temperary = temperary.replace("{%state%}", (newdata.name));
    temperary = temperary.replace("{%country%}", newdata.sys.country);
    return temperary;
}
const server = http.createServer((req, res)=>{
    if(req.url == "/"){
        requests("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=c2b62693fd6555c89a9cd69c57d88723")
        .on("data", (chunk)=>{
            const objdata = JSON.parse(chunk);
            const arrdata = [objdata];
            // console.log(arrdata);
            const realTimeData = arrdata.map(val =>{
                return replaceval(homefile, val);
            }).join("");
            
            res.writeHead(200, {"Content-Type":"text/html"})
            res.write(realTimeData);
            
        }).on('end', function (err) {
            if (err) return console.log('connection closed due to errors', err);
            console.log("Completed");
            res.end("")
          });
    }
    else if(req.url == "/style.css"){
        res.end(stylefile);
    }
    else if(req.url == "/scripting.js"){
        res.end(scriptfile);
    }
    else if(req.url == "/images/sun.png"){
        res.end(sun);
    }
    else if(req.url == "/images/street.png"){
        res.end(street);
    }
    else if(req.url == "/images/cloud.png"){
        res.end(cloud);
    }
    else if(req.url == "/images/rain.png"){
        res.end(rain);
    }
    else{
        res.writeHead(404);
        res.end("Page Not Found");
    }
})

server.listen(port, host, ()=>{
    console.log(`The Server is started at http://localhost:${port}`);
})