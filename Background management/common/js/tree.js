/*第一个树的数据*/
var zTreeObj;
   // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
   var setting = {
   	               view:{showIcon:false,nameIsHTML:true}
   	           };
   // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
   var zNodes = [
   {name:"全部内容",open:true,children:[
	   {name:"第一章内容", open:true, children:[
	      {name:"内容内容"}, {name:"内容内容"}]},
	   {name:"第二章内容", open:true, children:[
	      {name:"内容内容"}, {name:"内容内容"}]}
	   ]}
   ];
/*第一个树的数据*/

/*第二个树的数据*/
var zTreeObj1;
   // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
   var setting1 = {
   	               view:{showIcon:false,nameIsHTML:true,showLine :false}
   	           };
   // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
   var zNodes1 = [
    {name:"初中数学",open:true,children:[
	    {name:"实数（15）", open:true, children:[
	      {name:"有理数的乘除运算（6）"}, {name:"绝对值（1）"}, {name:"相反数（1）"}]},
	    {name:"实数（15）", open:true, children:[
	      {name:"有理数的乘除运算（6）"}, {name:"绝对值（1）"}, {name:"相反数（1）"}]}
	   ]}
	];
/*第二个树的数据*/

   $(document).ready(function(){

      zTreeObj = $.fn.zTree.init($("#treeDemo"), setting, zNodes);     //第一棵树

      zTreeObj1 = $.fn.zTree.init($("#treeDemo1"), setting1, zNodes1);  //第二棵树

});

   /*点击类型切换效果*/
$(".tab-list-style li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
})
