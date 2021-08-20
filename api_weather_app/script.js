//detecting the variables

let lon;
let lat;

let temperature = document.querySelector(".temp");
let summary = document.querySelector(".summary");
let loc = document.querySelector(".location");
let icon = document.querySelector(".icon");
const kelvin = 273;

window.addEventListener("load",()=>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            //api id
            const api ='a3e62b03df5f0a3dedf10e6225a6a5d97';

            //api url
            const base =`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
            `lon=${lon}&appid=3e62b03df5f0a3dedf10e6225a6a5d97`;

            //calling the api
            fetch(base)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    temperature.textContent = 
                        Math.floor(data.main.temp - kelvin) + "°C";
                    summary.textContent = data.weather[0].description;
                    loc.textContent = data.name; //+ "," + data.sys.country;
                    let icon1 = data.weather[0].icon;
                    icon.innerHTML = 
                        `<img src="weatherPic.png" style= 'height:10rem'/>`;
                });
            });
    }
});

