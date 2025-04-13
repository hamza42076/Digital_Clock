let hr = document.querySelector(".hr")
let min = document.querySelector(".min")
let sec = document.querySelector(".sec")
let day = document.querySelector(".day")
let am_pm = document.querySelector(".am-pm")

let days_week= new Date()
var dayNames = ["Sunday", "Monday", "Tuesday", "Wedenesday", "Thursday", "Friday", "Saturday"];
day.innerText =dayNames[days_week.getDay()]

setInterval(function(){
    let newDate = new Date()
hr.innerText =newDate.getHours() +":" 
min.innerText = newDate.getMinutes() +":" 
sec.innerText = newDate.getSeconds() +":" 
if(newDate.getHours() > 12){
    hr.innerText = newDate.getHours() -12
    am_pm.innerText = "PM"

}
else if (newDate.getHours() === 0){
    hr.innerText = 12
    am_pm.innerText = "AM"

}

},1000)