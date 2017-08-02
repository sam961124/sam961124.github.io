//load html
$(function(){
    $("#navbar").load("views/navbar.html");
    $("#header").load("views/header.html");
});
$(window).on("load", function(){
    $("#hideAll").css("display", "none");
    setTimeout(function(){
        $(".header").css("display", "block");
        $("#header").addClass("animated fadeInUp");
    },50)
});
