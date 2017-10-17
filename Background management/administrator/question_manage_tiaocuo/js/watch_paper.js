

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
