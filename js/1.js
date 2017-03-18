var constant = $('#firstphoto').height();
    var timestampArray = document.getElementsByClassName("thumbnail");

    for(var i = (timestampArray.length - 1); i >= 0; i--)
    {
        timestampArray[i].style.height = constant + 'px';
    }



document.getElementById("slide1").src="images/1.jpg";
document.getElementById("slide2").src="images/2.jpg";
document.getElementById("slide3").src="images/3.jpg";