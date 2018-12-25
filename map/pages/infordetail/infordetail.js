Page({
  data: {
    imgUrls: [],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    NEWmodule :""
  },
   onReady: function (e) {
      var  pathURL = getApp().globalData.PATH
      this.setData({
          pathURL: pathURL
    })
  },
  onLoad: function (options) {
    var that=this
    var id = options.id;
    var pathURL = getApp().globalData.PATH
   wx.request({
        url:""+pathURL+"/wx/activity/info/"+id+"",
        method:"GET",
        header: {
         'content-type': 'application/json'
        },
        success:function(res){
            var list = res.data.activityNotice;  
            var pics = list.pictures
          
            if(pics!=null){
              pics = pics.split(",")
              for(var i = 0; i < pics.length; i++) {
                  if(pics[i] == undefined || pics[i] == "") {
                     pics.splice(i,1);
                     i = i - 1; 
                   }
                }
            }
            if(list.module=="1"){
              that.data.NEWmodule ="展教联盟"
            }
             if(list.module=="2"){
              that.data.NEWmodule ="特色场馆"
            }
             if(list.module=="3"){
              that.data.NEWmodule ="社区科普大学"
            }
            that.setData({
                title : list.title,
                content : list.content,
                module : that.data.NEWmodule,
                imgUrls : pics,
                time : list.time
            });
            console.log(list)
         }
      });
　　　　
　},
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  }
  
})