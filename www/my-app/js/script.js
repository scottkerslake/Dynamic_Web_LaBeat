 $cats = 0;
 $switch2 = 0;


$(document).ready(function(){

	$("footer").slideToggle(-50);
    $(".bottom-color-box").click(function(){
        $("footer").slideToggle(600);
    });


	$(".article .part2").hide();

    $(".btn--left").click(function(){
    	$(".article .part2").slideToggle(80);

    if($cats === 0){

    	$(".scott").css("width", "100%");
    	$cats = $cats + 1;
    }
    else if($cats === 1){

    	$(".scott").css("width", "50%");
    	$cats = $cats - 1;

    }
  	  	

    });


    $(".article--right .part_2").hide();

    $(".btn--right").click(function(){
    	$(".article--right .part_2").slideToggle(80);
    if($switch2 === 0){
    	$(".papa").css("width", "100%");
    	$switch2 = $switch2 + 1;
    }
    else if($switch2 === 1){

    	$(".papa").css("width", "50%");
    	$switch2 = $switch2 - 1;

    }

    });
    




});