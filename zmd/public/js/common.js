(function($){
  $.extend({
    dialog:function(options){
      //time参数和widthRelativeDom是自定义加的，widthRelativeDom是用在宽度百分比用的，相对哪个DOM宽度来算
      var defaults={id: 'Tips',title:false,fixed: true,modal:false,widthRelativeDom:$('.container-fluid')};
      options = $.extend({}, defaults, options);

      if(typeof (options.width)!='undefined'){
        //支持宽度百分比
        var re=/^[0-9]+([.]{1}[0-9]+){0,1}\%$/;
        if((re.test($.trim(options.width)))){
          options.width=parseFloat(options.width.replace('%',''));
          var widthRelativeDom=options.widthRelativeDom.length>0?options.widthRelativeDom.first():$(window);
          options.width=parseInt(widthRelativeDom.width()*(options.width/100))-50;
        }
      }

      if(typeof (dialog.get(options.id))!='undefined'){
        dialog.get(options.id).close().remove();
        if(options['time']==0){ return null;} //time=0 表示关闭框口不再打开新的。
      }
      var dlg=dialog(options);
      if(options.modal==true){
        dlg.showModal();
      }else{
        dlg.show();
      }
      if(options['time']>0){
        setTimeout(function () {
          dlg.close().remove();
        }, options['time']*1000);
      }
      return dlg;
    },
    confirm:function(title,content,okCallBack,cancelCallBack){
      $.dialog({id:'confirm',title:title,content:content,ok:function(){
        okCallBack();
      },cancel:function(){
        cancelCallBack();
      }});
    },
    keFu: function(option) {
      var keFuBox=$(".keFuBox");
      if(keFuBox.length<1){
        $("body").append('<div class="keFuBox"></div>');
      }
      var liHtml='';
      liHtml+='<li><a href=" http://im.189.cn/cw/?cf=1&cid='+option.cid+'&manid='+option.manid+'">'+option.name+'</a></li>';

      $(".keFuBox").html('<ul>'+liHtml+'</ul>');
    },
    bottomMenu:function(options){
      var defaults={mallId: '',keFuCss:''};
      options = $.extend({}, defaults, options);
      if(options.mallId=='whccbw'){ options.keFuCss='hidden';}

      var html='<div class="app-solid">';
          html+='<div class="app-fixed">';
          html+=' <div class="container-fluid">';
          html+='   <div class="app-nav">';

          html+='     <div class="row">';
          html+='       <div class="col-xs-4 col-md-4 appItem">';
          html+='         <div class="'+options.keFuCss+'">';
          html+='         <a target="_blank" href="http://im.189.cn/cw/?cf=1&cid=8024&manid=910"><img src="public/images/support.png" style="" class="" alt=""/></a>';
          html+='         <span>在线客服</span>';
          html+='         </div>';
          html+='       </div>';
          html+='       <div class="col-xs-4 col-md-4 appItem">';
          html+='           <a href="getOrderQueryPage.htm?mallId='+options.mallId+'"><img src="public/images/search.png" style="" class=" " alt=""/></a>';
          html+='           <span>订单查询</span>';
          html+='       </div>';
          html+='       <div class="col-xs-4 col-md-4 appItem" style="padding-right: 0px;">';
          html+='           <div style="background-color:#777;width: 80px;float: right;padding: 9px;0 ">';
          html+='             <a href="#top"><img src="public/images/top.png" style="" class="" alt=""/></a>';
          html+='           </div>';
          html+='       </div>';
          html+='     </div>';

          html+='   </div>';
          html+=' </div>';

          html+='</div>';
          html+='</div>';

          $('body').append(html);
    },
    //统计Object或string的个数
    countOA:function(o){
      var t = typeof o;
      if(t == 'string'){
        return o.length;
      }else if(t == 'object'){
        var n = 0;
        for(var i in o){
          n++;
        }
        return n;
      }
      return 0;
    },
    popupAd:function(setting){
      var defaults={closeTime: 0,imgUrl:'',imgHref: ''};
      setting = $.extend({}, defaults, setting);
      $("body").append('<div class="popupAdBg"></div><div class="popupAd"><div class="container-fluid"><img class=" img_fluid img_fluid" src="'+setting.imgUrl+'"><div class="ac"><span class="time">&nbsp;</span><span class="cs">×</span></div></div></div>');
      //
      if(setting.closeTime > 0){
        $(".popupAd .time").html(setting.closeTime);
        var adInterval=setInterval(function(){
          setting.closeTime--;
          $(".popupAd .time").html(setting.closeTime);
          if(setting.closeTime<1){
            $('.popupAd .cs').click();
            clearInterval(adInterval);
          }
        },1000);
      }
      if(setting.imgHref!=''){
        $(".popupAd img").wrap('<a href="'+setting.imgHref+'"></a>');
      }
      $('.popupAd .cs').click(function(){
        $(".popupAdBg").remove();
        $(".popupAd").remove();
        if(setting.closeTime > 0){clearInterval(adInterval);}
      });
    }
  });

  $.fn.extend({
    //下拉框初始化
    initDropDownMenu:function(initCallBack,clickCallBack){

      $(this).find("li").click(function(){
        var btnGroupObj=$(this).parents('.btn-group').first();
        var liaObj=$(this).find('a');
        btnGroupObj.find('.dropdown-menu li').removeClass('active');
        $(this).addClass('active');
        btnGroupObj.find('button .txt').html(liaObj.html());
        btnGroupObj.find('input[type=hidden]').val(liaObj.attr('data-value'));
        if(typeof(clickCallBack)=='function'){
          clickCallBack();
        }
      });

      $.each($(this),function(key,val){
        var btnGroupObj=$(this).parents('.btn-group').first();

        if($(this).find('li.active').length>0){
          var firstLi=$(this).find('li.active a').first().click();
        }else{
          var firstLi=$(this).find('li a').first();
          firstLi.parents('li').first().addClass('active').click();
        }
        btnGroupObj.find('button .txt').html(firstLi.html());
      });

      if(typeof(initCallBack)=='function'){
        initCallBack();
      }
    },
    posfixed:function(options){
      var defaults={position: 'fixed'};
      options = $.extend({}, defaults, options);
      $(this).css(options);

    },
    webUploads:function(options){
      var ratio = window.devicePixelRatio || 1,state='pending';
      var defaults={
        swf:'public/webuploader/Uploader.swf',
        server:'uploadSuccess.json',
        pick: '#picker',
        fileNumLimit:0,
        accept: {
          title: 'Images',
          extensions: 'gif,jpg,jpeg,bmp,png',
          mimeTypes: 'image/*'
        },

        //自定参数
        fileList:'#fileList',
        uploadBtn:'#ctlBtn',
        thumbnailWidth:100 * ratio,
        thumbnailHeight:100 * ratio,
        uploadCompleteCallBack:function(fileListObj){

        }
      };
      var errorLog=[];
      options = $.extend({}, defaults, options);


      var uploader = WebUploader.create(options);
      var webUploader=$(this);
      var fileListObj = webUploader.find(options.fileList);

      //取消监听
      fileListObj.on('click','.close',function(){
        var fileItem= $(this).parents('.file-item').first();
        uploader.cancelFile( fileItem.attr('id') );
        fileItem.remove();
      });

      //当文件被加入队列之前触发
      uploader.on('beforeFileQueued',function(file){
        var files=uploader.getFiles();
        if(options.fileNumLimit==1 && files.length>0){
          fileListObj.find('.file-item').first().find('.close').click();
        }
      });

      //当文件被加入队列以后触发
      uploader.on( 'fileQueued', function( file ) {
        var $li = $(
            '<div id="' + file.id + '" class="file-item thumbnail">' +
              '<img data-src="">' +
              '<div class="info" title="'+file.name+'">' + file.name + '</div>' +
              '<div class="close">×</div>' +
              '</div>'
          ),
          $img = $li.find('img');

        // $list为容器jQuery实例
        fileListObj.append( $li );

        //
        // 如果为非图片文件，可以不用调用此方法。
        // thumbnailWidth x thumbnailHeight 为 100 x 100
        uploader.makeThumb( file, function( error, src ) {
          if ( error ) {
            $img.replaceWith('<span>不能预览</span>');
            return;
          }

          $img.attr( 'src', src );
        }, options.thumbnailWidth, options.thumbnailHeight );
      });

      // 文件上传过程中创建进度条实时显示。
      uploader.on( 'uploadProgress', function( file, percentage ) {
        var $li = $( '#'+file.id ),
          $percent = $li.find('.progress span');

        // 避免重复创建
        if ( !$percent.length ) {
          $percent = $('<p class="progress"><span></span></p>')
            .appendTo( $li )
            .find('span');
        }

        $percent.css( 'width', percentage * 100 + '%' );
      });

      // 文件上传成功，给item添加成功class, 用样式标记上传成功。
      uploader.on( 'uploadSuccess', function( file ,response) {
        $( '#'+file.id ).addClass('upload-state-done');
        if(response.code=='0'){
          $( '#'+file.id).find('.close').hide();
          $( '#'+file.id).find('img').attr('data-src',response.data.src);
          $('<div class="success">上传成功！</div>').appendTo( $( '#'+file.id ) );
        }else{
          $('<div class="error">上传失败！</div>').appendTo( $( '#'+file.id ) );
        }
      });

      /*// 文件上传失败，显示上传出错。
       uploader.on( 'uploadError', function( file ) {
       var $li = $( '#'+file.id ),
       $error = $li.find('div.error');

       // 避免重复创建
       if ( !$error.length ) {
       $error = $('<div class="error"></div>').appendTo( $li );
       }

       $error.text('上传失败');
       });*/

      uploader.on( 'all', function( type ) {
        if ( type === 'startUpload' ) {
          state = 'uploading';
        } else if ( type === 'stopUpload' ) {
          state = 'paused';
        } else if ( type === 'uploadFinished' ) {
          state = 'done';
        }

        if ( state === 'uploading' ) {
          $(options.uploadBtn).text('暂停上传');
        } else {
          $(options.uploadBtn).text('开始上传');
        }
      });

      webUploader.find(options.uploadBtn).on( 'click', function() {
        if ( state === 'uploading' ) {
          uploader.stop();
        } else {
          uploader.upload();
        }
      });


      // 完成上传完了，成功或者失败，先删除进度条。
      uploader.on( 'uploadComplete', function( file ) {
        $( '#'+file.id ).find('.progress').remove();
        options.uploadCompleteCallBack(fileListObj);
      });

      // 当validate不通过时，会以派送错误事件的形式通知调用者
      uploader.on( 'error', function( type ,limit,file) {
        //console.log(file)
        errorLog.push({'type':type,'limit':limit,'file':file});
      });
      uploader.on( 'filesQueued', function( files) {
        var errors=[];
        $.each(errorLog,function(key,val){
          if(val.type='F_EXCEED_SIZE'){
            errors.push('<p>'+val.file.name+' 文件超过了大小！单个文件最大只能 '+WebUploader.Base.formatSize(val.limit)+'</p>');
          }
        })
        if(errors.length>0){
          $.dialog({
            title:'错误提示',
            content:errors.join("<br>"),
            width:500,
            modal:true,
            okValue:'确定'
          });
        }
        errorLog=[];
      });
    }
  })

  $(document).ready(function(){
		
		//单选
		$("form").on('click','input[name^=item][type=checkbox]',function(){
			var formObj=$(this).parents('form').first();
			var countNum=$(".manage").find('input[name^=item][type=checkbox]').length;
			var checkedNum=$(".manage").find('input[name^=item][type=checkbox]:checked').length;

			if(countNum == checkedNum){
        formObj.find("input[name=checkAll]").attr('checked','checked').prop('checked',true);;
			}else{
        formObj.find("input[name=checkAll]").removeAttr('checked').prop('checked',false);;
			}
		});

		//全选
		$(".manage").on('click','input[name=checkAll]',function(){
			if($(this).is(':checked')){
			  $(".manage").find('input[name^=item][type=checkbox]:not(:disabled)').attr('checked','checked').prop('checked',true);;
			}else{
			  $(".manage").find('input[name^=item][type=checkbox]').removeAttr('checked').prop('checked',false);
			}
		});

	})
})(jQuery)