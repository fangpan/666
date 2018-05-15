(function($){
  $.fn.extend({
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

      // 文件上传失败，显示上传出错。
       uploader.on( 'uploadError', function( file ) {
       var $li = $( '#'+file.id ),
       $error = $li.find('div.error');

       // 避免重复创建
       if ( !$error.length ) {
       $error = $('<div class="error"></div>').appendTo( $li );
       }

       $error.text('上传失败');
       });

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

})(jQuery)