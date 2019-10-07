
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
$(".active-nav-link").siblings("li").mouseover("on", function(){
    $("li.active-nav-link").attr("id","active-nav-link");
    $("li.active-nav-link").removeClass("active-nav-link");
})
$(".top-header-nav").mouseleave("on", function(){
    $("#active-nav-link").addClass("active-nav-link");
})
