let images = [
  "https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/ecosystem.jpg",
  "https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/tnc_36722630_Full.jpg?crop=0,0,6549,4912&wid=580&hei=435&scl=11.291954022988506",
  "https://cdn.pixabay.com/photo/2018/06/14/13/04/nature-3474826_960_720.jpg",
  "https://res.cloudinary.com/yaffa-publishing/image/fetch/q_auto:best,c_fit,w_630,f_auto/http%3A%2F%2Fyaffa-cdn.s3.amazonaws.com%2Fyaffadsp%2Fimages%2FdmImage%2FSourceImage%2Fbluemountains_kanangrabeams1.jpg"
];

let counter = 0;

let buttons = document.getElementsByTagName("button");
let prevButton = buttons[0];
let nextButton = buttons[1];
let image = document.getElementById("slider");

/* alternativ variable assigment
let prevButton = document.querySelector("button");
let nextButton = document.querySelector("img + button ");
*/
prevButton.addEventListener("click", showPrev, true);
nextButton.addEventListener("click", showNext, true);

function showPrev() {
  counter--;
  if (counter == -1) {
    counter = images.length - 1;
  }
  image.src = images[counter];
}

function showNext() {
  counter++;
  if (counter > images.length - 1) {
    counter = 0;
  }
  image.src = images[counter];
}

function sliderImage(dir){
  if(dir ="next")
  
}
