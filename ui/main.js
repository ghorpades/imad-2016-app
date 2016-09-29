console.log('Loaded!');


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
 /*                                             BUTTON TO CHANGE REQUEST AND GET THE COUNTER                                                      */
var count = document.getElementById("count");
var click = document.getElementById("click");
click.onclick= function(){
     //create the request Object
    var request = new XMLHttpRequest();
    
    // Capture the request 
    request.onreadystatechange = function(){
        if(request.readyState  === XMLHttpRequest.DONE){
            // Take some action 
            if(request.status === 200){
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
    
    
    //submit name 
    var nameInput = document.getElementById("name");
    var name = nameInput.value;
    var submit = document.getElementById("submit_btn");
    submit.onclick= function() {
        
        // should make a request to server and sent the name 
        var request = new XMLHttpRequest();
        
        request.onreadystatechange= function() {
            if(request.readyState === XMLHttpRequest.DONE){
                if(request.status === 200){
                    var names=["ABCD", 'PQRS', "XYZ","MNC"];
                    var list="";
                   
                    for(var i =0; i<names.length;i++){
                        list += '<li>' + names[i]  + '</li>'
                    }
                    var ul = document.getElementById("nameList");
                    ul.innerHTML=list;            
                    
                }
                
            }
            
        };
        //capture the list of names and render it as a list
        request.open('GET','http://http://ghorpades.imad.hasura-app.io/submit-name?name='+name, true);
        request.send(null);
    };
    
    