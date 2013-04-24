// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
$(document).ready(function() {
	$('.member_img').hover(function(){
        $(this).next().animate({ opacity: 1 });
        
     },function(){
        $(this).next().animate({ opacity: 0 });
         
     });
    
    $('.items1').hover(function(){
    	$(this).find(".back").css('width','100%');
        $(this).find(".back").css('height','187px');
        $(this).find(".see").css('display','block');
     },function(){
        $(this).find(".see").css('display','none');
        $(this).find(".back").css('width','100%');
        $(this).find(".back").css('height','100%');
         
     });
    
    $('.items2').hover(function(){
    	$(this).find(".back").css('width','100%');
        $(this).find(".back").css('height','187px');
        $(this).find(".see").css('display','block');
     },function(){
        $(this).find(".see").css('display','none');
        $(this).find(".back").css('width','100%');
        $(this).find(".back").css('height','226px');
         
     });
    
    $('.items3').hover(function(){
    	$(this).find(".back").css('width','100%');
        $(this).find(".back").css('height','187px');
        $(this).find(".see").css('display','block');
     },function(){
        $(this).find(".see").css('display','none');
        $(this).find(".back").css('width','100%');
        $(this).find(".back").css('height','100%');
         
     });
    
     
});