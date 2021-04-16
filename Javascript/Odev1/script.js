function setName() {
    var getName = prompt("What is your name ?");
    document.getElementById("name").innerText = getName + "!";
}
setName();
let days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
];
function showDate() {
    var date = new Date();
    document.getElementById("clock").innerText = date.toLocaleTimeString() + " " + days[date.getDay()];
    console.log(date.getDay());
    setTimeout(showDate, 1000);
}
showDate();