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
    hoursTimer.innerText = timeFormat((hours <= 12) ? hours : hours % 12);

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


// Image-showcase

let startWakeUpTime;
let endWakeUpTime;
let wakeUpTime = document.getElementById('wake-up-time');

function addErrorMessage(errorMessageId,errorDropbox) {
    let scheduleFormDropdown = document.querySelector(".schedule-form-dropdown");
    errorDropbox.style.borderColor = "red";
    errorMessageId.classList.add("schedule-form-error-message");
}

function removeErrorMessage(errorMessageId,errorDropbox) {
    let scheduleFormDropdown = document.querySelector(".schedule-form-dropdown");
    errorMessageId.classList.toggle("schedule-form-error-message");
    errorMessageId.innerText = "";
    errorDropbox.style.borderColor = "#d68686";
}

wakeUpTime.addEventListener("change", () => {
    let selectedWakeUpTime = wakeUpTime.options[wakeUpTime.selectedIndex].value.split("-");
    console.log("addEventListener");
    console.log(selectedWakeUpTime[0]);
    console.log(selectedWakeUpTime[1]);


    if (((selectedWakeUpTime[0] != startLunchTime) && (selectedWakeUpTime[1] != endLunchTime)) && ((selectedWakeUpTime[0] != startSleepTime) && (selectedWakeUpTime[1] != endSleepTime))) {
        startWakeUpTime = selectedWakeUpTime[0];
        endWakeUpTime = selectedWakeUpTime[1];
        let errorMessage = document.getElementById("wake-up-error-message");
        let errorDropbox=document.getElementById("wake-up-time");
        removeErrorMessage(errorMessage,errorDropbox);
    }
    else {
        let errorMessage = document.getElementById("wake-up-error-message");
        let errorDropbox=document.getElementById("wake-up-time");
        errorMessage.innerText = "*This slot is already booked.Please reselect.";
        addErrorMessage(errorMessage,errorDropbox);
    }
});


let startLunchTime;
let endLunchTime;
let lunchTime = document.getElementById('lunch-time');
lunchTime.addEventListener("change", () => {
    let selectedLunchTime = lunchTime.options[lunchTime.selectedIndex].value.split("-");
    if (((selectedLunchTime[0] != startWakeUpTime) && (selectedLunchTime[1] != endWakeUpTime)) && ((selectedLunchTime[0] != startSleepTime) && (selectedLunchTime[1] != endSleepTime))) {
        startLunchTime = selectedLunchTime[0];
        endLunchTime = selectedLunchTime[1];
        let errorMessage = document.getElementById("lunch-error-message");
        let errorDropbox=document.getElementById("lunch-time");
        removeErrorMessage(errorMessage,errorDropbox);
    }
    else {
        let errorMessage = document.getElementById("lunch-error-message");
        let errorDropbox=document.getElementById("lunch-time");
        errorMessage.innerText = "*This slot is already booked.Please reselect.";
        addErrorMessage(errorMessage,errorDropbox);
    }
});

let startSleepTime;
let endSleepTime;
let sleepTime = document.getElementById('sleep-time');
sleepTime.addEventListener("change", () => {
    let selectedSleepTime = sleepTime.options[sleepTime.selectedIndex].value.split("-");
    if (((selectedSleepTime[0] != startWakeUpTime) && (selectedSleepTime[1] != endWakeUpTime)) && ((selectedSleepTime[0] != startLunchTime) && (selectedSleepTime[1] != endLunchTime))) {
        startSleepTime = selectedSleepTime[0];
        endSleepTime = selectedSleepTime[1];
        let errorMessage = document.getElementById("sleep-error-message");
        let errorDropbox=document.getElementById("sleep-time");
        removeErrorMessage(errorMessage,errorDropbox)
    }
    else {
        let errorMessage = document.getElementById("sleep-error-message");
        let errorDropbox=document.getElementById("sleep-time");
        errorMessage.innerText = "*This slot is already booked.Please reselect.";
        addErrorMessage(errorMessage,errorDropbox);
    }

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
        else if (hours >= startWakeUpTime && hours < endWakeUpTime) {
            state = 1;
            document.getElementById("index-main-image1").src = "./assets/images/wake-up-image.png";
            document.querySelector(".index-image-desc").innerText = "HEY IT'S WAKE-UP TIME...!! "
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
        else if (hours >= startLunchTime && hours < endLunchTime) {
            state = 1;
            document.getElementById("index-main-image1").src = "./assets/images/pizza-party.png";
            document.querySelector(".index-image-desc").innerHTML =
                "HEY IT'S LUNCH TIME...!!";
        }
        else {
            state = 0;
            document.getElementById("index-main-image1").src = "./assets/images/main-image.png";
        }
    }


    // Nap-time
    if (state === 0) {

        if (startSleepTime === undefined && endSleepTime === undefined) {
        }
        else if (hours >= startSleepTime && hours < endSleepTime) {
            state = 1;
            document.getElementById("index-main-image1").src = "./assets/images/sleep-image.png";
            document.querySelector(".index-image-desc").innerHTML = "HEY IT'S NAP TIME...PLEASE HAVE A SLEEP!! ";
        }
        else {
            state = 0;
            document.getElementById("index-main-image1").src = "./assets/images/main-image.png";
        }
    }


}
setInterval(imageHandlerFunction, 1000);

let party = document.getElementById("current-task");
party.addEventListener("click", partyFunction1)
party.addEventListener("dblclick", partyFunction2)

function partyFunction1() {
    document.getElementById("index-main-image1").src = "./assets/images/party-image.jpg";
    document.querySelector(".index-image-desc").innerHTML = "Let's Make a Partyyy!!";
    document.getElementById("current-task").innerText = "Double Click Here !!";
}
function partyFunction2() {
    document.getElementById("index-main-image1").src = "./assets/images/main-image.png";
    document.querySelector(".index-image-desc").innerHTML = "";
    document.getElementById("current-task").innerText = "Party Time";
}