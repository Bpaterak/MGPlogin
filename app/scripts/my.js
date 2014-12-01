$(document).ready(function(){
 

$('#qb21').on('click',function(e){
	
 $(".facts_section #inhere").html("");
	$(".q21").load('../html/mgs/questions.html #q21 > *');
	
	
	e.preventDefault();
});
});
