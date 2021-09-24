//  Timer section starts
function timer() {
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    let timeFormat = function (time) {
        if (time < 10) {
            return '0' + String(time);
        }
        else {
            return time;
        }
    }

    let meridiem = "";
    function checkAmPm() {
        if (hours < 12) {
            return meridiem = "AM";
        }
        else {
            return meridiem = "PM";
        }
    }

    let hoursTimer = document.querySelector('#index-hours');
    hoursTimer.innerText = timeFormat((hours < 12) ? hours : hours % 12);

    let minutesTimer = document.querySelector('#index-minutes')
    minutesTimer.innerText = timeFormat(minutes);

    let secondsTimer = document.querySelector('#index-seconds');
    secondsTimer.innerText = timeFormat(seconds);

    let meridiemTimer = document.querySelector('#index-meridiem');
    meridiemTimer.innerText = checkAmPm();

}

setInterval(timer, 1000);

// Timer section ends

// Greeting message section starts

let greetMessage = function () {
    let d = new Date();
    let hours = d.getHours();
    // console.log(hours);
    if (hours >= 5 && hours < 12) {
        let greet = document.querySelector('#index-greeting-message');
        greet.innerText = "GOOD MORNING !!"
    }
    if (hours >= 12 && hours < 17) {
        let greet = document.querySelector('#index-greeting-message');
        greet.innerText = "GOOD AFTERNOON !!"
    }
    if (hours >= 17 && hours < 21) {
        let greet = document.querySelector('#index-greeting-message');
        greet.innerText = "GOOD EVENING !!"
    }
    if (hours >= 21 && hours <= 23) {
        let greet = document.querySelector('#index-greeting-message');
        greet.innerText = "GOOD NIGHT !!"
    }
}
setInterval(greetMessage, 1000);

// Greeting message section ends


// Image-showcase-

let startWakeUpTime;
let endWakeUpTime;
let selectedWakeUpTime = document.getElementById('wake-up-time');
selectedWakeUpTime.addEventListener("change", () => {
    let wakeUpTime = selectedWakeUpTime.options[selectedWakeUpTime.selectedIndex].value.split("-");
    startWakeUpTime = wakeUpTime[0];
    endWakeUpTime = wakeUpTime[1];
});


let startLunchTime;
let endLunchTime;
let selectedLunchTime = document.getElementById('lunch-time');
selectedLunchTime.addEventListener("change", () => {
    let lunchTime = selectedLunchTime.options[selectedLunchTime.selectedIndex].value.split("-");
    startLunchTime = lunchTime[0];
    endLunchTime = lunchTime[1];
});

let startSleepTime;
let endSleepTime;
let selectedSleepTime = document.getElementById('sleep-time');
selectedSleepTime.addEventListener("change", () => {
    let sleepTime = selectedSleepTime.options[selectedSleepTime.selectedIndex].value.split("-");
    startSleepTime = sleepTime[0];
    endLunchTime = sleepTime[1];
});


function imageHandlerFunction() {
    d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let state = 0;

    // Wake-up-time
    if (state === 0) {

        if (startWakeUpTime === undefined && endWakeUpTime === undefined) {

        }
        else if (hours >= startWakeUpTime && hours <= endWakeUpTime) {
            state = 1;
            document.getElementById("index-main-image1").src = "./assets/images/wake-up-image.png";
            document.querySelector(".index-element-desc").innerText="HEY IT'S WAKE-UP TIME...!! "
        }
        else {
            document.getElementById("index-main-image1").src = "./assets/images/main-image.png";
            state = 0;
        }

    }


    // Lunch-time

    if (state === 0) {

        if (startLunchTime === undefined && endLunchTime === undefined) {
        }
        else if (hours >= startLunchTime && hours <= endLunchTime) {
            state = 1;
            document.getElementById("index-main-image1").src = "./assets/images/pizza-party.png";
            document.querySelector(".index-image-desc").innerHTML=
            "HEY IT'S LUNCH TIME...!!";
        }
        else {
            state = 0;
            document.getElementById("index-main-image1").src = "./assets/images/main-image.png";
        }
    }


    // Nap-time
    if (state === 0) {

        if (startSleepTime === undefined && endSleepTime === undefined)
        {
        }
        else if (hours >= startSleepTime && hours <= endSleepTime) {
            state = 1;
            document.getElementById("index-main-image1").src = "./assets/images/sleep-image.png";
            document.querySelector(".index-image-desc").innerHTML="HEY IT'S NAP TIME...PLEASE HAVE A SLEEP!! ";
        }
        else {
            state = 0;
            document.getElementById("index-main-image1").src = "./assets/images/main-image.png";
        }
    }


}
setInterval(imageHandlerFunction, 1000);

let party=document.getElementById("current-task");
party.addEventListener("click",partyFunction1)
party.addEventListener("dblclick",partyFunction2)

function partyFunction1(){
    document.getElementById("index-main-image1").src = "./assets/images/party-image.jpg";
    document.querySelector(".index-image-desc").innerHTML="Let's Make a Partyyy!!";
}
function partyFunction2(){
    document.getElementById("index-main-image1").src = "./assets/images/main-image.png";
    document.querySelector(".index-image-desc").innerHTML="";
}