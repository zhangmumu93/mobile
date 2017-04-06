$(function(){
	//轮播
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    
    //侧边栏
	var flag=1;
	$(".aside").click(function() {
		if (flag==1) {
			$(".aside").attr("src","images/ico_btn2.png")
			$(".content").animate({"right": "2.55rem"}, 500);
			$(".toSide").animate({"right": "0"}, 500);
			$("#aleScl").animate({"right": "-0.76rem"}, 500);
			flag=2;
		} else if (flag==2){ 
			$(".aside").attr("src","images/ico_btn2_hov.png")
			$(".content").animate({"right": "0"}, 500);
			$(".toSide").animate({"right": "-2.55rem"}, 500);
			$("#aleScl").animate({"right": "0rem"}, 500);
			flag=1;
		}
	});
    //文字滚动
    function sclool(){
    $("#hotnewsUl li:first").animate({"marginTop":"-0.4rem"},1000,function(){
// 	console.log($("#hotnewsUl li:first").html())
   	$(this).css({"marginTop":"0rem"}).appendTo($("#hotnewsUl"))
   });
   }
//  sclool()
   setInterval(sclool, 1000);
   //地区切换
            $(".hot-school .area_titel ul li:first").addClass('schoolOn');
            $(".hot-school .area_content ul:not(:first)").hide();
            $(".hot-school .area_titel ul").find('li').each(function(index) {
              $(this).hover(function() {
                  $(this).addClass('schoolOn').siblings().removeClass('schoolOn');
                  $(".hot-school .area_content ul").hide().eq(index).show();
              });
          });
//    加载更多
          var num=1;
           $("#onClick").click(function(){
          	if(num==1){
             $("#ulul li:nth-of-type(even)").clone().appendTo("#ulul");
             $("#onClick").html("点击收起更多");
             num=2;
          	}else if(num==2){
          	$("#ulul li:gt(4)").remove();
             $("#onClick").html("点击加载更多");
             num=1;
        	}
      }); 
//微信  
var mark=1
$("#wePhone").click(function(){
	if(mark==1){
	$("#wePhone").attr("src","images/ico_btn23.png");
    $("#img1").animate({"left": "1rem"}, 500);
    $("#img2").animate({"left": "1.8rem"}, 500);
    $("#img3").animate({"left": "2.6rem"}, 500);
    $("#img4").animate({"left": "3.4rem"}, 500);
    $("#img5").animate({"left": "4.2rem"}, 500);
    mark=2;
	}else if(mark==2){
	$("#wePhone").attr("src","images/ico_btn22.png")
	$("#img1").animate({"left": "0.15rem"}, 500);
    $("#img2").animate({"left": "0.15rem"}, 500);
    $("#img3").animate({"left": "0.15rem"}, 500);
    $("#img4").animate({"left": "0.15rem"}, 500);
    $("#img5").animate({"left": "0.15rem"}, 500);
    mark=1
	}

});
   //返回顶部
   $("#img5").click(function() {
      $("html,body").animate({scrollTop: 0 }, 500)
    });

//手机弹窗
var timer;
var timer2;
     $("#aleScl").click(function(){
       $(this).animate({"right": "-0.76rem"}, 500);
       $(".alt_bg").show();
       $(".alt_img").show();
    }); 
      $(".alt_bg").click(function(){
     	$("#aleScl").animate({"right": "0rem"}, 500);
        $(".alt_bg").hide();
        $(".alt_img").hide();
     	});
     $("#delete").click(function(){
      clearInterval(timer2);
      	$("#aleScl").animate({"right": "0rem"}, 500);
        $(".alt_bg").hide();
        $(".alt_img").hide();
        clearInterval(timer);
       timer2=setInterval(oShow,10000)
     });
     function oShow(){
        $(".alt_bg").show();
        $(".alt_img").show();
        $("#aleScl").animate({"right": "-0.76rem"}, 500);
     }
     timer=setInterval(oShow,5000)
    $(".sleSducontent").hide();
    var n=1;
    $("#showList").click(function(){
    	if(n==1){
    	$(".sleSducontent").slideDown(500);
    	$("#showList").css({"transform":"rotate(180deg)"})	
    	n=2
    	}else if(n==2){
    $(".sleSducontent").slideUp(500);
    $("#showList").css({"transform":"rotate(0deg)"})
    n=1;
}
 
    });
    // 底部
 $(".foot_cont ul li").hover(function() {
$(this).addClass('oRed').siblings().removeClass('oRed');
 });
});
