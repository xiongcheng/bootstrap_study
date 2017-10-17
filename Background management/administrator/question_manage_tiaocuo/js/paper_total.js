$(".nav_tab li a").click(function(){
	$(this).addClass("active_chanel").css('color','#FFFFFF');
	
	$(this).parent().siblings('li').children('a').removeClass('active_chanel').css('color','#000000');
});
//试题类型和困难度两个复选框的选择状态和点击显示或隐藏效果的js代码

$(document).ready(function(){
	var chk1 = document.getElementById('check_1');
	 chk1.checked=true;
	 $("#ques_diff").hide();
	$("#question_type").click(function(){
		if(chk1.checked){
			$("#ques_type").show();
			$("#ques_diff").hide();
		}else{
			// chk1.checked=false;
			$("#ques_type").hide();
		}
		
	})
	
	var chk2 = document.getElementById('check_2');
	chk2.checked=false;
	$("#question_diffcult").click(function(){
		if(chk2.checked){
			$("#ques_diff").show();
			$("#ques_type").hide();
		}else{
			$("#ques_diff").hide();
		}
		
	})
	var chk3 = document.getElementById('check_3');
	chk3.checked=true;
	$("#jc_ques_diff").hide();
	$("#jc_question_type").click(function(){
		if(chk3.checked){
			$("#jc_ques_type").show();
			$("#jc_ques_diff").hide();
		}else{
			chk3.checked=false;
			$("#jc_ques_type").hide();
		}
		
	})
	var chk4 = document.getElementById('check_4');
	chk4.checked=false;
	$("#jc_question_diffcult").click(function(){
		if(chk4.checked){
			$("#jc_ques_diff").show();
			$("#jc_ques_type").hide();
		}else{
			chk4.checked=false;
			$("#jc_ques_diff").hide();
		}
		
	})
	//td内容超过td宽度，title属性自动获取，鼠标悬浮呈现所有字符
	$("table.table-bordered tbody tr td").each(function(){
		var td_content=$(this).text();
		$(this).attr("title",td_content);
	})
	//出现滚动条的判断
	if($(".konwledge_right>table").width()>$(".konwledge_right").width()){
		$(".konwledge_right").css('overflow-x','scroll');
	}else{
		$(".konwledge_right").css('overflow-x','hidden');
	}
});

$("#textBook_stage1").click(function(){
     var selected_val=$(this).val();
     if(selected_val==1){
        $("#textBook_primary1").show().siblings('select.grade_term').hide();
        

      }else{
          if(selected_val==2){
               $("#textBook_junior1").show().siblings('select.grade_term').hide();
          }else{
              $("#textBook_senior1").show().siblings('select.grade_term').hide();
          }
      }
})