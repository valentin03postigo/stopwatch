const seconds = document.getElementById('seconds');
const miliseconds = document.getElementById('ms');

const start = document.getElementById('start-btn');
const stop = document.getElementById('stop-btn');
const reset = document.getElementById('reset-btn');



start.addEventListener('click', function(){

    function ms(){
        miliseconds.textContent = new Date().getMilliseconds();
    }
    setInterval(ms, 1)

    function s(){
        seconds.textContent = new Date().getSeconds();
    }

    setInterval(s, 1000)

})

stop.addEventListener('click', function(){
    
})