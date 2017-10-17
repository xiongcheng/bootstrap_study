$(".paper_box a").hover(function(){
	$(this).parent().find("div").css('color','#000');
})
//导航吸附效果_试题审核页面
$(document).ready(function(){
var headHeight=$(".wrong_type").height()+160;
var nav=$("#wrong_paperNav_fixed");
$(window).scroll(function(){
	if($(this).scrollTop()>headHeight){
		
		nav.addClass("fwrong_navFix");
		var newLeft=($(window).width()-1140)/2;
		$(".fwrong_navFix").css('left',newLeft);
    }else{
    	nav.removeClass("fwrong_navFix");
    }
})
})

$(".fWrong_times").click(function(){
	console.log("you11");
	if($(this).find("span").attr("class").indexOf("glyphicon-arrow-up")!=-1){
           $(this).find("span").removeClass("glyphicon-arrow-up").addClass("glyphicon-arrow-down");
    }else{
           $(this).find("span").removeClass("glyphicon-arrow-down").addClass("glyphicon-arrow-up");
         }
 
})

		