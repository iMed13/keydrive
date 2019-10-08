
// $( document ).ready(function() {
//     $("#top-header-background-video")[0].play(); 
// });
$("#top-header-background-video")[0].autoplay = true;
$("#top-header-background-video")[0].loop = true;
// $("#top-header-background-video")[0].currentTime = "100"
var globalPlaceholder;
$(".filter-input").find("input").focus(function() {
    globalPlaceholder=$(this).attr("placeholder");
    $(this).attr("placeholder", "").animate({opacity: 0.25});
})
$(".filter-input").find("input").blur(function() {
    $(this).attr("placeholder", globalPlaceholder);  
})
// $(".slick-active.slick-center").first().siblings().css("width","360px")
$(".slick-dots").children("li").find("button").text("");
// $(".active-nav-link").siblings("li").mouseover("on", function(){
//     $("li.active-nav-link").attr("id","active-nav-link");
//     $("li.active-nav-link").removeClass("active-nav-link");
// })



// document ready function
$(function(){
    $(".top-header-nav").children("ul").find("li").bind('cssClassChanged', function(){ 
        var width = $(".active-nav-link").outerWidth();
        var offset = $(".active-nav-link").position();
        var left= offset.left; 
        $(".border-bottom").animate({"width" : width , "left" : left}, 100);
    });
});
$( document ).ready(function() {
    var width = $(".active-nav-link").outerWidth();
    var offset = $(".active-nav-link").position();
    var left= offset.left; 
    $("nav.top-header-nav").children("ul").append("<div class='border-bottomm'><div>");
    $(".border-bottomm").css({"width" : width , "left" : left});
    $(".top-header-nav").children("ul").find("li").not(".compare-nav-link").mouseover("on", function(){
        var width = $(this).outerWidth();
        var offset = $(this).position();
        var left= offset.left; 
        $(".border-bottomm").animate({"width" : width , "left" : left},50, "linear");
    
    })
    $(".top-header-nav").mouseleave("on", function(){
        var width = $(".active-nav-link").outerWidth();
        var offset = $(".active-nav-link").position();
        var left= offset.left;
        $(".border-bottomm").animate({"width" : width , "left" : left},50, "linear");
    })
});

$(".top-header-burger").click("on", function(){
    $(this).toggleClass("active-burger");
})