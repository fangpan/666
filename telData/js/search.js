
 var json=

      { 
        "name": [

            { "Id":'1a',"firstName": "Brett"},

            { "Id":'2b',"firstName": "Jason"},

          ]
    }

for(var i=0;i<json.name.length;i++){

  var item = json.name[i]

   var opt= '<option id='+item.Id+'>'+item.firstName+'</option>';

   $("#pattName").append(opt);
}


 $("#pattName").change(function(){

  var keyname = $(this).children("option:checked").attr("id");

    alert(keyname)

    //通过keyname再查相关数据

  })
  

   $("#pattInput").keyup(function(){
      var keywords = $(this).val();
      if (keywords=='') { $('#chosePat').hide(); return };
      $.ajax({
        url: 'http://suggestion.baidu.com/su?wd=' + keywords,
        dataType: 'jsonp',
        jsonp: 'cb', //回调函数的参数名(键值)key
        success:function(data){
          $('#chosePat').empty().show();
          if (data.s=='')
            {
              $('#chosePat').append('<div class="error">没找到  "' + keywords + '"</div>');
            }
          $.each(data.s, function(){
            $('#chosePat').append('<div class="clickwork">'+ this +'</div>');
          })
        }
      })

   })

    //点击搜索数据复制给搜索框
    $(document).on('click','.clickwork',function(){
      var word = $(this).text();
      $('#pattInput').val(word);
      $('#chosePat').hide();
    })

