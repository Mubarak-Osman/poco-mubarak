var leftPos = 0;

// call the function each second 
 var myAnimation = setInterval(moveBoxRight, 100);

 function moveBoxRight(){ 
     if(leftPos== 700){
         clearInterval(myAnimation);
        myAnimation = setInterval(moveBoxLeft, 200);  }
         else {
    leftPos += 50;
    let box = document.getElementById("box");
    box.style.left = leftPos + "px";
}
 }

 function moveBoxLeft(){ 
    if(leftPos== 0){
        clearInterval(myAnimation);
       myAnimation = setInterval(moveBoxRight, 200);  }
        else {
   leftPos -= 50;
   let box = document.getElementById("box");
   box.style.left = leftPos + "px";
}
}
moveBoxLeft();