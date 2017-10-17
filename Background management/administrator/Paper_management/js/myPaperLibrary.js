$(function(){
		var CheckNum=$("input[name='subBox']");
		var li=$("li[name='con_li']");
		var Tag=3;
        
        //checkbox点击
		/*$(".con_checkbox").click(function(){
			Tag=1;
			if(checkAll.checked){
		        checkAll.checked=false;
		   }
		});*/
		
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
		
		//删除
		$(".btn-del-test").click(function(){
			$("#myModal4 .paper-title-library").html($(this).parent().parent().find(".con_a").find("a").html());
			$("#myModal4").modal("show");
		})
		
		
		/*有未完成的组卷经过事件*/
		$(".dynamic_box").hover(function(){
				$(".dynamic").stop(true).animate({left:'120px'},500);
			
			},function(){
				$(".dynamic").stop(true).animate({left:'0'},500);
			});
			
		$(".dynamic_box .dynamic1 .del-library").click(function() {
			$("#myModal5").modal("show");
		})
	//共享 和私有切换
	$(".btn-share-test").click(function(){
		if($(this).text()=="共享"){
			$(this).text("已共享");
		}else{
			$(this).text("共享");
		}
	})
	
	//我的试卷和精品试卷切换
	$(".btn-group a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
});