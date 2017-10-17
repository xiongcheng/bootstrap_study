$(".paper_box a").hover(function(){
	$(this).parent().find("div").css('color','#000');
})
//导航吸附效果_试题审核页面
$(document).ready(function(){
var headHeight=$(".test-type").height()+160;
var nav=$("#nav_fixed");
$(window).scroll(function(){
	if($(this).scrollTop()>headHeight){
		nav.addClass("navFix");
		var newLeft=($(window).width()-1170)/2+$(".left_content").width()+38;
		console.log(newLeft);
		$(".navFix").css('left',newLeft);
    }else{
    	nav.removeClass("navFix");
    }
})
})
//排序箭头的上下切换
$(".question_sort").click(function(){
	console.log("you11");
	if($(this).find("span").attr("class").indexOf("glyphicon-arrow-up")!=-1){
           $(this).find("span").removeClass("glyphicon-arrow-up").addClass("glyphicon-arrow-down");
    }else{
           $(this).find("span").removeClass("glyphicon-arrow-down").addClass("glyphicon-arrow-up");
         }
 
})
//点击全选选择全部的复选框
$("#option1").click(function(){
			if(option1.checked){
				$("input[type=checkbox]").each(function(){
					$(this).prop("checked",true);
				});
			}else{
				$("input[type=checkbox]").each(function(){
					$(this).prop("checked",false);
				});
			}
		});	
		
/*时间控件初始化*/
$(".datetimeStart").datetimepicker({
    format: "yyyy-mm-dd",
     language:"zh-CN",
    autoclose: true,
    minView: "month",
    maxView: "decade",
    todayBtn: true,
    pickerPosition: "bottom-left"
}).on('changeDate', function(ev){
	$(".datetimeEnd").datetimepicker("setStartDate", $(".datetimeStart>input").val());
  });
  
$(".datetimeEnd").datetimepicker({
    format: "yyyy-mm-dd",
     language:"zh-CN",
    autoclose: true,
    minView: "month",
    maxView: "decade",
    todayBtn: true,
    pickerPosition: "bottom-left"
}).on('changeDate', function(ev){
	$(".datetimeStart").datetimepicker("setEndDate", $(".datetimeEnd>input").val());
});

// 教材目录点击不同的学段
$("#textBook_stage").click(function(){
     var selected_val=$(this).val();
     if(selected_val==1){
        $("#textBook_primary").show().siblings('select').hide();
        

      }else{
          if(selected_val==2){
               $("#textBook_junior").show().siblings('select').hide();
          }else{
              $("#textBook_senior").show().siblings('select').hide();
          }
      }
})