$(function(){
	
	/*旧密码验证*/
	$(".OldPs").keyup(function(){
		checkStyle("OldPsFontImg",$(this).val()!="");
  	});
  	
  	/*新密码验证*/
  	$(".NewPs").keyup(function(){
  		checkStyle("NewPsFontImg",$(this).val()!="");
  	});
  	
  	/*再次确认新密码*/
  	$(".NewPsAg").keyup(function(){
  		checkStyle("NewPsAgFontImg",$(this).val()!="" && $(".NewPs").val()==$(".NewPsAg").val());
  	});
  	
  	/*姓名验证*/
  	$(".Name").keyup(function(){
		checkStyle("NameSP",$(this).val()!="");
  	});
  	/*用户名验证*/
  	$(".UserName").keyup(function(){
  		checkStyle("UserNameSp",$(this).val()!="");
  	});
  	
  	/*邮箱验证*/
  	$(".Email").keyup(function(){
  		var mail=$(this).val();
  		 var filter  = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
 			checkStyle("EmailSp",filter.test(mail));
 	});
 	
 	/*电话号码验证*/
  	$(".TelNum").keyup(function(){
  		var tel=$(this).val();
  		var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
    	var isMob=/^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
		
		checkStyle("TelNumSp",isPhone.test(tel) || isMob.test(tel));
  	});
  	
  	/*家长电话号码验证*/
  	$(".parentTelNum").keyup(function(){
  		var tel=$(this).val();
  		var isPhone = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
    	var isMob=/^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
		
		checkStyle("parentTelNumSp",isPhone.test(tel) || isMob.test(tel));
  	})
  	
})


/*判断正确与否的样式  flag是表示true|false  style是要改变的div的class*/
function checkStyle(style,flag){
	if(flag){
 				$("."+style).removeClass("glyphicon glyphicon-remove  Wrong").addClass("glyphicon glyphicon-ok  Right");
 			}else{
 				$("."+style).removeClass("glyphicon glyphicon-ok  Right").addClass("glyphicon glyphicon-remove  Wrong");
 		            return false;
 			}
}
