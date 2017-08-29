 $(document).ready(function () {
      var trigger = $('.hamburger'),
          overlay = $('.overlay'),
         isClosed = false;

        trigger.click(function () {
          hamburger_cross();      
        });

        function hamburger_cross() {

          //导航栏打开状态
          
          if (isClosed == true) {          
    
            trigger.removeClass('is-open');
            trigger.addClass('is-closed');
            
            $("#page-content").removeClass("contentMove")

             $("#openbagpng").hide();
             $("#returnpng").show();
             $(".returnIndex").hide();

             isClosed = false;

          } else {  

            //导航栏关闭状态
            
            trigger.removeClass('is-closed');
            trigger.addClass('is-open');

            $("#page-content").addClass("contentMove") 

            $("#returnpng").hide();
            $("#openbagpng").show();
            $(".returnIndex").show();

             isClosed = true;
          }
      }
      
      $('[data-toggle="offcanvas"]').click(function () {
            $('#wrapper').toggleClass('toggled');

      });  

      $(".wayList").click(function(){
        window.location.href="solution.html"
      })

    });
    