let hr = document.querySelector(".hr")
let min = document.querySelector(".min")
let sec = document.querySelector(".sec")
let day = document.querySelector(".day")
let am_pm = document.querySelector(".am-pm")
let month = document.querySelector(".month")
let date = document.querySelector(".date")
let year = document.querySelector(".year")


let days_week= new Date()
var dayNames = ["Sunday", "Monday", "Tuesday", "Wedenesday", "Thursday", "Friday", "Saturday"];
day.innerText =dayNames[days_week.getDay()]
let months =["jan","feb","Mar","Apr","May","June","July","Aug","Sep","Oct","Nov","Dec"]

setInterval(function(){
    let newDate = new Date()
hr.innerText =newDate.getHours() +":" 
min.innerText = newDate.getMinutes() +":" 
sec.innerText = newDate.getSeconds() +":" 
month.innerText = months[newDate.getMonth()] +" : " 
date.innerText = newDate.getDate() +" : " 
year.innerText = newDate.getFullYear()

if(newDate.getHours() > 12){
    hr.innerText = newDate.getHours() -12
    am_pm.innerText = "PM"

}
else if (newDate.getHours() === 0){
    hr.innerText = 12
    am_pm.innerText = "AM"

}
else{
    hr.innerText =  newDate.getHours() +":";
}

},1000)
// function fac(n) {
//     if (n === 1 || n === 0){
//         return 1;
//     }
//     return n * fac(n-1)
// }
// let h = fac(6)
// console.log(h);



