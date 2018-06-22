$(function(){
	//滚动条
	$("#boxscroll").niceScroll({cursorborder:"",cursorcolor:"#ddd"});
	//购物车移入移出
	$(".shopping-carts,.login").hover(function(){
	    $(this).addClass("on");
		$(this).append('<div class="line"></div>');
		$(this).find("a").next().show();
	},function(){
	    $(this).removeClass("on");
		$(".line").remove();
		$(this).find("a").next().hide();
	});
	//删除
	$(".cart .del").bind("click",function(){
		$(this).parent().remove();
	})
	//导航
	$(".title-list-content dl").hover(function(){
		$(this).addClass("on");
    	$(this).find(".cate_part").show().find("li .cate_part_three").eq(0).show();
	},function(){
		$(this).removeClass("on");
   		$(this).find(".cate_part").hide();
	});
	$(".cate_part li").hover(function(){
		$(this).addClass("on");
    	$(this).find(".cate_part_three").show();
	},function(){
		$(this).removeClass("on");
   		$(this).find(".cate_part_three").hide();
	});
});