$(function(){
     $(".collectionTest").click(function(){
         if($(this).text()=="收藏试题"){
             $(this).text("已收藏").removeClass("color-change-green").addClass("color-change-yellow");
         }else{
            $(this).text("收藏试题").removeClass("color-change-yellow").addClass("color-change-green");
         }
     });
	
	/*动态解析*/
	$(".dynasmic").click(function() {
		$("#myModal-vieo").modal("show");
	})
	
	/*历史错误*/
	$(".history_btn").click(function() {
		$("#myModal-h-error").modal("show");
	});
	
	/*点击图片放大*/
	var _width=$(".history_detail .test_img img").width();
	$(".history_detail .test_img img").click(function() {
		var the_width=$(this).width();
		if(the_width==_width) {
			$(this).css("width",""+_width*2+"");
			the_width=_width*2;
		}
		else {
			$(this).css("width",""+_width+"");
		}
	});
	
	/*修订*/
	var E_display=$(".revise_edit").css("display");
	$(".revise_content").click(function() {
		$(".revise_content").hide();
		if(E_display=="none") {
			$(".revise_edit").show();
			$(".revise_edit textarea").focus();
		}	
		return false;
	})
	$(".revise_edit button").click(function() {
			$(".revise_edit").hide();
			$(".revise_content").show();
	})
	
	
	KindEditor.ready(function(K) {
                window.editor = K.create('#editor_id1',{
                uploadJson :'../../../common/kindeditor/jsp/upload_json.jsp',
				items:['undo', 'redo', '|', 'preview','cut', 'copy', 'paste',
						'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
						'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
						'superscript', 'quickformat', 'selectall', '|', 'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
						'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', 'multiimage',
						'flash', 'media', 'insertfile', 'table', 'hr', 'emoticons', 'pagebreak', 'link', 'unlink','fullscreen',
				],
                });
        });
        
    KindEditor.ready(function(K) {
                window.editor = K.create('#editor_id2',{
                uploadJson :'../../../common/kindeditor/jsp/upload_json.jsp',
				items:['undo', 'redo', '|', 'preview','cut', 'copy', 'paste',
						'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
						'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
						'superscript', 'quickformat', 'selectall', '|', 'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
						'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', 'multiimage',
						'flash', 'media', 'insertfile', 'table', 'hr', 'emoticons', 'pagebreak', 'link', 'unlink','fullscreen',
				],
                });
        });
        
    KindEditor.ready(function(K) {
                window.editor = K.create('#editor_id3',{
                uploadJson :'../../../common/kindeditor/jsp/upload_json.jsp',
				items:['undo', 'redo', '|', 'preview','cut', 'copy', 'paste',
						'plainpaste', 'wordpaste', '|', 'justifyleft', 'justifycenter', 'justifyright',
						'justifyfull', 'insertorderedlist', 'insertunorderedlist', 'indent', 'outdent', 'subscript',
						'superscript', 'quickformat', 'selectall', '|', 'formatblock', 'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold',
						'italic', 'underline', 'strikethrough', 'lineheight', 'removeformat', '|', 'image', 'multiimage',
						'flash', 'media', 'insertfile', 'table', 'hr', 'emoticons', 'pagebreak', 'link', 'unlink','fullscreen',
				],
                });
        });
        
	//singal页面历史错误
	$(".history_singal_detail ul li:odd").css({"background":"#EDEDED"});
	
//动态解析图标
//	var thisURL = document.URL; 
//	var  getval =thisURL.split('?')[1];  
  	
//	if(getval=="true") {
//		$(".dynasmic").show();
//	}
//	else {
//		
//		$(".dynasmic").hide();
//	}
	
	
	//判断题的类型
//	var url=document.URL;
//	var getval=url.split('?')[1];
//	var thisType=getval.split('=')[1];
//	if(thisType=='singalSelect') {
//		$(".singalSelect").show();
//	}
//	else if(thisType=='multiSelect') {
//		$('.multiSelect').show();
//	}
//	else if(thisType=='clozeSelect') {
//		$('.clozeSelect').show();
//	}
	
});