$(document).ready(function(){
	//点击显示与隐藏答案简析
	$(".paper-knowledge").click(function(){
		//alert($(this).prop("checked"));
		if($(this).prop("checked")){
			$(".difficult-degree").show();
		}else{
			$(".difficult-degree").hide();
		}
	});
	$(".paper-answer").click(function(){
		if($(this).prop("checked")){
			$(".answer-resolve").show();
		}else{
			$(".answer-resolve").hide();
		}
	});
	$(".paper-tishi").click(function(){
		if($(this).prop("checked")){
			$(".solve_tishi").show();
		}else{
			$(".solve_tishi").hide();
		}
	});
});