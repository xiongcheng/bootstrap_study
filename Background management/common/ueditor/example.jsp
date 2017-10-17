<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>ueditor</title>
</head>
<body>
<form action="" id="form" method="post">
    <script id="myEditor" type="text/plain" name="content" style="height:500px;"></script>
</form>
	<script type="text/javascript" charset="utf-8" src="ueditor/ueditor.config.js"></script>
	<script type="text/javascript" charset="utf-8" src="ueditor/ueditor.all.js"></script>
	<script type="text/javascript" charset="utf-8" src="ueditor/lang/zh-cn/zh-cn.js"></script>
	<script type="text/javascript" charset="utf-8" src="ueditor/kityformula-plugin/addKityFormulaDialog.js"></script>
	<script type="text/javascript" charset="utf-8" src="ueditor/kityformula-plugin/getKfContent.js"></script>
	<script type="text/javascript" charset="utf-8" src="ueditor/kityformula-plugin/defaultFilterFix.js"></script>
	    <script type="text/javascript">
        var ue=UE.getEditor('myEditor',{
            toolbars: [[
            'bold', 'italic', 'underline','insertorderedlist','insertunorderedlist','insertimage','attachment','kityformula',
        ]],
            autoClearinitialContent:true,
            wordCount:true,
            elementPathEnabled:false,
            initialFrameHeight:500
        })
    	</script>
	</body>
</body>
</html>