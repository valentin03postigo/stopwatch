const seconds_counter = document.getElementById('seconds');
const miliseconds_counter = document.getElementById('ms');

const start = document.getElementById('start-btn');
const stop = document.getElementById('stop-btn');
const reset = document.getElementById('reset-btn');

let seconds = 0;
let miliseconds = 0;

let increment = function () {

    miliseconds += 1;

    if ( miliseconds == 99 ) {

        miliseconds = 0;
        seconds += 1;

        if (miliseconds < 10 ){

            miliseconds_counter.textContent = "0" + miliseconds;

        } else {

            miliseconds_counter.textContent = miliseconds;

        }

        if ( seconds < 10 ) {

            seconds_counter.textContent = "0" + seconds;

        } else {

            seconds_counter.textContent = seconds;

        }

    } else {

        if (miliseconds < 10 ){

            miliseconds_counter.textContent = "0" + miliseconds;

        } else {

            miliseconds_counter.textContent = miliseconds;

        }

    }

}

let incrementInterval 

start.addEventListener( 'click', function (){

    incrementInterval = setInterval(() => {

        increment()

    }, 1)

})

stop.addEventListener( 'click', function(){

    clearInterval(incrementInterval)

})

reset.addEventListener( 'click' , function () {

    seconds = 0;
    miliseconds = 0;

    miliseconds_counter.textContent = "00"

    seconds_counter.textContent = "00"

})