var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");


var greenColor = function() {
    // alert("Hello Quasar!");

    var listItems = document.getElementsByTagName("li");


    for(var i = 0; i < listItems.length; i++) {

        listItems[i].style.backgroundColor = "green";

    }

}

button1.addEventListener("click", greenColor)



/* CLICK BUTTON 2 THEN BUTTON 1 TO SEE EFFECTS FOR CODE
BELOW */

button2.addEventListener("click", function(){

    button1.removeEventListener("click", greenColor)

})



//Named function add2

function add2(num) {

    return num + 2;

}

var add2 = function(num) {
    return num + 2;
}