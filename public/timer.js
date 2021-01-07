// Set the date we're counting down to
const countDownDate = new Date("Apr 30, 2021").getTime();

let convertNumberToString = n => {
    let numbersAsStringArray = n.toString().split("");
    if (numbersAsStringArray.length  === 1) {
        numbersAsStringArray.unshift("0");
    }

    return numbersAsStringArray.join("");
};

// Update the count down every 1 second
let x = setInterval(function () {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = convertNumberToString(Math.floor(distance / (1000 * 60 * 60 * 24)));
    let hours = convertNumberToString(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    let minutes = convertNumberToString(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    let seconds = convertNumberToString(Math.floor((distance % (1000 * 60)) / 1000));

    // Output the result in an element with id="demo"
    document.getElementById("timer").innerHTML = days + ":" + hours + ":"
        + minutes + ":" + seconds;

    // If the count down is over, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "W.E.K STARTED";
    }
}, 1000);