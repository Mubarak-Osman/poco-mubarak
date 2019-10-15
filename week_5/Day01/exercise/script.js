var books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    cover:
      "https://images-na.ssl-images-amazon.com/images/I/71T0PJT2F1L._SX316_BO1,204,203,200_.gif",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    cover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg",
    alreadyRead: true
  },

  {
    title: "Alchemist",
    author: "Paulo Coelho",
    cover: "https://assets.thalia.media/img/artikel/e7532449eeea584663f434f695a941442d1e2e52-00-00.jpeg",
    alreadyRead: true
  },

];
let newWrapperElement = document.createElement("ul");
for (let index = 0; index < books.length; index++) {
  const book = books[index];
  let newElement = document.createElement("li");
  let newTitleElement = document.createElement("strong");
  let newTitleContent = document.createTextNode(book.title);
  let newContent = document.createTextNode("by" + book.author);
  let newImage = document.createElement("img");
  newImage.src = book.cover;
  newImage.style.display = "block";

  if (book.alreadyRead) {
    newTitleElement.style.color = "red";
  }

  //another way to get body element
  //let bodElm = document.querySelector ("body")

  newTitleElement.appendChild(newTitleContent);
  newElement.appendChild(newTitleElement);
  newElement.appendChild(newContent);
  newElement.appendChild(newImage);

  newWrapperElement.appendChild(newElement);
}

document.body.appendChild(newWrapperElement);
/*
  books.forEach(function(book) {
    var para = document.createElement("li");
    var p = document.createElement("p");
    p.textContent=book.title;
    para.appendChild(p);
    p.textContent = book.author;
    para.appendChild(p);
    var ul = document.querySelector("ul");
    ul.appendChild(para);
} );



(function(){
var newElement = document.createElement('li');
newElement.textContent = 'The Design of EveryDay Things';

var list = document.getElementsById("list");
list.appenChild(newElement);
console.log(newElement);

}());
*/
