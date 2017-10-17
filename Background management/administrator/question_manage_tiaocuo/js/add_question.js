$(".question_wrong_msg").hover(function(){
	$(this).find("img").attr('src','img/worng_green.png');
	$(this).find("span").addClass("wrong_msg_daochu");
	
},function(){
	$(this).find("img").attr('src','img/wrong_gray.png');
	$(this).find("span").removeClass("wrong_msg_daochu");
	
}

)

			
		