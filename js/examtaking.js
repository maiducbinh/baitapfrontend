function setPageHeight() {
    var windowHeight = $(window).height();
    $('.exam-content').css('max-height', (windowHeight-30) + 'px');
    $('.right-side').css('max-height', (windowHeight-30) + 'px');
}

// Call the function initially and also bind it to window resize event
$(window).on('resize', setPageHeight);
setPageHeight(); // Call initially to set height

const remain = document.getElementById("remain");
let rr = document.getElementById("rr");

let testTime = 2;

let minutes = testTime;
let seconds = 0;
let totalSecond = minutes*60;

let countdown = setInterval(function(){

    seconds--;

    if(seconds<0){
        minutes--;
        seconds = 59;
    }

    remain.innerHTML = minutes.toString().padStart(2,'0')+':'+seconds.toString().padStart(2,'0');
    
    rr.style.strokeDashoffset = 440 - (440 * (totalSecond--)) / (60*testTime);

    if(minutes < 0){
        alert("Your time is up")
        clearInterval(countdown)
    }
    
}, 1000)

