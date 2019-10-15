function myClickFunk(elm) {
    elm.innerHTML = 'You clicked me'
    elm.style.color='red';
}

let h1 = document.querySelector("h1");
//let h1 = document.getElementByTagName("h1")[0]
h1.onclick = function() {
    myClickFunk(this)
};

window.onload =  function(){
    alert("window is loaded")
}
window.onresize = function(){
    console.log(window.innerWidth);
}

window.onscroll = function(){
    console.log("juuhu")
}