
//点击修改之后两个按钮的出现   确定和放弃按钮
	var modifyNode=$(".question_modify");
	modifyNode.click(function(){
//判断当前试题所占高度是否可以一页呈现		
		if($(".paper_detail").height()>$(".fWrong_lici").height()-400){

			var newLeft1=($(window).width()-1140)/2+900;
			$(".btn_fix").addClass("btn_fixed");
			$(".btn_fixed").css('left',newLeft1);
			$(".btn_fixed").show();
   	 }else{

   	 		$(".btn_fix").show();
   	 }
//只有点击修改之后，选项的ABCD可以重新选择，其他的框也可以变成可编辑状态 
		$(".child_question_select").click(function(){
			$(this).parent().siblings().find("span").removeClass("child_question_correct");
			$(this).addClass("child_question_correct");
		})
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


//挑错管理页面的收起和展开效果
	$(".hide_show_btn").click(function(){
 		var text_val=$(this).data("text");
		if(text_val=="收起"){
  		$(".find_wrong_content").css('display','none');
   		$(this).data("text","展开").html('展开<span class="glyphicon glyphicon-menu-down"></span>');
   		$(".fWrong_lici").css('padding-bottom','0');
   	}else{
   		$(".find_wrong_content").css('display','block');
   		$(this).data("text","收起").html('收起<span class="glyphicon glyphicon-menu-up"></span>');
   	}
	});
//导航吸附在浏览器上面
$(document).ready(function(){
	var nav=$(".question_operate");
    var headHeight=nav.height()+160;

	$(window).scroll(function(){
		if($(this).scrollTop()>headHeight){
			var newLeft=($(window).width()-1170)/2+770;
			nav.addClass("question_operate_fixed");
			$(".question_operate_fixed").css('left',newLeft);
   	 }else{
    		nav.removeClass("question_operate_fixed");
   	 }
   })
});
// 修改试题的处理状态，点击报错处理之后
$(".btn_deal_with").click(function(){
	if($(".question_wrong_zt").text().trim()=="未处理"){
		$(".question_wrong_zt").text("已处理");
		$(this).hover(function(){
			$(this).css('background-color','#ccc').css('color','#000').css('cursor','default');
		});
		$(this).text("报错已处理");
	}else{
		return false;
	}
})
