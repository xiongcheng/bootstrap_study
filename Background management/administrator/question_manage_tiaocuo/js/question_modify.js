//点击修改之后两个按钮的出现   确定和放弃按钮
	$(document).ready(function(){
		
//判断当前试题所占高度是否可以一页呈现		
		if($(".paper_detail").height()>$(window).height()-150){

			var newLeft1=($(window).width()-1170)/2+920;
			$(".btn_fix").addClass("btn_fixed");
			$(".btn_fixed").css('left',newLeft1);
			$(".btn_fixed").show();
   	 }else{

   	 		$(".btn_fix").show();
   	 }


//只有点击修改之后，选项的ABCD可以重新选择，其他的框也可以变成可编辑状态 
		$(".child_question_select").attr('disabled',false);
		
		$(".div_change").css('display','none');
		$(".select_change").css('display','block');
		$("tr td div").attr("contenteditable","true").css('border','1px solid #ccc');
		$("tr td select").css('border','1px solid #ccc');
		$(".child_question_selContent").attr("contenteditable","true").css('border','1px solid #ccc');
		
	});
	
		
	

$(".modify_btn").click(function(){
	$(".btn_fixed").hide();
	$(".btn_fix").hide();
	$("#Wpaper_question_type div").css('display','block');
		$(".div_change").css('display','block');
		$(".select_change").css('display','none');
	$("tr td div").attr("contenteditable","false").css('border','none');
	$("tr td select").css('border','none');
	$(".child_question_selContent").attr("contenteditable","false").css('border','none');
})
