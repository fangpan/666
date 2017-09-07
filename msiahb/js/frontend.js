;(function () {
    //鍏ㄥ眬ajax澶勭悊
    $.ajaxSetup({
        complete: function (jqXHR) {},
        data: {
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //璇锋眰澶辫触澶勭悊
        }
    });

    if ($.browser && $.browser.msie) {
        //ie 閮戒笉缂撳瓨
        $.ajaxSetup({
            cache: false
        });
    }

    //涓嶆敮鎸乸laceholder娴忚鍣ㄤ笅瀵筽laceholder杩涜澶勭悊
    if (document.createElement('input').placeholder !== '') {
        $('[placeholder]').focus(function () {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function () {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur().parents('form').submit(function () {
            $(this).find('[placeholder]').each(function () {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            });
        });
    }


    //鎵€鏈夊姞浜哾ialog绫诲悕鐨刟閾炬帴锛岃嚜鍔ㄥ脊鍑哄畠鐨刪ref
    if ($('a.js-dialog').length) {
        Wind.use('artDialog', 'iframeTools', function () {
            $('.js-dialog').on('click', function (e) {
                e.preventDefault();
                var $_this = this,
                    _this = $($_this);
                art.dialog.open($(this).prop('href'), {
                    close: function () {
                        $_this.focus(); //鍏抽棴鏃惰瑙﹀彂寮圭獥鐨勫厓绱犺幏鍙栫劍鐐�
                        return true;
                    },
                    title: _this.prop('title')
                });
            }).attr('role', 'button');

        });
    }

    //鎵€鏈夌殑ajax form鎻愪氦,鐢变簬澶у涓氬姟閫昏緫閮芥槸涓€鏍风殑锛屾晠缁熶竴澶勭悊
    var ajaxForm_list = $('form.js-ajax-form');
    if (ajaxForm_list.length) {
        Wind.use('ajaxForm', 'noty','validate', function () {
            
            //var form = btn.parents('form.js-ajax-form');
            var $btn;

            $('button.js-ajax-submit').on('click', function (e) {
                //e.preventDefault();
                /*var btn = $(this).find('button.js-ajax-submit'),
                    form = $(this);*/
                var btn = $(this),form = btn.parents('form.js-ajax-form');
                $btn=btn;

                if(btn.data("loading")){
                    return false;
                }
                //鎵归噺鎿嶄綔 鍒ゆ柇閫夐」
                if (btn.data('subcheck')) {
                    btn.parent().find('span').remove();
                    if (form.find('input.js-check:checked').length) {
                        var msg = btn.data('msg');
                        if (msg) {
                             noty({
                                    text: msg,
                                    type:'confirm',
                                    layout:"center",
                                    timeout: false,
                                    modal: true,
                                    buttons: [
                                    {
                                        addClass: 'btn btn-primary',
                                        text: '纭畾',
                                        onClick: function($noty){
                                            $noty.close();
                                            btn.data('subcheck', false);
                                            btn.click();
                                        }
                                    },
                                    {
                                        addClass: 'btn btn-danger',
                                        text: '鍙栨秷',
                                        onClick: function($noty) {
                                            $noty.close();
                                        }
                                    }
                                    ]
                             });
                        } else {
                            btn.data('subcheck', false);
                            btn.click();
                        }

                    } else {
                        noty({text:"璇疯嚦灏戦€夋嫨涓€椤�",
                            type:'error',
                            layout:'center'
                        });
                    }
                    return false;
                }

                //ie澶勭悊placeholder鎻愪氦闂
                if ($.browser && $.browser.msie) {
                    form.find('[placeholder]').each(function () {
                        var input = $(this);
                        if (input.val() == input.attr('placeholder')) {
                            input.val('');
                        }
                    });
                }
                
            });
            
            ajaxForm_list.each(function(){
                $(this).validate({
                    //鏄惁鍦ㄨ幏鍙栫劍鐐规椂楠岃瘉
                    onfocusout : false,
                    //鏄惁鍦ㄦ暡鍑婚敭鐩樻椂楠岃瘉
                    onkeyup : false,
                    //褰撻紶鏍囨帀绾ф椂楠岃瘉
                    onclick : false,
                    //缁欐湭閫氳繃楠岃瘉鐨勫厓绱犲姞鏁堟灉,闂儊绛�
                    highlight : false,
                    //鏄惁鍦ㄨ幏鍙栫劍鐐规椂楠岃瘉
                    onfocusout : false,
                    showErrors:function(errorMap, errorArr){
                        try {
                            $(errorArr[0].element).focus();
                        } catch (err) {
                        }
                    },
                    submitHandler:function(form){
                        var $form=$(form);
                        $form.ajaxSubmit({
                            url: $btn.data('action') ? $btn.data('action') : $form.attr('action'), //鎸夐挳涓婃槸鍚﹁嚜瀹氫箟鎻愪氦鍦板潃(澶氭寜閽儏鍐�)
                            dataType: 'json',
                            beforeSubmit: function (arr, $form, options) {
                                $btn.data("loading",true);
                                var text = $btn.text();
                                //鎸夐挳鏂囨銆佺姸鎬佷慨鏀�
                                $btn.text(text + '涓�...').prop('disabled', true).addClass('disabled');
                            },
                            success: function (data, statusText, xhr, $form) {
                                var text = $btn.text();
                                //鎸夐挳鏂囨銆佺姸鎬佷慨鏀�
                                $btn.removeClass('disabled').prop('disabled', false).text(text.replace('涓�...', '')).parent().find('span').remove();
                                if (data.state === 'success') {
                                    if($btn.data('success')){
                                        var successCallback=$btn.data('success');
                                        window[successCallback](data, statusText, xhr, $form);
                                        return;
                                    }
                                    noty({text: data.info,
                                        type:'success',
                                        layout:'center',
                                        modal:true
                                    });
                                } else if (data.state === 'fail') {
                                    if($btn.data('error')){
                                        var errorCallback=$btn.data('error');
                                        window[errorCallback](data, statusText, xhr, $form);
                                        return;
                                    }
                                    var $verify_img=$form.find(".verify_img");
                                    if($verify_img.length){
                                        $verify_img.attr("src",$verify_img.attr("src")+"&refresh="+Math.random()); 
                                    }
                                    
                                    var $verify_input=$form.find("[name='verify']");
                                    $verify_input.val("");
                                    
                                    noty({text: data.info,
                                        type:'error',
                                        layout:'center'
                                    });
                                }
                                
                                
                                
                                if (data.referer) {
                                    //杩斿洖甯﹁烦杞湴鍧€
                                    var wait=$btn.data("wait");
                                    if(!wait){
                                        wait=1500;
                                    }
                                    if(window.parent.art){
                                        //iframe寮瑰嚭椤�
                                        if(wait){
                                            setTimeout(function(){
                                                window.parent.location.href = data.referer;
                                            },wait);
                                        }else{
                                            window.parent.location.href = data.referer;
                                        }
                                        
                                    }else{
                                        if(wait){
                                            setTimeout(function(){
                                                window.location.href = data.referer;
                                            },wait);
                                        }else{
                                            window.location.href = data.referer;
                                        }
                                    }
                                } else {
                                    if (data.state === 'success') {
                                        var wait=$btn.data("wait");
                                        if(window.parent.art){
                                            if(wait){
                                                setTimeout(function(){
                                                    reloadPage(window.parent);
                                                },wait);
                                            }else{
                                                reloadPage(window.parent);
                                            }
                                        }else{
                                            //鍒锋柊褰撳墠椤�
                                            if(wait){
                                                setTimeout(function(){
                                                    reloadPage(window);
                                                },wait);
                                            }else{
                                                reloadPage(window);
                                            }
                                        }
                                    }
                                }
                                
                            },
                            error:function(xhr,e,statusText){
                                alert(statusText);
                                if(window.parent.art){
                                    reloadPage(window.parent);
                                }else{
                                    //鍒锋柊褰撳墠椤�
                                    reloadPage(window);
                                }
                            },
                            complete: function(){
                                $btn.data("loading",false);
                            }
                        });
                    }
                });
            });

        });
    }

    //dialog寮圭獥鍐呯殑鍏抽棴鏂规硶
    $('#js-dialog-close').on('click', function (e) {
        e.preventDefault();
        try{
            art.dialog.close();
        }catch(err){
            Wind.use('artDialog','iframeTools',function(){
                art.dialog.close();
            });
        };
    });

    //鎵€鏈夌殑鍒犻櫎鎿嶄綔锛屽垹闄ゆ暟鎹悗鍒锋柊椤甸潰
    if ($('a.js-ajax-delete').length) {
        Wind.use('noty', function () {
            $('.js-ajax-delete').on('click', function (e) {
                e.preventDefault();
                var $_this = this,
                    $this = $($_this),
                    href = $this.data('href'),
                    msg = $this.data('msg');
                href = href?href:$this.attr('href');
                noty({
                    text: msg?msg: '纭畾瑕佸垹闄ゅ悧锛�',
                    type:'confirm',
                    layout:"center",
                    timeout: false,
                    modal: true,
                    buttons: [
                    {
                        addClass: 'btn btn-primary',
                        text: '纭畾',
                        onClick: function($noty){
                            $noty.close();
                            $.getJSON(href).done(function (data) {
                                if (data.state === 'success') {
                                    if (data.referer) {
                                        location.href = data.referer;
                                    } else {
                                        reloadPage(window);
                                    }
                                } else if (data.state === 'fail') {
                                    noty({text: data.info,
                                        type:'error',
                                        layout:'center',
                                        callback:{
                                            onClose:function(){
                                                if (data.referer) {
                                                    location.href = data.referer;
                                                }
                                            }
                                        }
                                    });
                                }
                            });
                        }
                    },
                    {
                        addClass: 'btn btn-danger',
                        text: '鍙栨秷',
                        onClick: function($noty) {
                            $noty.close();
                        }
                    }
                    ]
                });
                
            });

        });
    }
    
    
    if ($('a.js-ajax-dialog-btn').length) {
        Wind.use('noty', function () {
            $('.js-ajax-dialog-btn').on('click', function (e) {
                e.preventDefault();
                var $_this = this,
                    $this = $($_this),
                    href = $this.data('href'),
                    msg = $this.data('msg');
                href = href?href:$this.attr('href');
                noty({
                    text: msg,
                    type:'confirm',
                    layout:"center",
                    timeout: false,
                    modal: true,
                    buttons: [
                    {
                        addClass: 'btn btn-primary',
                        text: '纭畾',
                        onClick: function($noty){
                            $noty.close();
                            $.getJSON(href).done(function (data) {
                                if (data.state === 'success') {
                                    if (data.referer) {
                                        location.href = data.referer;
                                    } else {
                                        reloadPage(window);
                                    }
                                } else if (data.state === 'fail') {
                                    noty({text: data.info,
                                        type:'error',
                                        layout:'center',
                                        callback:{
                                            onClose:function(){
                                                if (data.referer) {
                                                    location.href = data.referer;
                                                }
                                            }
                                        }
                                    });
                                }
                            });
                        }
                    },
                    {
                        addClass: 'btn btn-danger',
                        text: '鍙栨秷',
                        onClick: function($noty) {
                            $noty.close();
                        }
                    }
                    ]
                });
                
            });

        });
    }
    
    if ($('a.js-ajax-btn').length) {
        Wind.use('noty', function () {
            $('.js-ajax-btn').on('click', function (e) {
                e.preventDefault();
                var $_this = this,
                    $this = $($_this),
                    href = $this.data('href'),
                    msg = $this.data('msg');
                    refresh = $this.data('refresh');
                href = href?href:$this.attr('href');
                refresh = refresh==undefined?1:refresh;
                
                
                $.getJSON(href).done(function (data) {
                    if (data.state === 'success') {
                        noty({
                            text:data.info,
                            type:'success',
                            layout:'center',
                            callback:{
                                onClose:function(){
                                    if (data.referer) {
                                        location.href = data.referer;
                                        return;
                                    }
                                    
                                    if(refresh || refresh==undefined){
                                        reloadPage(window);
                                    }
                                }
                            }
                        });
                    } else if (data.state === 'fail') {
                        noty({text: data.info,
                            type:'error',
                            layout:'center',
                            callback:{
                                onClose:function(){
                                    if (data.referer) {
                                        location.href = data.referer;
                                    }
                                }
                            }
                        });
                    }
                });
                
            });

        });
    }

    //鎵€鏈夌殑璇锋眰鍒锋柊鎿嶄綔
    var ajax_refresh = $('a.js-ajax-refresh'),
        refresh_lock = false;
    if (ajax_refresh.length) {
        ajax_refresh.on('click', function (e) {
            e.preventDefault();
            if (refresh_lock) {
                return false;
            }
            refresh_lock = true;

            $.post(this.href, function (data) {
                refresh_lock = false;

                if (data.state === 'success') {
                    if (data.referer) {
                        location.href = data.referer;
                    } else {
                        reloadPage(window);
                    }
                } else if (data.state === 'fail') {
                    Wind.art.dialog.alert(data.info);
                }
            }, 'json');
        });
    }
    
    //鐭俊楠岃瘉鐮�
    var $js_get_mobile_code=$('.js-get-mobile-code');
    if($js_get_mobile_code.length>0){
        Wind.use('noty',function(){

            $js_get_mobile_code.on('click',function(){
                var $this=$(this);
                if($this.data('loading')) return;
                if($this.data('sending')) return;
                var $mobile_input=$($this.data('mobile-input'));
                var mobile = $mobile_input.val();
                if(mobile==''){
                    $mobile_input.focus();
                    return;
                }
                
                $this.data('loading',true);
                $this.data('sending',true);
                
                var url=$this.data('url');
                
                var init_secode_left=parseInt($this.data('init-second-left'));
                init_secode_left=init_secode_left>0?init_secode_left:60;
                var init_text=$this.text();
                $this.data('second-left',init_secode_left);
                var wait_msg=$this.data('wait-msg');
                $.ajax({
                    url:url,
                    type:'POST',
                    dataType:'json',
                    data:{mobile:mobile},
                    success:function(data){
                        if(data.status==1){
                            noty({text: data.info,
                                type:'success',
                                layout:'center'
                            });
                            
                            $this.text(wait_msg.replace('[second]',init_secode_left));
                            
                            var mtimer=setInterval(function(){
                                if(init_secode_left>0){
                                    init_secode_left--;
                                    $this.text(wait_msg.replace('[second]',init_secode_left));
                                }else{
                                    clearInterval(mtimer);
                                    $this.text(init_text);
                                    $this.data('sending',false);
                                }
                                
                            },1000);
                        }else{
                            noty({text: data.info,
                                type:'error',
                                layout:'center'
                            });
                            $this.data('sending',false);
                        }
                    },
                    error:function(){
                        $this.data('sending',false);
                    },
                    complete:function(){
                        $this.data('loading',false);
                    }
                });
            });
        
        });
    }

    //鏃ユ湡閫夋嫨鍣�
    var dateInput = $("input.js-date")
    if (dateInput.length) {
        Wind.use('datePicker', function () {
            dateInput.datePicker();
        });
    }

    //鏃ユ湡+鏃堕棿閫夋嫨鍣�
    var dateTimeInput = $("input.js-datetime");
    if (dateTimeInput.length) {
        Wind.use('datePicker', function () {
            dateTimeInput.datePicker({
                time: true
            });
        });
    }

    //璧烇紝鎷嶇瓑锛屾湁鏁伴噺鎿嶄綔鐨勬寜閽�
    var $js_count_btn=$('a.js-count-btn');
    if ($js_count_btn.length) {
        Wind.use('noty', function () {
            $js_count_btn.on('click', function (e) {
                e.preventDefault();
                var $this = $(this),
                    href = $this.prop('href');
                
                $.post(href,{},function(data){
                    
                    if (data.state === 'success') {
                        
                        var $count=$this.find(".count");
                        var count=parseInt($count.text());
                        $count.text(count+1);
                        if(data.info){
                            noty({text: data.info,
                                type:'success',
                                layout:'center'
                            });
                        }
                        
                        
                    } else if (data.state === 'fail') {
                        noty({text: data.info,
                            type:'error',
                            layout:'center'
                        });
                    }
                    
                    
                },"json");
                
            });

        });
    }
    
    //鍦板潃鑱斿姩
    var $js_address_select=$('.js-address-select');
    if($js_address_select.length>0){
        $('.js-address-province-select,.js-address-city-select').change(function(){
            var $this=$(this);
            var id=$this.val();
            var $child_area_select;
            var $this_js_address_select=$this.parents('.js-address-select');
            if($this.is('.js-address-province-select')){
                $child_area_select=$this_js_address_select.find('.js-address-city-select');
                $this_js_address_select.find('.js-address-district-select').hide();
            }else{
                $child_area_select=$this_js_address_select.find('.js-address-district-select');
            }
            
            var empty_option='<option class="js-address-empty-option" value="">'+$child_area_select.find('.js-address-empty-option').text()+'</option>';
            $child_area_select.html(empty_option);
            
            var child_area_html=$this.data('childarea'+id);
            if(child_area_html){
                $child_area_select.show();
                $child_area_select.html(child_area_html);
                return;
            }
            
            $.ajax({
                url:$this_js_address_select.data('url'),
                type:'POST',
                dataType:'JSON',
                data:{id:id},
                success:function(data){
                    if(data.status==1){
                        if(data.areas.length>0){
                            var html=[empty_option];
                            
                            $.each(data.areas,function(i,area){
                                var area_html='<option value="[id]">[name]</option>';
                                area_html=area_html.replace('[name]',area.name);
                                area_html=area_html.replace('[id]',area.id);
                                html.push(area_html);
                            });
                            html=html.join('',html);
                            $this.data('childarea'+id,html);
                            $child_area_select.html(html);
                            $child_area_select.show();
                        }else{
                            $child_area_select.hide();
                            
                        }
                    }
                },
                error:function(){
                    
                },
                complete:function(){
                    
                }
            });
        });
        
    }
    //鍦板潃鑱斿姩end
    
    //
    var $js_action_btn=$('a.js-action-btn');
    if ($js_action_btn.length) {
        Wind.use('noty', function () {
            $js_action_btn.on('click', function (e) {
                e.preventDefault();
                var $this = $(this),
                    href = $this.prop('href');
                
                $.post(href,{},function(data){
                    
                    if (data.state === 'success') {
                        
                        if(data.info){
                            noty({text: data.info,
                                type:'success',
                                layout:'center'
                            });
                        }
                        
                        
                    } else if (data.state === 'fail') {
                        noty({text: data.info,
                            type:'error',
                            layout:'center'
                        });
                    }
                },"json");
                
            });

        });
    }
    
    var $js_favorite_btn=$('a.js-favorite-btn');
    if ($js_favorite_btn.length) {
        Wind.use('noty', function () {
            $js_favorite_btn.on('click', function (e) {
                e.preventDefault();
                var $this = $(this),
                    href = $this.prop('href'),
                    url = $this.data("url"),
                    key = $this.data("key"),
                    title = $this.data("title"),
                    description = $this.data("description");
                
                
                $.post(href,{url:url,key:key,title:title,description:description},function(data){
                    
                    if (data.state === 'success') {
                        
                        if(data.info){
                            noty({text: data.info,
                                type:'success',
                                layout:'center'
                            });
                        }
                        
                        
                    } else if (data.state === 'fail') {
                        noty({text: data.info,
                            type:'error',
                            layout:'center'
                        });
                    }
                    
                    
                },"json");
                
            });

        });
    }
    
    var $comment_form=$(".comment-area .comment-form");
    if($comment_form.length){
        Wind.use("ajaxForm",function(){
            
            $(".js-ajax-submit",$comment_form).on("click",function(e){
                var btn=$(this),
                    form=btn.parents(".comment-form");
                e.preventDefault();
                
                var url= btn.data('action') ? btn.data('action') : form.attr('action');
                var data=form.serialize()+"&url="+encodeURIComponent(location.href);
                $.ajax({
                    url:url,
                    dataType: 'json',
                    type: "POST",
                    beforeSend:function(){
                         var text = btn.text();

                         //鎸夐挳鏂囨銆佺姸鎬佷慨鏀�
                         btn.text(text + '涓�...').prop('disabled', true).addClass('disabled');
                    },
                    data:data,
                    success: function (data, textStatus, jqXHR) {
                        var text = btn.text();

                        //鎸夐挳鏂囨銆佺姸鎬佷慨鏀�
                        btn.removeClass('disabled').text(text.replace('涓�...', '')).parent().find('span').remove();
                        btn.removeProp('disabled').removeClass('disabled');
                        if (data.state === 'success') {
                            $('<span class="tips_success">' + data.info + '</span>').appendTo(btn.parent()).fadeIn('slow').delay(1000).fadeOut(function () {
                            });
                        } else if (data.state === 'fail') {
                            $('<span class="tips_error">' + data.info + '</span>').appendTo(btn.parent()).fadeIn('fast');
                            btn.removeProp('disabled').removeClass('disabled');
                        }
                        
                        if (data.state === 'success') {
                            var $comments=form.siblings(".comments");
                            var comment_tpl=btn.parents(".comment-area").find(".comment-tpl").html();
                            var $comment_tpl=$(comment_tpl);
                            $comment_tpl.attr("data-id",data.data.id);
                            var $comment_postbox=form.find(".comment-postbox");
                            var comment_content=$comment_postbox.val();
                            $comment_tpl.find(".comment-content .content").html(comment_content);
                            $comments.append($comment_tpl);
                            $comment_postbox.val("");
                        }
                        
                    }
                    
                    
                });
                
                return false;
                
            });
        });
        
    }


})();

function comment_reply(obj){
    
    $(".comments .comment-reply-submit").hide();
    var $this=$(obj);
    var $comment_body=$this.parents(".comments > .comment> .comment-body");
    
    var commentid=$this.parents(".comment").data("id");
    
    var $comment_reply_submit=$comment_body.find(".comment-reply-submit");
    
    if($comment_reply_submit.length){
        $comment_reply_submit.show();
    }else{
        var comment_reply_box_tpl=$comment_body.parents(".comment-area").find(".comment-reply-box-tpl").html();
        $comment_reply_submit=$(comment_reply_box_tpl);
        $comment_body.append($comment_reply_submit);
    }
    $comment_reply_submit.find(".textbox").focus();
    $comment_reply_submit.data("replyid",commentid);
}

function comment_submit(obj){
    
    Wind.use('noty', function () {
        
        var $this=$(obj);
        
        var $comment_reply_submit=$this.parents(".comment-reply-submit");
        
        var $reply_textbox=$comment_reply_submit.find(".textbox");
        var reply_content=$reply_textbox.val();
        
        if(reply_content==''){
            $reply_textbox.focus();
            return;
        }
        
        var $comment_body=$this.parents(".comments > .comment> .comment-body");
        
        var comment_tpl=$comment_body.parents(".comment-area").find(".comment-tpl").html();
        
        var $comment_tpl=$(comment_tpl);
        
        var replyid=$comment_reply_submit.data('replyid');
        
        var $comment=$(".comments [data-id='"+replyid+"']");
        
        var username=$comment.data("username");
        
        var comment_content="鍥炲 "+username+":"+reply_content;
        $comment_tpl.find(".comment-content .content").html(comment_content);
        $comment_reply_submit.before($comment_tpl);
        
        var $comment_form=$this.parents(".comment-area").find(".comment-form");
        
        var comment_url=$comment_form.attr("action");
        
        var post_table=$comment_form.find("[name='post_table']").val();
        var post_title=$comment_form.find("[name='post_title']").val();
        var post_id=$comment_form.find("[name='post_id']").val();
        
        var uid=$comment.data("uid");
        
        $.post(comment_url,
        {
            post_title:post_title,
            post_table:post_table,
            post_id:post_id,
            to_uid:uid,
            parentid:replyid,
            content:reply_content,
            url:encodeURIComponent(location.href)
        },function(data){
            if(data.status==0){
                noty({text: data.info,
                    type:'error',
                    layout:'center'
                });
                $comment_tpl.remove();
            }
            
            if(data.status==1){
                $comment_tpl.attr("data-id",data.data.id);
                $reply_textbox.val('');
            }
            
        },'json');
        
        $comment_reply_submit.hide();
    });
    
}

//閲嶆柊鍒锋柊椤甸潰锛屼娇鐢╨ocation.reload()鏈夊彲鑳藉鑷撮噸鏂版彁浜�
function reloadPage(win) {
    if(win){
        
    }else{
        win=window;
    }
    var location = win.location;
    location.href = location.pathname + location.search;
}

//椤甸潰璺宠浆
function redirect(url) {
    location.href = url;
}

//璇诲彇cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    };

    return null;
}

//璁剧疆cookie
function setCookie(name, value, days) {
    var argc = setCookie.arguments.length;
    var argv = setCookie.arguments;
    var secure = (argc > 5) ? argv[5] : false;
    var expire = new Date();
    if(days==null || days==0) days=1;
    expire.setTime(expire.getTime() + 3600000*24*days);
    document.cookie = name + "=" + escape(value) + ("; path=/") + ((secure == true) ? "; secure" : "") + ";expires="+expire.toGMTString();
}

//娴嚭鎻愮ず_灞呬腑
function resultTip(options) {

    var cls = (options.error ? 'warning' : 'success');
    var pop = $('<div style="left:50%;top:30%;" class="pop_showmsg_wrap"><span class="pop_showmsg"><span class="' + cls + '">' + options.msg + '</span></span></div>');

    pop.appendTo($('body')).fadeIn(function () {
        pop.css({
            marginLeft: -pop.innerWidth() / 2
        }); //姘村钩灞呬腑
    }).delay(1500).fadeOut(function () {
        pop.remove();

        //鍥炶皟
        if (options.callback) {
            options.callback();
        }
    });

}

//寮圭獥灞呬腑瀹氫綅 闈瀒e6 fixed瀹氫綅
function popPos(wrap) {
    var ie6 = false,
        pos = 'fixed',
        top,
        win_height = $(window).height(),
        wrap_height = wrap.outerHeight();

    if ($.browser && $.browser.msie && $.browser.version < 7) {
        ie6 = true;
        pos = 'absolute';
    }

    if (win_height < wrap_height) {
        top = 0;
    } else {
        top = ($(window).height() - wrap.outerHeight()) / 2;
    }

    wrap.css({
        position: pos,
        top: top + (ie6 ? $(document).scrollTop() : 0),
        left: ($(window).width() - wrap.innerWidth()) / 2
    }).show();
}

//鏂扮獥鍙ｆ墦寮€
function openwinx(url,name,w,h) {
    if(!w) w=screen.width;
    if(!h) h=screen.height;
    //window.open(url,name,"top=100,left=400,width=" + w + ",height=" + h + ",toolbar=no,menubar=no,scrollbars=yes,resizable=yes,location=no,status=no");
    window.open(url,name);
}
//璇㈤棶
function confirmurl(url, message) {
    Wind.use("artDialog", "iframeTools", function () {
        art.dialog.confirm(message, function () {
            location.href = url;
        }, function () {
            art.dialog.tips('浣犲彇娑堜簡鎿嶄綔');
        });
    });
}

function open_iframe_dialog(url, title, options) {
    var params = {
        title : title,
        lock : true,
        opacity : 0,
        width : "95%"
    };
    params = options ? $.extend(params, options) : params;
    Wind.use('artDialog', 'iframeTools', function() {
        art.dialog.open(url, params);
    });
}

function open_iframe_layer(url,title,options){

    var params = {
        type: 2,
        title: title,
        shadeClose: true,
        skin: 'layui-layer-nobg',
        shade: [0.5, '#000000'],
        area: ['90%', '90%'],
        content:url
    };
    params = options ? $.extend(params, options) : params;

    Wind.css('layer');

    Wind.use("layer", function() {
        layer.open(params);
    });

}