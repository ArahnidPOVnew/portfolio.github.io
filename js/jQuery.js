function diplay_hide (block_skills)

{ 
    if ($(block_skills).css('display') == 'none') 
        { 
            $(block_skills).animate({height: 'show'}, 500); 
        } 
    else 
        {     
            $(block_skills).animate({height: 'hide'}, 500); 
        }}

        
		
$(document).ready(function() {
 $(".site__show1").css("display", "none");
 $(".site__show1").fadeIn(2000);
 });
 
 $(document).ready(function() {
 $(".site__show2").css("display", "none");
 $(".site__show2").fadeIn(4000);
 });
 
 $(document).ready(function() {
 $(".site__show3").css("display", "none");
 $(".site__show3").fadeIn(5000);
 });
 
 $(document).ready(function() {
 $(".site__show4").css("display", "none");
 $(".site__show4").fadeIn(6000);
 });
$(document).ready(function() {
 $("header").css("display", "none");
 $("header").fadeIn(2000);
 });