//load html
$(function(){
    $("#navbar").load("views/navbar.html");
    $("#header").load("views/header.html");
    setTimeout(function(){
        $(".header").css("display", "block");
        $("#header").addClass("animated fadeInUp");
    },100)
});
$(window).load(function() {
    document.getElementById("hideAll").style.display = "none";
});
