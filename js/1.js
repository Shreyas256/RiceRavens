var constant = $('#firstphoto').height();
    var timestampArray = document.getElementsByClassName("thumbnail");

    for(var i = (timestampArray.length - 1); i >= 0; i--)
    {
        timestampArray[i].style.height = constant + 'px';
    }


document.getElementById("slide1").src="images/1.jpg";
document.getElementById("slide2").src="images/2.jpg";
document.getElementById("slide3").src="images/3.jpg";


$.fn.makeItRain = function(){



		$(this).on('click',function(){



			var maxBills = 50;





			for (var i = 0; i < maxBills; i++){



			var random = $(window).width();



			var randomPosition = Math.floor(random*Math.random());



			var randomTime = Math.random() * 20;

			var randomSpeed = (Math.random()*20)+10 ;





			var bills = $("<span class='billsBillsBills'>")

				.css({

					left : randomPosition,

					top: '-150px',

					"-webkit-animation-delay" : randomTime + "s",

					"-webkit-animation-duration" : randomSpeed + "s"

				});



				$(bills).prepend('<img src="images/bill.svg" alt="a dollar bill">');





				$('#wrapper').append(bills);



			}; // end click function



		}); //end for loop



	}; //end make it rain fn.



	// thanks to Anisha Varghese from the Noun Project for the SVG!!



$('#button').makeItRain();