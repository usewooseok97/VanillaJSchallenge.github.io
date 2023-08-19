const clock = document.querySelector('#clock');
const CLOCK = document.querySelector('h2');

function Clock(){
    const date = new Date();
    const dayOfweek = ["Sun", "Mon", "Tue", "Wed","Thu", "Fri", "Sat"];
    clock.innerText = 
    `${dayOfweek[date.getDay()]}
    ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}`;
}
Clock();
setInterval(Clock,1000);
