
$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: ((verge.viewportH() - document.getElementById("totalnav").offsetHeight) / 2) + document.getElementById("totalnav").offsetHeight});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      scrollamount = $(hash).offset().top - document.getElementById("totalnav").offsetHeight;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({ 
        scrollTop: scrollamount
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)

      });
    }  // End if
  });
});