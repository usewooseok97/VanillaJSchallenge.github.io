const API_KEY = "d8a43b7d9ec6d2327b18c0008258f871"

function GeoOk(location){
    const lat = location.coords.latitude;
    const lng = location.coords.longitude;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    const airurl = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    fetch(url)     // url정보 를 불러옴
    .then((Response) => Response.json())
    .then((data) =>{
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        const name = data.name
         weather.innerText = `날씨:${data.weather[0].main} , 온도:${data.main.temp}`;
         city.innerText = `도시이름:${data.name}`;
        });
        fetch(airurl)     // url정보 를 불러옴
    .then((Response) => Response.json())
    .then((data) =>{
          const air = document.querySelector('#pollution');
          air.innerText = `${JSON.stringify(data.list[0].main)},aqi: 공기의 나쁨정도 (숫자가클수록 나쁨)`;
        });
}
function GeoError(){
    alert("Can't connect you");
}
navigator.geolocation.getCurrentPosition(GeoOk,GeoError);