//load html
$(document).ready(function(){
    $("#hideAll").css("display", "none");
    setTimeout(function(){
        $("#header").addClass("animated fadeInUp");
        $("#header").css("display", "block");
    },100);
    console.log("ready!")
});
$(window).on("load", function(){
    $("#navbar").load("views/navbar.html");
    $("#header").load("views/header.html");
    console.log("load!");
});
