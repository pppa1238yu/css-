$(document).ready(function(){
	index.init();
});

var index = {
		init: function(){
			
			//绑定事件
			index.bind();
			
			//默认显示首页
			$("#nav-items li a:eq(0)").click();
			
			
		},
		bind: function(){
			$("#nav-items li a").click(function(){
				$("#nav-items li").removeClass("active");
				$(this).parent().addClass("active");
				$.post($(this).attr("path"),{itemId:$(this).attr("itemId")}, function(data){
					$("#body").html(data);
				});
			});
		}
}