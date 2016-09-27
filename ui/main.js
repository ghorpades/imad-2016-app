console.log('Loaded!');


//change the text of main div

var element = document.getElementById("maintext");
element.innerHTML = "This is the test ";

//move the image
var img= document.getElementById("madi");
img.onclick= function(){
    img.style.marginLeft='100px';
}