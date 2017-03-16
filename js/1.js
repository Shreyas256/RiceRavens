elements = document.getElementsByClassName("img-responsive");
for (var i = 0; i < elements.length; i++) {
elements[i].style.height = $('#firstphoto').height() + 'px';
}