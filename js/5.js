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