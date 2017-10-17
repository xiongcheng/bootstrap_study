 var thisURL = document.URL;    
  var  getval =thisURL.split('?')[1];  
  var edit= getval.split("=")[1];          //编辑状态 最初不处于编辑状态   edit从上一页传参过来判断是否处于编辑状态
  if(edit=="true"){
  	edit=true;
  }else{
  	edit=false;
  }
  
  
$(function(){
	/*点击编辑*/
	$(".paper-edit").click(function(){
		
				$(".paper-edit").hide();
				$(".paper-save").show();
				$(".paper-title").attr("contenteditable","true");
				$(".paper-title>label").show();
				$(".paper-from").show();
				$(".paper-word-down").hide();
				$(".paper-add-test").show();
				$("small").hide();
				$(".paper-checkbox").hide();
				$(".difficult-degree").hide();
				$(".answer-resolve").hide();
				edit=true;
	});
	
	/*点击保存*/
	$(".paper-save").click(function(){
		$("#myModal-save").modal("show");
		delayURL("myPaperLibrary.html");
	});
	
	
	/*发布确认*/
	$(".paper-save-submit").click(function(){
		$("#myModal-save").modal("show");
		var t=$(".publish-select a.active").index();
		if(t==0){
		   //如果是在线作业返回作业列表
			delayURL("../homework/markHomework/homeworkList.html");
		}else{
			 //如果是在线测试 或线下测试 返回测试列表
			delayURL("../test/testAnalysis.html");
		}
		
	});

    if(edit){
				$(".paper-edit").hide();
				$(".paper-save").show();
				$(".paper-title").attr("contenteditable","true"); 
				$(".paper-title").hover(function(){
					$(this).css("border","solid #44B3AD 1px");
				},function(){
					$(this).css("border","solid #FFF 1px");
				});
				$(".paper-title>label").show();
				$(".paper-from").show();
				$(".paper-word-down").hide();
				$(".paper-add-test").show();
				$("small").hide();
				$(".paper-checkbox").hide();
		}else{
			    $(".paper-edit").show();
				$(".paper-save").hide();
				$(".paper-title").attr("contenteditable","false");
				$(".paper-title>label").hide();
				$(".paper-from").hide();
				$(".paper-word-down").show();
				$(".paper-add-test").hide();
				$("small").show();
		}
     $(".paper-title").click(function(){
     	  if(edit){
     	  	$(".paper-title>label").remove();
     	  }
     })


    /*二级标题经过事件*/
	$(".title-sub").hover(function(){
			if(edit){	
				$(this).parent().css({"border":"1px solid #44B3AD","position":"relative"}).parent().siblings("div").find(".title-sub").css("border","none");
				showEditBox(1,$(this));
			}
			},function(){
				$(this).parent().css("border","none");
				$(".edit-box").remove();
			});
			
	

    /*第一类题经过事件*/
	$(".paper-text-1>li").hover(function(){
			if(edit){	
				$(this).css({"border":"1px solid #44B3AD","position":"relative"}).siblings("li").css("border","none");
				$(".edit-box").remove();
				showEditBox(2,$(this));
			}
			},function(){
				$(this).css("border","none");
				$(".edit-box").remove();
			});

    /*第二类题经过事件*/
	$(".paper-text-2>li").hover(function(){
			if(edit){	
				$(this).css({"border":"1px solid #44B3AD","position":"relative"}).siblings("li").css("border","none");
				$(".edit-box").remove();
				showEditBox(3,$(this));
				$(this).find(".smmall-score").show();
			}
			},function(){
				$(this).css("border","none");
				$(".edit-box").remove();
				$(this).find(".smmall-score").hide();
			});
	
	/*选择难度*/
	$(".my-star").click(function(){
		$(this).removeClass("my-star-0").addClass("my-star-1").prevAll("a.my-star").removeClass("my-star-0").addClass("my-star-1");
	 	$(this).nextAll("a.my-star").removeClass("my-star-1").addClass("my-star-0");
      	      return false;
      });

    /*不限*/
    $(".no-limit").click(function(){
    	$("a.my-star").removeClass("my-star-1").addClass("my-star-0");
    	return false;
    })
    
	/*添加知识点*/
	$(".paper-add-know").click(function(){
			var zTreeObj;
			// zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
			var setting = {
			view:{showIcon:false,nameIsHTML:true}
			};
			// zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
			var zNodes = [
			{name:"第一章章节", open:true, children:[
			{name:"章节章节"}, {name:"章节章节"}]},
			{name:"第二章章节", open:true, children:[
			{name:"章节章节"}, {name:"章节章节"}]}
			];
			
			var zTreeObj1;
			// zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
			var setting1= {
			view:{showIcon:false,nameIsHTML:true}
			};
			// zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
			var zNodes1 = [
			{name:"第一章内容", open:true, children:[
			{name:"内容内容"}, {name:"内容内容"}]},
			{name:"第二章内容", open:true, children:[
			{name:"内容内容"}, {name:"内容内容"}]}
			];
			$(".modal-content").click(function(){
				$(".treeWrap").hide();
			});
			zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);
			zTreeObj1 = $.fn.zTree.init($("#treeDemo1"), setting1, zNodes1);
			$(".treeWrap").show();
			$(".treeWrap").css({"top":($(this).offset().top-$("#myModal-change .modal-dialog").offset().top),"left":($(this).offset().left-$("#myModal-change .modal-dialog").offset().left+190)});
			return false;
	});
	


/*换题里的大纲知识点切换*/
$(".my-tab>li").click(function(){
	if($(this).index()==0){
		$(".look-know").hide();
		$(".look-section").show();
	}else{
		$(".look-know").show();
		$(".look-section").hide();
	}
});


	/*手动选题 第三类题经过事件*/
	$(".paper-text-3>li").hover(function(){
			if(edit){	
				$(this).css({"border":"1px solid #44B3AD","position":"relative"}).siblings("li").css("border","none");
				$(".edit-box").remove();
				showEditBox(4,$(this));
				
			}
			},function(){
				$(this).css("border","none");
				$(".edit-box").remove();
				$(".know-ans").hide();
         	  	$(".know-look-ans").text("查看解答");
			});

    //一键发布 展开 收索   
    $(".publish-open").click(function(){
		if($(this).text()=="展开详情"){
			$(".publish-type-test").slideDown("show");
     		$(this).html('收起内容<span class="glyphicon glyphicon-menu-up"></span>');
     	}else{
			$(".publish-type-test").slideUp("hide");
     		$(this).html('展开详情<span class="glyphicon glyphicon-menu-down"></span>');
     	}
     	return false;
	});

	/*一键发布 选择切换*/  
	//类型 单选
	$(".publish-select-type a").click(function(){
		var _class=$(this).attr("class");
		
		 if(_class=="online-test" || _class=="offline-test" || _class=="online-test active" || _class=="offline-test active" ){
		 	$(".publish-open-box").slideDown("show");
		 }
		 else{
		 	$(".publish-open-box").slideUp("hide");
		 }
		 $(this).addClass("active").siblings().removeClass("active");
		 return false;
	});
	
	//班级  可多选 再点击取消
	$(".publish-select-class a").click(function(){
		var _class = $(this).attr("class");
		 if( $(this).attr("id") == "all" ){
		 	if( _class == "" ){
		 		$(this).addClass("active").siblings().removeClass("active");
		 	}
		 	else {
		 		$(this).removeClass("active");	
		 	}
		 }
		 
		 else{
		 	if( _class == "active" ){
		 		$(this).removeClass("active");
		 	}
		 	else {
		 		$(this).addClass("active");
		 		$("#all").removeClass("active");
		 	}

		 }
		  return false;
	});
	
	//点击显示与隐藏答案简析
	$(".paper-knowledge>span").click(function(){
		var _input = $(this).siblings("input");
		if(_input.prop("checked")){
			_input.prop("checked",false);
			$(".difficult-degree").slideUp("hide");
		}else{
			_input.prop("checked",true);
			$(".difficult-degree").slideDown("show");
		}
	});
	
	$(".paper-answer>span").click(function(){
		var _input = $(this).siblings("input");
		if(_input.prop("checked")){
			_input.prop("checked",false);
			$(".answer-resolve").slideUp("hide");
		}else{
			_input.prop("checked",true);
			$(".answer-resolve").slideDown("show");
		}
	});

	
	$(".radio_lists input[type='radio']").click(function(){
		if($(this).prop("checked") && $(this).index(".radio_lists input[type='radio']")==3 ){
			$(".form_date_1").css("display","inline-table");
		}else{
			$(".form_date_1").css("display","none");
		}
	});


});


