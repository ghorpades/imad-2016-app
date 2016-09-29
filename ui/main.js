console.log('Loaded!');


//change the text of main div

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

var count = document.getElementById("count");
var counter=0;
var click = document.getElementById("click");
click.onclick= function(){
    
    
    //create the request Object
    var request = new XMLHttpRequest();
    
    // Capture the request 
    request.onreadystatechange = function(){
        if(request.readySate === XMLHttpRequest.DONE){
            // Take some action 
            if(requesst.status === 200){
                var counter = request.responseText;
                 count.innerHTML=counter.toString();
            }
            
        }
    };
    
    
    /*counter= counter+1;
    count.innerHTML=counter.toString();*/
    
    //Make the request
    request.open('GET','http://ghorpades.imad.hasura-app.io/count',true);
    request.send(null);
    
};
    
