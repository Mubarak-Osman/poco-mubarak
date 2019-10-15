var x = document.getElementById("result");
var request = new XMLHttpRequest();

request.open('get', "https://ghibliapi.herokuapp.com/people",true);
request.onreadystatechange = function(){
    if(request.readyState===4 && request.status===200){
       // x.innerHTML = request.responseText;
        let result = JSON.parse(request.responseText);
        console.log(result);
        result.forEach(function(object){
            for( let prop in object){
            console.log    (prob + ": "+object[prob]);
            }
        }
            
        });
    }
}
 
var btn = document.querySelector("button");
btn.addEventListener("click", sendAJAXCall,true);

function sendAJAXCall(){
request.send();
}