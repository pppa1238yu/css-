

var detail = {
		loading: '<div class="loading"><img src="img/loading1.gif">数据加载中.....</div>',
		
		init: function(){
			
			detail.bind();
			
			$("#detailMenu li.active").trigger("click");
		},
		bind: function(){
			
			
			$("#detailMenu li").click(function(){
				$(document.body).scrollTop(1);
				$("#detailMenu li").removeClass("active");
				$(this).addClass("active");
				detail.loadModule($(this).attr("action"));
			})
			
		},
		loadModule:function(url){
			if(url == null||url ==''){
				return;
			}
			$("#module").empty().html(detail.loading);
			$.post(url,{}, function(data){
				$("#module").html(data);
			});
		}
}

$(document).ready(function(){
	detail.init();
});