/*经过添加操作框 type 类型  parent 父级对象*/
function showEditBox(type,parent){
	  var box1=$('<ul class="edit-box list-inline"><li><a href="#" data-toggle="modal" data-target="#myModal-title">修改题名</a></li><li>每小题<input type="number" min="0" />分</li><li><a href="">向上合并</a></li><li><a href="">上移</a></li><li><a href="">下移</a></li><ul>');
	  var box2=$('<ul class="edit-box list-inline"><li><input type="number" min="0"/>分</li><li><a href="#" onclick="window.open(\'analysis.html\',\'_blank\',\'scrollbars=0,resizable=0,width=800,height=600,left=200,top=20, status=no, menubar=no, location=no,toolbar=no\');return    false">查看解析</a></li><li><a href="">上移</a></li><li><a href="">下移</a></li><li><a href="#" data-toggle="modal" data-target="#myModal-change">换题</a></li><li><a href="">拆分</a></li><li><a href="">删除</a></li><li><a href="#" data-toggle="modal" data-target="#myModal-error">挑错</a></li><ul>');
	  var box3=$('<ul class="edit-box list-inline"><li>&nbsp;每小题<input type="number" min="0" class="s-score"/>分</li><li><a href="#" onclick="window.open(\'analysis.html\',\'_blank\',\'scrollbars=0,resizable=0,width=800,height=600,left=200,top=20, status=no, menubar=no, location=no,toolbar=no\');return    false" >&nbsp;查看解析</a></li><li><a href="">&nbsp;上移</a></li><li><a href="">&nbsp;下移</a></li><li><a href="#" data-toggle="modal" data-target="#myModal-change">&nbsp;换题</a></li><li><a href="">&nbsp;删除</a></li><li><a href="#" data-toggle="modal" data-target="#myModal-error">&nbsp;挑错</a></li><ul>');
	  var box4=$('<ul class="edit-box list-inline"><li><a href="#">选用此题</a></li><li><a href="#" class="know-look-ans">查看解答</a></li><li><a href="#" class="collectionTest">收藏</a></li><ul>');
	  var box4_1=$('<ul class="edit-box list-inline"><li><a href="#">选用此题</a></li><li><a href="#" class="know-look-ans">查看解答</a></li><li><a href="#" class="collectionTest">已收藏</a></li><ul>');
	  if(type==1){
	  	parent.append(box1);
	  }
	  else if(type==2){
	  	parent.append(box2);
	  }
	  else if(type==3){
	  	parent.append(box3);
	  }else if(type==4){
	  	if(parent.attr("data-type")==0){
	  		parent.append(box4);
	  	}else{
	  		parent.append(box4_1);
	  	}
	  	  //查看解答
         $(".know-look-ans").click(function(){
         	 var q=$(".paper-text-3>li").index(parent[0]);
         	  if($(this).text()=="查看解答"){
         	  	$(".know-ans").hide();
             	$(".know-ans").eq(q).show();
             	$(this).text("收起解答");
         	  }else{
         	  	$(".know-ans").eq(q).hide();
         	  	$(this).text("查看解答");
         	  }
         	  return false;
         });
        //收藏
	    $(".collectionTest").click(function(){
	    	var thisLiData=$(".collectionTest").parent().parent().parent().attr("data-type");
	    	//alert(thisLiData);
	        if($(this).text()=="收藏"){
	            $(this).text("已收藏").css("color","#44B3AD");
	            parent.attr("data-type","1");
	        }else{
	            $(this).text("收藏").css("color","#000");
	            parent.attr("data-type","0");
	        }
	        return false;
	    });
	  }
	  /*每小题几分*/
	$(".s-score").keyup(function(){
		$(this).parents(".edit-box").prevAll("ul").find(".smmall-score").val($(this).val());
	});
}


$(".form_date_1").datetimepicker({
	 	format: 'yyyy-mm-dd hh:ii',
	 	startDate:new Date(),
	 	language:"zh-CN",
	 	autoclose: true,
        todayBtn: true,
        forceParse: 0
	 });
	 

/*title*/
	$(".col-md-10>.outline>li").each(function(){
		var txt = $(this).text();
		$(this).attr("title",txt);
	})
	
//弹出窗口位置调整
$('#myModal-change-hand').on('show.bs.modal', function (e) {
    $(this).find(".modal-dialog").css("margin-top",($(window).height()/2-300));
});
     