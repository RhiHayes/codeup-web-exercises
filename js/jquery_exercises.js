"use strict";
//
// $(document).ready(function() {
//
//     alert("Document ready- JS is ready to rock and roll!");
//
// });
//
// $("#title").css("font-size", "80px");
// alert("Title is now 80px.");
//
// $("#full-list").css("color", "blue");
// alert("Color of list is now blue.");
//
//
// $(".codeup").css("border", "1px solid red");
//
//
//
// $("li").css("font-size", "20px");
//
// // $("li").css("background-color", "yellow");
//
// // $("h1").css("background-color", "yellow");
//
// // $("p").css("background-color", "yellow");
// //alert("Title has a yellow background.");
//
//
// $("h1, li, p").css("background-color", "yellow");

$("h1").on("click", function() {
    $(this).css("background-color", "yellow")
})


$("p").on("dblclick", function() {
    $(this).css("font-size", "18px")
})


$("li").hover(function() {
    $(this).css("color", "red")
},

    function() {
    $(this).css("color", "black")
});