$(document).ready(function() {
    // all jQuery code goes here
$("h1").html ("New Title");
var paragraphs = $("section p a")
console.log($("p a").html());
console.log($("section > p:nth-of-type(2)").html());
console.log($("section > p + p").text());

//jQuery own selectors, not css
console.log($("section > p:last ").html());

//jQuery methods 
console.log($("section").find("p").eq(1).text());

//exercise 1
console.log($("nav ul").find("li").eq(2).text());
console.log($("nav ul li").eq(2).text());
console.log($("nav ul li:nth-of-type(3)").text());

//exercise 2

console.log($("label[for=email]").text());

console.log($("label[type=email]").prev().text());

//exercise 3

console.log($("img[alt]").length);

//exercise 4

console.log($("tbody tr:odd").length);
$("tbody tr:odd").addClass("odd special");
$("tbody tr:odd").removeClass("special");

if ($("tbody tr:odd").hasClass("odd")) {
    // do something here
    Console.log("yes");
    $("tbody tr:odd").css("background-color" , "green").css("color" , "white");
    $("tbody tr:odd").height(78);
}
$("section ul").before("<p>This is the new text before my list </p> ");
$("section ul").after("<p> <strong>  This is the new text after my list </strong> </p> ");

$("section ul").prepend("<li>This is the new first list in my list </li> ");
$("section ul").append("<li> <strong>  This is the new last list in my list </strong> </li> ");

console.log$("input[type=radio]:first").parent().addClass("class");

var fourthLiItem = $("nav ul li").eq(3);
fourthLiItem.addClass("current");
$("nav ul li").not(fourthLiItem).addClass("disabled");

$("section#location h2").html("Change the content to new tittle");

$("img[alt]").each(function){
    console.log($(this).attr("alt"));
}
  });
