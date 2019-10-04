
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