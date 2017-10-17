var zTreeObj;
   // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
   var setting = {
   	               view:{showIcon:false,nameIsHTML:true}
   	           };
   // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
   var zNodes = [
   {name:"第一章内容", open:true, children:[
      {name:"内容内容"}, {name:"内容内容"}]},
   {name:"第二章内容", open:true, children:[
      {name:"内容内容"}, {name:"内容内容"}]}
   ];

var zTreeObj1;
   // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
   var setting1 = {
   	               view:{showIcon:false,nameIsHTML:true,showLine :false}
   	           };
   // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
   var zNodes1 = [
   {name:"实数（15）", open:true, children:[
      {name:"有理数的乘除运算（6）"}, {name:"绝对值（1）"}, {name:"相反数（1）"}]},
    {name:"实数（15）", open:true, children:[
      {name:"有理数的乘除运算（6）"}, {name:"绝对值（1）"}, {name:"相反数（1）"}]}
   ];
   
 $(".glyphicon-trash").click(function(){
 	$(this).parents("tr").remove();
 	return false;
 	})

$(function(){
	var flag=true;
	  zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);

      zTreeObj1 = $.fn.zTree.init($("#treeDemo1"), setting1, zNodes1);

    /*类型切换*/
      $(".my-tab a").click(function(){
      	   if($(this).index(".my-tab a")==0){
      	   	 	 $(".outline-panel").show();
			 	$(".know-panel").hide();
      	   }else{
      	   		$(".outline-panel").hide();
			 	$(".know-panel").show();
      	   }
      });

     /*困难度*/
      $(".my-star").click(function(){
		$(this).removeClass("my-star-0").addClass("my-star-1").prevAll("a.my-star").removeClass("my-star-0").addClass("my-star-1");
	 	$(this).nextAll("a.my-star").removeClass("my-star-1").addClass("my-star-0");
      	      return false;
      });
      /*不限难度*/
      $(".no-limit").click(function(){
      	$(this).siblings("a").removeClass("my-star-1").addClass("my-star-0");
      })
      
      /*试题类型*/
      $(".form-control ").click(function(){
      	$(this).parent().children(".smart-test-type").show();
      return false;
      });
      
      $(".smart-test-type").mouseleave(function(){
      	$(this).hide();
      });
        
      /*点击类型切换效果*/

	$(".tab-list-style li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	})
	
	
	  /*title*/
	$(".quesName").each(function(){
		var txt = $(this).text();
		$(this).attr("title",txt);
	})
	
	$(".outline>li").each(function(){
		var txt = $(this).text();
		$(this).attr("title",txt);
	})
	
});