var json = 
   {
  
  "data":[
    {
        "id":"1",
        "day":13,
        "month":"Oct",
        "year":"2016",
        "img":"images/news/news_list/news_photo1.png",
        "title":"电力行业:电改循序提速渐进,看好水电输配售一体化",
        "msg":"电力行业:电改循序提速渐进,看好水电输配售一体化。电改的实质性目的:破除垄断,实现利益再分配。",
        "from":"研报国金证券"
      },
      {
        "id":"2",
        "day":12,
        "month":"Oct",
        "year":"2016",
        "img":"images/news/news_list/news_photo2.png",
        "title":"通信行业研究报告：电信行业加速进入流量经营时代",
        "msg":"电信行业加速进入流量经营时代,关注要点：本周上证综指下跌0.96%,创业板下跌0.76%,通信 板块整体下跌0.31%。",
        "from":"中投顾问"
      },
      {
        "id":"3",
        "day":11,
        "month":"Oct",
        "year":"2016",
        "img":"images/news/news_list/news_photo3.png",
        "title":"中国电信LTE五期集采：30万基站加速800M全网重耕",
        "msg":"10/13/2016,据知情人士透露，中国电信已于本周启动LTE五期工程无线网主设备（FDD）集 采工作。",
        "from":"光纤在线"
      },
      {
        "id":"4",
        "day":11,
        "month":"Oct",
        "year":"2016",
        "img":"images/news/news_list/news_photo4.png",
        "title":"中国创新创业大赛互联网及移动互联网行业总决赛热点前瞻",
        "msg":"10月13日，第五届中国创新创业大赛互联网及移动互联网行业总决赛将在浙江桐乡拉开大幕 。本次大赛 ，共有261家企业和57支团队进入最终决赛 ，哪些全国互联网行业双创优秀人才 和项目将脱颖?哪些行业巨头将亮相“国赛”赛场?“互联网+”和双创能擦出哪些火花?下面 就来通过最新赛事前瞻一探究竟。",
        "from":"齐鲁晚报 ( 济南 )"
      },
      {
        "id":"5",
        "day":11,
        "month":"Oct",
        "year":"2016",
        "img":"images/news/news_list/news_photo6.png",
        "title":"iOS 10升级率达67％ 风光超越以往各版本",
        "msg":"据台湾《中时电子报》10月11日报道，iOS 10改写纪录成为史上最受欢迎iOS操作系统。根 据Fiksu的统计分析资料，目前iOS 10覆盖超过2/3的已启用iOS设备 ，用户升级iOS 10的速 度比以往任何一个版本都要快，甚至赢过接口有大幅改款的iOS 7。",
        "from":"新华网"
      },
      {
        "id":"6",
        "day":11,
        "month":"Oct",
        "year":"2016",
        "img":"images/news/news_list/news_photo7.png",
        "title":"机甲MESUIT或成iOS和Android走向融合的润滑剂",
        "msg":"智能手机发展至今，经过层层的角逐与优胜劣汰，曾经风光无限的“塞班”操作系统早就被诺基亚彻底放弃，MeeGo 、BlackBerry OS等操作系统也都了无踪迹，就连微软着力培养的Windows Mobile操作系统也只能苟延残喘的活着，市场份额一度不足1%，现在市场上基本只剩下iOS和Android两大操作系统",
        "from":"中关村在线"
      },
      {
        "id":"7",
        "day":10,
        "month":"Oct",
        "year":"2016",
        "img":"images/news/news_list/news_photo8.png",
        "title":"马云：“电子商务”将消失 新五通一平将引领未来",
        "msg":"2016年10月13日上午，阿里巴巴集团董事局主席马云出席杭州云栖大会时提出，未来30年是人类社会天翻地覆的30年 ，世界的变化将远远超出想象 ，“电子商务”这个词很快会被淘汰，有五个新的发展将会深刻地影响到世界。",
        "from":"新华网"
      },
      {
        "id":"8",
        "day":9,
        "month":"Oct",
        "year":"2016",
        "img":"images/news/news_list/news_photo9.png",
        "title":"网络安全博览会9月19日—25日将在武汉国际博览中心举行",
        "msg":"中国青年网武汉9月18日电（记者 杨青山）18日下午记者从网络安全博览会新闻发布会获悉，作为今年国家网络安全宣传周重点活动之一，网络安全博览会将于 9月19日—25日在武汉国际博览中心A6-1馆举行。届时，将有95家网络安全领域企业参展，参展企业数量及展区规模均为历届之最。",
        "from":"中国青年网（北京）"
      }
    ]
}


  $.each(json.data,function(i,n){

    var news =  '<div class="news_con" >'
                  + '<div class="news_L_img">'
                  + '<p class="news_date">'
                  + '<span style="font-size:15px;font-weight:bold;">'+n.day+'</span> <span>'+n.month+'</span></br>'
                  + '<span>'+n.year+'</span>'
                  + '</p>'
                  + '<img src="'+n.img+'" alt="" class="img-responsive">'
                  + '</div>'
                  + '<div class="news_R_con">'
                  + '<h5><a href="others_detail_'+n.id+'.html">'+n.title+'</a></h5>'
                  + '<div class="news_sm">'+n.msg+'</div>'
                  + '<p class="bot_source">来源：<span>'+n.from+'</span></p>'
                  + '</div>'
                  + '</div>'
                 
    $("#Searchresult2").append(news);  
  });
  
  var num_entries = $("#Searchresult2 .news_con").length; 

  var showCount = 5;
  
  var initPagination = function() {
    
    $("#Pagination2").pagination(num_entries, {
      num_edge_entries: '', 
      num_display_entries: 5, 
      callback: pageselectCallback,
      items_per_page:showCount 
    });
   }();  
  function pageselectCallback(page_index, jq){
    var max_elem = Math.min((page_index+1) *showCount, num_entries);    
    $(".news_list_others").html("");   
    for(var i=page_index*showCount;i<max_elem;i++){
      var new_content = $("#Searchresult2 .news_con:eq("+i+")").clone();
      $(".news_list_others").append(new_content); 
    }
    return false;
  }


