/****************************教师导航js**************************/
$(".navBar_third li").hover(function(){
	$(this).addClass("active2");
},function(){
	$(this).removeClass("active2");
})
      
/*学生导航切换效果*/
    $(".my-subnav>li").click(function(){
    	$(this).addClass("active").siblings().removeClass("active");
    });
/*学生导航切换效果*/
     
//弹出窗口位置调整
$('.modal').on('show.bs.modal', function (e) {
    $(this).find(".modal-dialog").css("margin-top",($(window).height()/2-300));
});
     
//倒计时插件
function delayURL(url){ 
    var delay = document.getElementById("time").innerHTML;
	var t = setTimeout(function(){delayURL(url)}, 1000);
    if (delay > 1) {
        delay--;
        document.getElementById("time").innerHTML = delay;
    }
    else {
    	clearTimeout(t); 
        window.location.href = url;
    }        
}   
//返回顶部按钮
$(function(){  
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失  
        $(function () {  
            $(window).scroll(function(){  
                if ($(window).scrollTop()>50){  
                    $(".to-top").fadeIn(500);  
                }  
                else  
                {  
                    $(".to-top").fadeOut(500);  
                }  
            });  
  
            //当点击跳转链接后，回到页面顶部位置  
  
            $(".to-top").click(function(){  
                $('body,html').animate({scrollTop:0},500);  
                return false;  
            });  
        });  
    });  
