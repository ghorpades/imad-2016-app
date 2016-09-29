console.log('Loaded!');


//change the text of main div

var element = document.getElementById("maintext");
element.innerHTML = "This is the test ";

//move the image
var img= document.getElementById("madi");

var marginLeft=0;
function moveRight() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft= marginLeft + 'px';
}
    


img.onclick= function(){
  //  img.style.marginLeft='100px';
    var interval = setInterval(moveRight,100);
}


var counter=0;
var click = document.getElementById("click");
click.onclick= function(){
    //make the request to endpiont
    
    // render the variable.
    counter= counter+1;
    var count = document.getElementById("count");
    count.innerHTML=counter.toString;
}
    
