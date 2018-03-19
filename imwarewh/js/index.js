
$(function(){

var runPage,
	  runPage2,
    interval,
    autoPlay;

autoPlay = function(to) {

    clearTimeout(interval);
    interval = setTimeout(function() {
        runPage.go(to);
    }, 5000);

}

runPage = new FullPage({

	id : 'pageContain',                         
	slideTime : 1000,                            
    effect : {                                     
        transform : {
        	translate : 'X',					 
        	scale : [1, 1],					  
        	rotate : [0, 0]					  
        },
        opacity : [1, 1]                          
    },                           
	mode : 'touch,nav:navBar',               
	easing : [0, .93, .39, .98],                               
    callback : function(index, thisPage) {

    var L = $("#pageContain .page").length-1;
        index = index + 1 > L ? 0 : index + 1;
        autoPlay(index);
    }
});

runSection = new FullPage({

	id : 'article',                            
	slideTime : 800,                               
    effect : {                                    
        transform : {
        	translate : 'Y',					  
        	scale : [1, 1],					  
        	rotate : [0, 0]					   
        },
        opacity : [1, 1]                           
    },                           
	mode : 'touch,wheel',              
	easing : [0, .93, .39, .98],
	callback : function(index, thisPage) {    

        if (index === 0) {
        	autoPlay(runPage.thisPage() + 1);
               $(".navBg").css("background","none");
        } else {
        	clearTimeout(interval);
             $(".navBg").css("background","rgba(0,0,0,0.5)");
        }
    }
});

interval = setTimeout(function() {
    runPage.go(runPage.thisPage() + 1);
}, 5000);


//导航栏hover

 $(".navUl li a:not(.firstLi)").hover(function(){
        $(this).addClass("activeLi").parents("li").siblings("li").find("a:not(.firstLi)").removeClass("activeLi");

     },function(){

        $(this).removeClass("activeLi").parents("li").siblings("li").find("a:not(.firstLi)").removeClass("activeLi");
     });


//滚动新闻

    $(function(){
  var $this=$(".news");
  $this.hover(function(){
       clearInterval(scrollTimer);
   },function(){
      scrollTimer=setInterval(function(){
           scrollNews($this);
      },4000);
   });
  var scrollTimer=setInterval(function(){
       scrollNews($this);
  },4000);
})
    
 function scrollNews(obj){
  var $self=obj;
  var height=$self.find("li").height();
  
  $self.animate({"marginTop":-height+"px"},3000,function(){
      $self.css("marginTop",0).find("li:first").appendTo($self);
  })
  
 }


 $(function(){

     $(".hover-text").hide();

//first
        $("#item_first").hover(function(){
            
            $("#text_first").show();
             $("#item_first h3").hide();

        },function(){
            $("#text_first").hide();
            $("#item_first h3").show();
        });

//mid

     $("#item_mid").hover(function(){
            
            $("#text_mid").show();
             $("#item_mid h3").hide();

        },function(){
            $("#text_mid").hide();
            $("#item_mid h3").show();
        });

//last
 $("#item_last").hover(function(){
            
            $("#text_last").show();
             $("#item_last h3").hide();

        },function(){
            $("#text_last").hide();
            $("#item_last h3").show();
    });
 })


 $(function(){

     $(".signfloor a:last-child").hide();
     $(".signfloor").hover(function(){

        $(this).find("a:first-child").hide();
        $(this).find("a:last-child").show();
     },function(){
        $(this).find("a:first-child").show();
        $(this).find("a:last-child").hide();
     })
   })


})




