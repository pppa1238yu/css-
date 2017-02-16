
var summary = {
		init: function(){
			
			//绑定事件
			summary.bind();
			
			//初始化各个状态的数量
			summary.groupCount();
		},
		bind: function(){
			
			//概况详细数据链接隐藏和显示
			$(".summary").hover(function(){
				$("#summary_detail").show();
			},function(){
				$("#summary_detail").hide();
			});
			
			//详细链接点击事件
			$("#summaryDetail").click(function(){
				$("#nav-items li").removeClass("active");
				$("#risk_detail").addClass("active");
				$.post($(this).attr("path"),{itemid:$(this).attr("itemid")}, function(data){
					$("#body").html(data);
				});
			});
			
			//刷新对账数量
			$("#refreshSummary").click(function(){
				summary.groupCount();
			});
		},
		groupCount: function(){
			$.ajax({
				url: 'order/groupCount',
				dataType: 'json',
				type: 'post',
				success: function(data){
					if(data.success){
						$.each(data.counts, function(i,item){
							$("#"+item.name).html(item.value);
						});
					}
				}
			});
		}
		
}

$(document).ready(function(){
	summary.init();
});
	
	