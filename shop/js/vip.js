$(function(){

    $(".span").hover(
        function(){$(this).children(".add").show().siblings("span").addClass("change") },

        function(){$(this).children(".add").hide().siblings("span").removeClass("change")})

})


    $(function(){

     $(".firstli").hover(

        function(){$(this).children(".ulnext").show()},

     function(){$(this).children(".ulnext").hide()})

    })

$(function(){

//下面圆点点击播放

 $(".con>img:first").show()

 $(".yuan>li:first").addClass("on");

$(".yuan>li").click(function(){

var i=$(this).index();

$(".con>img").eq(i).show().siblings("img").hide()

$(this).addClass("on").siblings("li").removeClass("on")
})


//自动播放

var auto=setInterval("showAuto()",1500)

   $(".con").hover(function(){
      clearInterval(auto);

   },function(){auto=setInterval("showAuto()",1500)

   })

})


function showAuto(){

 var n = $(".on").index();

  if (n == 4) {n = -1;} 

$(".con>img").eq(n+1).show().siblings(".con>img").hide()

$(".yuan>li").eq(n+1).addClass("on").siblings("li").removeClass("on")

}


$(function(){

//自动播放

var auto=setInterval("show()",1500)

   $(".lunbocon").hover(function(){
      clearInterval(auto);

   },function(){auto=setInterval("show()",1500);

   })

})

function show(){

 var n = $(".lunon").index();

  if (n == 2) {n = -1;} 

$(".lunbocon>img").eq(n+1).show().siblings(".lunbocon>img").hide()

$(".lunboyuan>li").eq(n+1).addClass("lunon").siblings("li").removeClass("lunon")
}

$(document).ready(function() {
      $(".tablist").click(function () {
        var i=$(this).index();
        $(this).addClass("select").siblings().removeClass("select") ;
        $(".concon").eq(i).show().siblings(".concon").hide();
      })
   });
 
  $(function(){

    $(".ulnext>li").hover(
        function(){$(this).children(".shopcon").show() },
        function(){$(this).children(".shopcon").hide() })

})

