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


var digitSegments = [
    [1,2,3,4,5,6],
    [2,3],
    [1,2,7,5,4],
    [1,2,7,3,4],
    [6,7,2,3],
    [1,6,7,3,4],
    [1,6,5,4,3,7],
    [1,2,3],
    [1,2,3,4,5,6,7],
    [1,2,7,3,6]
];

document.addEventListener('DOMContentLoaded', function() {
    var _days = document.querySelectorAll('.days');
    var _hours = document.querySelectorAll('.hours');
    var _minutes = document.querySelectorAll('.minutes');
    var _seconds = document.querySelectorAll('.seconds');

    setInterval(function() {
        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let reverseDaysArray = days.toString().split("").reverse();
        let firstDayCharacter = reverseDaysArray.length > 2? reverseDaysArray[2].valueOf() :0;
        let secondDayCharacter = reverseDaysArray.length > 1? reverseDaysArray[1].valueOf(): 0;
        let thirdDayCharacter = reverseDaysArray.length > 0? reverseDaysArray[0].valueOf(): 0;

        setNumber(_days[0], firstDayCharacter, 1);
        setNumber(_days[1], secondDayCharacter, 1);
        setNumber(_days[2], thirdDayCharacter, 1);

        setNumber(_hours[0], Math.floor(hours/10), 1);
        setNumber(_hours[1], hours%10, 1);

        setNumber(_minutes[0], Math.floor(minutes/10), 1);
        setNumber(_minutes[1], minutes%10, 1);

        setNumber(_seconds[0], Math.floor(seconds/10), 1);
        setNumber(_seconds[1], seconds%10, 1);
    }, 1000);
});

let getNumberFromString = (n, index) => {
    if (index > 2  || index < 0) {
        return 0;
    }


};

var setNumber = function(digit, number, on) {
    var segments = digit.querySelectorAll('.segment');
    var current = parseInt(digit.getAttribute('data-value'));

    // only switch if number has changed or wasn't set
    if (!isNaN(current) && current != number) {
        // unset previous number
        digitSegments[current].forEach(function(digitSegment, index) {
            setTimeout(function() {
                segments[digitSegment-1].classList.remove('on');
            }, index*45)
        });
    }

    if (isNaN(current) || current != number) {
        // set new number after
        setTimeout(function() {
            digitSegments[number].forEach(function(digitSegment, index) {
                setTimeout(function() {
                    segments[digitSegment-1].classList.add('on');
                }, index*45)
            });
        }, 250);
        digit.setAttribute('data-value', number);
    }
}