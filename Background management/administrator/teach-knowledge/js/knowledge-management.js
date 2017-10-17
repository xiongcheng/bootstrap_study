/*编辑/保存/放弃按钮*/
$(".edit-btn").click(function(){
	if ($(this).text() == "编辑" ){
		$("#add_know1,#add_know2,.btn-yellow").slideDown();
		$(".knowledge_delete").show();
		$(this).text("保存") ;
		$(".box2 .edit-ture>input").attr("disabled",false).addClass("edit-input");
	}
	else if ($(this).text() == "保存") {
		$("#add_know1,#add_know2,.btn-yellow").slideUp();
		$(this).text("编辑") ;
		$(".box2 .edit-ture>input").attr("disabled",true).removeClass("edit-input");
		$(".box2-style div a").css("color","blue");
		$(".box3").hide("normal");
		$(".knowledge_delete").hide();
	}
	else {
		if (confirm("确认放弃编辑？")) {
		$("#add_know1,#add_know2,.btn-yellow").slideUp();
		$(".box2 .btn-green").text("编辑") ;
		$(".box2 .edit-ture>input").attr("disabled",true).removeClass("edit-input");
		$(".box2-style div a").css("color","blue");
		$(".box3").hide("normal");
		$(".knowledge_delete").hide();
		}
		else { 
			return false;
		}
	}
})
// $("#edit_kbowledge").click(function(){
// 	$(".knowledge_delete").show();
// })
// $("#choose2").click(function(){
// 	$(".knowledge_delete2").show();
// })

/*编辑知识点按钮变色*/
$(".box2-style div a").click(function(){
	$(".box2-style div a").css("color","blue");
	$(this).css("color","#F2AE49","text-decoration","underline");
})


/*编辑知识点弹出右边弹框*/
$("#add_know1").click(function(){
	$(".box3").hide("fast");
	$(".box3").show("normal");
	$(".box3>label").text("先备知识点");
})

$("#add_know2").click(function(){
	$(".box3").hide("fast");
	$(".box3").show("normal");
	$(".box3>label").text("后备知识点");
})


$("#textBook_stage2").click(function(){
     var selected_val=$(this).val();
     if(selected_val==1){
        $("#textBook_primary2").show().siblings('.select-default').hide();
        

      }else{
          if(selected_val==2){
               $("#textBook_junior2").show().siblings('.select-default').hide();
          }else{
              $("#textBook_senior2").show().siblings('.select-default').hide();
          }
      }
})
