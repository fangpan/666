$(function(){

var L=$(".con>.img1").length

//下面圆点点击播放

 $(".con>.img1:first").show()

 $(".yuan>li:first").addClass("on");

$(".yuan>li").click(function(){

var i=$(this).index();

$(".con>.img1").eq(i).show().siblings(".img1").hide()

$(this).addClass("on").siblings("li").removeClass("on")

})


//自动播放

var auto=setInterval("showAuto()",1500)

   $(".con").hover(function(){
      clearInterval(auto);

   },function(){

  auto=setInterval("showAuto()",1500)

   })

})

function showAuto(){
	
 var L=$(".con>.img1").length
 
 var n = $(".on").index();

  if (n == L-1) {n = -1;} 

$(".con>.img1").eq(n+1).show().siblings(".con>.img1").hide()

$(".yuan>li").eq(n+1).addClass("on").siblings("li").removeClass("on")

}


/*nav js*/
 $(function(){
        $('img').each(function(){
            var str = $(this).attr('src');
            $(this).attr('src',str.replace('/thinkcmfx',''))
        })
        $('select').change(function(){
            if($(this).val() != '#')
            window.open($(this).val());
        })
        $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });
        $('.sy-slides-crop').text('');
        $("#main-menu li.dropdown").hover(function(){
         
            $('li').find('.child_navs').hide();
            var L_dropdown = $(this).width();
            var left = $(this).find('.dropdown-toggle').offset().left + L_dropdown/2;
            $(this).find('.child_navs').show();
            $(this).find('ul').show();
            var L = $(this).find('ul').width();
            var L_W = $(window).width();
            var left_li = left - L/2;
            if(L >= L_W/2){
                left_li = L_W/2 - L/2;
            }
            $(this).find('ul').css({'margin-left':left_li+'px'});
        },function(){
            $(this).removeClass("open");
            $('li').find('.child_navs').hide();
        });
        $.post("/index.php?g=user&m=index&a=is_login",{},function(data){
            if(data.status==1){
                if(data.user.avatar){
                    $("#main-menu-user .headicon").attr("src",data.user.avatar.indexOf("http")==0?data.user.avatar:"http://www.msiahb.com/data/upload/[AVATAR]".replace('[AVATAR]',data.user.avatar));
                }

                $("#main-menu-user .user-nicename").text(data.user.user_nicename!=""?data.user.user_nicename:data.user.user_login);
                $("#main-menu-user li.login").show();

            }
            if(data.status==0){
                $("#main-menu-user li.offline").show();
            }

            /*$.post("/index.php?g=user&m=notification&a=getLastNotifications",{},function(data){
                $(".nav .notifactions .count").text(data.list.length);
            });*/

        });
        ;(function($){
            $.fn.totop=function(opt){
                var scrolling=false;
                return this.each(function(){
                    var $this=$(this);
                    $(window).scroll(function(){
                        if(!scrolling){
                            var sd=$(window).scrollTop();
                            if(sd>100){
                                $this.fadeIn();
                            }else{
                                $this.fadeOut();
                            }
                        }
                    });

                    $this.click(function(){
                        scrolling=true;
                        $('html, body').animate({
                            scrollTop : 0
                        }, 500,function(){
                            scrolling=false;
                            $this.fadeOut();
                        });
                    });
                });
            };
        })(jQuery);

        $("#backtotop").totop();
    });

/*tab js*/
 $(function() {
      $(".tablist1").click(function () {
        var i=$(this).index();
        $(this).addClass("select1").siblings().removeClass("select1") ;
        $(".con1").eq(i).show().siblings().hide();
      })  
   });

  $(function() {
      $(".tablist2").click(function () {
        var n=$(this).index();
        $(this).addClass("select2").siblings().removeClass("select2") ;
        $(".con2").eq(n).show().siblings().hide();
      })  
   });

     $(function() {
      $(".tablist3").click(function () {
        var n=$(this).index();
        $(this).addClass("select3").siblings().removeClass("select3") ;
        $(".con3").eq(n).show().siblings().hide();
      })  
   });

     

