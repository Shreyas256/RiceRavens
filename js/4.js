var options = {
  useEasing : true, 
  useGrouping : true, 
  separator : ',', 
  decimal : '.', 
  prefix : '', 
  suffix : '' 
};
var demo = new CountUp(document.getElementsByClassName("card-title")[0], 0, 100, 0, 2.5, options);
var demo1 = new CountUp(document.getElementsByClassName("card-title")[1], 0, 9, 0, 2.5, options);
$(function(){
    $(window).scroll(function() {
        var scroll = $(window).scrollTop(); // how many pixels you've scrolled
        var os = $('#home').offset().top; // pixels to the top of div1
        var ht = $('#home').height(); // height of div1 in pixels
        // if you've scrolled further than the top of div1 plus it's height
        // change the color. either by adding a class or setting a css property
        if(scroll > os + ht){
            demo.start(); 
            demo1.start();
        }
    });
});

function changePerson(index, elem) {
switch (index) {
    case 0:
        name = "Saturday";
        break;
    case 1:
        name = "Monday";
        break;
    case 2:
        name = "Tuesday";
        break;
    case 3:
        name = "Wednesday";
        break;
    case 4:
        name = "Thursday";
        break;
    case 5:
        name = "Friday";
        break;
    case 6:
        name = "Saturday";
}
document.getElementById("name").innerHTML = name;
}
      $('.carousel').carousel({
            dist:-50,
            shift:0,
            padding:200,
	onCycleTo: function (ele, dragged) {
		changePerson($(ele).index(), ele);
	}

      });
setTimeout(function(){ $('#clockdiv').fadeIn(); }, 30000);
setTimeout(function(){ $('#clockdiv').fadeOut(); }, 40000);
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(2017, 3, 12, 15, 45, 0);
initializeClock('clockdiv', deadline);
