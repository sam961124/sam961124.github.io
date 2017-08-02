//load html
$(function(){
    $("#navbar").load("views/navbar.html");
    $("#header").load("views/header.html");
    setTimeout(function(){
        $("#header").addClass("animated fadeInUp");
        $(".header").css("display", "block");
    },50)
});
