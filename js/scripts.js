//Heads
$(".top").html("<img src='imgs/Alien_Head.png'>")
$(".top").html("<img src='imgs/Post_Cowboy_Head.png'>")
$(".top").html("<img src='imgs/Tiger_Head.png'>")
 
//Bodies
$(".middle").html("<img src=imgs/Fairy_Body.png>")
$(".middle").html("<img src=imgs/Penguin_Body.png>")
$(".middle").html("<img src=imgs/Robot_Body.png>")

//Feet
$(".bottom").html("<img src=imgs/Monkey_Feet.png>")
$(".bottom").html("<img src=imgs/Meerkat_Feet.png>")
$(".bottom").html("<img src=imgs/Chicken_Feet.png>")

//Arrays
var heads = ["<img src=imgs/Alien_Head.png>", "<img src=imgs/Post_Cowboy_Head.png>", "<img src=imgs/Tiger_Head.png>"]
var bodies = ["<img src='imgs/Fairy_Body.png'>", "<img src='imgs/Penguin_Body.png'>", "<img src='imgs/Robot_Body.png'>"]
var legs = ["<img src='imgs/Monkey_Feet.png'>", "<img src='imgs/Meerkat_Feet.png'>", "<img src='imgs/Chicken_Feet.png'>"]

var counter = 0

//body parts

$("#heads").on("click", updateHeads)
$("#bodies").on("click", updateBodies)
$("#legs").on("click", updateLegs)

$(document).on("keypress", function (e) {
    console.log(e)
    if(e.key == '1'){
        updateHeads()
        updateBodies()
        updateLegs()
    }
})

function updateHeads() {

    var randomNum = Math.floor(Math.random()*heads.length)
    console.log(randomNum)

    $(".top").html(heads[randomNum])
}

function updateBodies() {

    var randomNum = Math.floor(Math.random()*bodies.length)
    console.log(randomNum)

    $(".middle").html(bodies[randomNum])

}

function updateLegs() {

    var randomNum = Math.floor(Math.random()*legs.length)
    console.log(randomNum)

    $(".bottom").html(legs[randomNum])

}

//Colours array
//var colors = ["#cca2ee", "#a65ec5", "#551d71", "#280d36", "#9421c6", "#a954ee"]
var colors1 = ["#cca2ee", "#a954ee"]
var counter = 0
var colors2 = ["#a65ec5", "#9421c6"]
var counter = 0
var colors3 = ["#551d71", "#280d36"]
var counter = 0

//all colors

$(document).on("keypress", function (e) {
    console.log(e)
    if(e.key == '2'){
        colorTop()
        colorMiddle()
        colorBottom()
    }
})


function colorTop() {
    var randomNum = Math.floor(Math.random()*colors1.length)
    console.log(randomNum)

    $(".top").css("background-color", colors1[randomNum])
}

function colorMiddle() {
    var randomNum = Math.floor(Math.random()*colors2.length)
    console.log(randomNum)

    $(".middle").css("background-color", colors2[randomNum])
}

function colorBottom() {
    var randomNum = Math.floor(Math.random()*colors3.length)
    console.log(randomNum)

    $(".bottom").css("background-color", colors3[randomNum])
}



