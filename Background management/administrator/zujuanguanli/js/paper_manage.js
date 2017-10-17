$(function(){
		var CheckNum=$("input[name='subBox']");
		var li=$("li[name='con_li']");
		var Tag=3;
      	$(".con_li").hover(function(){
			$(this).find(".btn-del-test").show();
		},
			function(){
			$(this).find(".btn-del-test").hide();
		})

		
		//全选
		$("#checkAll").click(function(){
			if(checkAll.checked){
				$("input[type=checkbox]").each(function(){
					$(this).prop("checked",true);
				});
				Tag=2;     
			}else{
				$("input[type=checkbox]").each(function(){
					$(this).prop("checked",false);
				});
				Tag=3;
			}
		});	
		
		//批量删除
        $(".del_btn").click(function(){
        	
			if(Tag==2){
				$('#myModal1').modal('show');
				$('#myModal2').modal('hide');
				$('#myModal3').modal('hide');
			}
			else {
				if(Tag==1){
					$('#myModal3').modal('show');
					$('#myModal1').modal('hide');
					$('#myModal2').modal('hide');
				}else{
					if(Tag==3){
					$('#myModal2').modal('show');
					$('#myModal1').modal('hide');
					$('#myModal3').modal('hide');
					}
				}
			}
		});
		$(".btn-del-test").click(function(){
			$("#myModal4 .paper-title-library").html($(this).parent().parent().find(".con_a").find("a").html());
			$("#myModal4").modal("show");
		})

		// 学段和教材的选择


		var $course_li = $(".classify_name ul li");
 		$course_li.click(function(){
 		$(this).addClass("course_search_current")
 		.siblings()
 		.removeClass("course_search_current");
 		
 	})
 	
 	// 上传日期
 	$(".submit_time").on("click",function(){
 		$(this).find("span")
 		.toggleClass("glyphicon-arrow-down")
 		.toggleClass("glyphicon-arrow-up");
 	})
 	
});