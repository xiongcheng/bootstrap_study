$(function(){
	
     //类型点击切换效果
     $(".list-types a").click(function(){
          $(this).addClass("active").siblings().removeClass("active");
          return false;
     });

     //排序按钮点击切换效果
   $(".sort-buttons>label").click(function(){
   		$(this).addClass("active").siblings().removeClass("active")
         if($(this).find("span").attr("class").indexOf("glyphicon-arrow-up")!=-1){
           $(this).find("span").removeClass("glyphicon-arrow-up").addClass("glyphicon-arrow-down");
          }
         else{
           $(this).find("span").removeClass("glyphicon-arrow-down").addClass("glyphicon-arrow-up");
         }
         return false;
   });

});