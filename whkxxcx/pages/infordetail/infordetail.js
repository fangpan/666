
var pathURL = getApp().globalData.PATH

Page({
  data: {
    imgUrls: [],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
  },
  onReady: function (e) {
    //设置分享
    wx.showShareMenu({
        withShareTicket: true
    })
  },
  onLoad: function (options) {
    var that=this
    var id = options.id;
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
            that.setData({
                title : list.title,
                content : list.content,
                imgUrls : pics,
                time : list.time
            });
           
         }
      });
　　　　
　},
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  }
  
})