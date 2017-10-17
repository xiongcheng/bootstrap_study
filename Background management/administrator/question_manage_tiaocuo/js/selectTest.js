$(document).ready(function(){
	//收缩展开
    $(".shareTypeBtn").click(function(){
		if($(this).text().trim()=="展开"){
     		$(".my-type").find(".dl-hidden").removeClass("hidden");
     		$(this).html('收缩<span class="glyphicon glyphicon-menu-down"></span>');
     	}else{
     		$(".my-type").find(".dl-hidden").addClass("hidden");
     		$(this).html('展开<span class="glyphicon glyphicon-menu-up"></span>');
     	}
     	return false;
	});
//	$(".hide_show_btn").click(function(){
// 		var text_val=$(this).data("text");
//		if(text_val=="收起"){
//   		$(".find_wrong_content").css('display','none');
//   		$(this).attr("data-text","展开").html('展开<span class="glyphicon glyphicon-menu-down"></span>');
//   	}else{
//   		$(".find_wrong_content").css('display','block');
//   		$(this).attr("data-text","收起").html('收起<span class="glyphicon glyphicon-menu-up"></span>');
//   	}
//	});

   //排序按钮点击切换效果
   $(".sort-buttons label").click(function(){
          if($(this).find("span").attr("class").indexOf("glyphicon-arrow-up")!=-1){
           $(this).find("span").removeClass("glyphicon-arrow-up").addClass("glyphicon-arrow-down");
          }
         else{
           $(this).find("span").removeClass("glyphicon-arrow-down").addClass("glyphicon-arrow-up");
         }
   });

    //挑错提示
    $('.error').click(function () {
        $("#myModal1").modal("show");
        return false;
    });

     //查看详情
     $(".lookBtn").click(function(){
      if($(this).text().trim()=="查看详情"){
        $(this).parent().find("ul").slideDown("show");
        $(this).html('收起内容<span class="glyphicon glyphicon-menu-up"></span>');
      }else{
        $(this).parent().find("ul").slideUp("hide");
        $(this).html('查看详情<span class="glyphicon glyphicon-menu-down"></span>');
      }
      return false;
     });

/*     //点击选择效果
     $(".addBox").click(function(){
         if($(this).text()=="加入试题篮"){
             $(this).text("移出试题篮").removeClass("color-change-green").addClass("color-change-yellow");
         }else{
            $(this).text("加入试题篮").removeClass("color-change-yellow").addClass("color-change-green");
         }
     });*/

	//收藏试题
     $(".collectionTest").click(function(){
         if($(this).text()=="收藏试题"){
             $(this).text("已收藏").removeClass("color-change-green").addClass("color-change-yellow");
         }else{
            $(this).text("收藏试题").removeClass("color-change-yellow").addClass("color-change-green");
         }
     });
     
     /*待消错 历史消错*/
    $(".wrong-radio").click(function(){
    	if($(this).index(".wrong-radio")==0){
    		$(".wrong-btn,.addBox").show();
    		$(".delet-h").hide();
    	}else{
    		$(".wrong-btn,.addBox").hide();
    		$(".delet-h").show();
    	}
    });
    
    /*删除*/
   $(".delet-h").click(function(){
   	   $("#myModal-delet").modal("show");
   });
   
   /*点击练习册*/
   $(".testbox .foot").click(function() {
		$(".testbox .panel-body").slideToggle("slow");
	});
   
   /*点击导出word*/
  $(".btn-warning").click(function() {
		$("#myModal-ex-word").modal("show");
		$(".test_choose input:checkbox").prop('checked',true);
		var _checkbox=$(".test_choose input:checkbox");
		var _li=$(".test_show .test_detail ul li");
		_checkbox.click(function(){
		 	var _index=$(this).index(".test_choose input:checkbox");
		 	if($(this).is(":checked")){
					_li.eq(_index+1).css("display","block");
				}
				else {
					_li.eq(_index+1).hide();
				}
		 })
	});
  
  
	//动态解析图标
//	$(".analysis_look").click(function(){
//		var paper_type=$(this).parent().parent().parent().prev().find(".paper_type").attr("class");
//	})
	
	//加入试题篮
	var offset = $(".cart").offset(); 
     $(".addBox").click(function(){
             if($(this).text()=="加入试题篮"){
                $(this).text("移出试题篮").removeClass("color-change-green").addClass("color-change-yellow");
                var addcar = $(this); 
		        var flyer = $('<img class="u-flyer" src="img/fly.png">'); 
		        flyer.fly({ 
		            start: { 
		                left: event.pageX+20, //开始位置（必填）#fly元素会被设置成position: fixed 
		                top: event.pageY-250 //开始位置（必填） 
		            }, 
		            end: { 
		                left: offset.left+180, //结束位置（必填） 
		                top: offset.top+100, //结束位置（必填） 
		                width: 0, //结束时宽度 
		                height: 0 //结束时高度 
		            }, 
		        }); 
             }else{
                $(this).text("加入试题篮").removeClass("color-change-yellow").addClass("color-change-green");
             }
     });
     
	/*//   手动添加与自动生成页面的切换
    $(".hand_add").click(function() {
    	$(".auto_make_content,.left_content").hide();
    	$(".hand_add_content,.add_title").show();
    	$(".main_content").removeClass("col-md-9").addClass("col-md-12");
    	
    })
    $(".auto_make").click(function() {
    	$(".auto_make_content,.left_content").show();
    	$(".hand_add_content,.add_title").hide();
    	$(".main_content").removeClass("col-md-12").addClass("col-md-9");
    })*/

	// 错题点击图片显示放大
//   $(".test_img .img_min").click(function() {
//   	var _src=$(this).attr("src");
//   	var _width=$(".modal-lg .img_show").css("width");
//		$("#myModal-h-error").modal("show");
//		$("#myModal-h-error .img_max").attr({"src":_src,"width":_width});
//	});
	
	//查看解析
// $(".look-analysis").click(function() {
// 		var txtValue=$(this).attr("value");
// 		$(this).attr("href","analysisDetail2.html?type="+txtValue+"");
// })

 });

