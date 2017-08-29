var json = 
   {
  
  "data":[
    {   "id":"1",
        "day":12,
        "month":"Jul",
        "year":"2017",
        "img":"images/news/news_list/news_photo17.png",
        "title":"英迈信息与北京大有中城签署战略合作协议",
        "msg":"武汉英迈信息科技有限公司与北京大有中城科技有限公司正式签署战略合作协议，标志着双方建立起长期合作、互惠互利、共同发展的战略合作伙伴关系。",
        "from":"英迈信息"
      },
      {
        "id":"2",
        "day":24,
        "month":"Apr",
        "year":"2017",
        "img":"images/news/news_list/news_photo16.png",
        "title":"武汉理工大学项目中标新闻",
        "msg":"2017年4月7日,我公司参与武汉理工大学组织的综合运输规划与运营组织智能优化决策平台的开标评标会议,赢得了招标单位的肯定，顺利中标。",
        "from":"英迈信息"
      },
      {
        "id":"3",
        "day":22,
        "month":"Jan",
        "year":"2017",
        "img":"images/news/news_list/news_photo15.png",
        "title":"喜讯！我公司顺利通过“CMMI3级”认证",
        "msg":"新年伊始，金鸡报喜。2017年1月20日，经过官网公示，武汉英迈信息科技有限公司顺利通过CMMI3 v1.3级正式评估。",
        "from":"英迈信息"
      },
      {
        "id":"4",
        "day":5,
        "month":"Dec",
        "year":"2016",
        "img":"images/news/news_list/news_photo14.png",
        "title":"喜讯！我公司顺利通过“国家高新技术企业”认定",
        "msg":"2016年11月30日，武汉英迈信息科技有限公司成功获批成为湖北省2016年第一批国家高新技术企业",
        "from":"英迈信息"
      },
      {
        "id":"5",
        "day":15,
        "month":"Nov",
        "year":"2016",
        "img":"images/news/news_list/news_photo12.png",
        "title":"华电集团项目中标新闻",
        "msg":"2016年10月，武汉英迈信息科技有限公司成功中标中国华电集团北京华电电子商务科技有限公司协同办公系统APP软件项目。",
        "from":"英迈信息"
      },
      {
        "id":"6",
        "day":13,
        "month":"Nov",
        "year":"2016",
        "img":"images/news/news_list/news_photo11.png",
        "title":"北京市政府公众参与项目中标新闻",
        "msg":"丰收十月，喜报频传。恭贺英迈信息顺利中标北京市大兴区人民政府办公室大兴区网格公众参与系统项目。",
        "from":"英迈信息"
      },
      {
        "id":"7",
        "day":11,
        "month":"Nov",
        "year":"2016",
        "img":"images/news/news_list/news_photo10.png",
        "title":"北京市政府非紧急项目中标新闻",
        "msg":"2016年9月在北京市大兴区政府组织的三级非紧急案件办理系统项目投标中，英迈信息凭借公众参与的优异表现，力压国内各大IT厂商，脱颖而出成功中标。",
        "from":"英迈信息"
      },
      {
        "id":"8",
        "day":13,
        "month":"0ct",
        "year":"2016",
        "img":"images/news/news_list/news_photo5.png",
        "title":"中国电信微翼商城项目中标新闻",
        "msg":"2015年10月13，我司成功中标中国电信“中国电信股份有限公司湖北分公司2015年网上 客户服务中心系统改造工程微翼商城平台比选项目”。",
        "from":"英迈信息"
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
                  + '<h5><a href="company_detail_'+n.id+'.html">'+n.title+'</a></h5>'
                  + '<div class="news_sm">'+n.msg+'</div>'
                  + '<p class="bot_source">来源：<span>'+n.from+'</span></p>'
                  + '</div>'
                  + '</div>'
                 
    $("#Searchresult1").append(news);  
  });
  
  var num_entries = $("#Searchresult1 .news_con").length; 

  var showCount = 5;
  
  var initPagination = function() {
    
    $("#Pagination1").pagination(num_entries, {
      num_edge_entries: '', 
      num_display_entries:5, 
      callback: pageselectCallback,
      items_per_page:showCount 
    });
   }(); 

  function pageselectCallback(page_index, jq){
    var max_elem = Math.min((page_index+1) *showCount, num_entries);    
    $(".news_list_company").html("");   
    for(var i=page_index*showCount;i<max_elem;i++){
      var new_content = $("#Searchresult1 .news_con:eq("+i+")").clone();
      $(".news_list_company").append(new_content); 
    }
    return false;
  }





    