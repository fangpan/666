$(function(){
	

    /*瀑布流初始化设置*/
	var $grid = $('.grid').masonry({
		itemSelector : '.grid-item',
		gutter:10
    });

  $.ajax({
       		dataType:"json",
	        type:'get',
	        async:true,
	        url:'article.json',
            success:function(res){

            	dataFall = res.data.article;
            	setTimeout(function(){
            		appendFall();
            	},500)
            },
            error:function(e){
            	console.log('请求失败')
            }
            
           })

    // layout Masonry after each image loads
	$grid.imagesLoaded().done( function() {
		
	  $grid.masonry('layout');
	});
	   var pageIndex = 0 ; var dataFall = [];
	   var totalItem = 10;
	   $(window).scroll(function(){

	   	$grid.masonry('layout');
                var scrollTop = $(this).scrollTop();var scrollHeight = $(document).height();var windowHeight = $(this).height();  
                if(scrollTop + windowHeight == scrollHeight){
                        $.ajax({
	               		dataType:"json",
				        type:'get',
				        async:true,
				        url:'article.json',
			            success:function(res){

			            	dataFall = res.data.article;
			            	setTimeout(function(){
			            		appendFall();
			            	},500)
			            },
			            error:function(e){
			            	console.log('请求失败')
			            }
			            
	                 })
                	
                }

		   var scroll = $(window).scrollTop();
		   var height = $(window).height()

			if (scroll > height) {
				$("#toTop").show();
			}
			else{
				$("#toTop").hide();
			}
                
         })  
 
        
        function appendFall(){

          $.each(dataFall, function(index ,value) {
          	var dataLength = dataFall.length;
          	$grid.imagesLoaded().done( function() {
	        $grid.masonry('layout');
	           });
	      var detailUrl;
          var $griDiv = $('<div class="grid-item item" id="'+value.id+'">');

         var $p1 = $("<p style='color:#FF6889'>");
         $p1.html(value.name).appendTo($griDiv);

		 var $p2 = $("<p>");
		 $p2.html(value.num+"号").appendTo($griDiv);

      	  var $img = $("<img class='item-img' onclick='loadMv(this)'>");
      	  $img.attr('src',value.articlePic).appendTo($griDiv);
      	 
         var $p3 = $("<p style='color:#FF6889'>");
         $p3.html(value.browseCount+"票").appendTo($griDiv);

         var $p4 = $("<p style='text-align:right;'>");
        $p4.html('<button onclick="vote(this)">投票</button>').appendTo($griDiv);
      	 

      	  var $items = $griDiv;

		  $items.imagesLoaded().done(function(){
				 $grid.masonry('layout');
	             $grid.append( $items ).masonry('appended', $items);
			})
           });
        }
    
})
