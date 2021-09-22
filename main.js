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
        if (hours > 5 && hours < 12) {
            let greet = document.querySelector('#index-greeting-message');
            greet.innerText = "GOOD MORNING !!"
        }
        if (hours > 12 && hours <19) {
            let greet = document.querySelector('#index-greeting-message');
            greet.innerText = "GOOD AFTERNOON !!"
        }
        if (hours < 23 && hours>19) {
            let greet = document.querySelector('#index-greeting-message');
            greet.innerText = "GOOD NIGHT !!"
        }
    }
 setInterval(greetMessage,1000);

 // Greeting message section ends
