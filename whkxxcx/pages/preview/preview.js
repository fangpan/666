
var app = getApp()
var pathURL = app.globalData.PATH;

Page({
  data: {
     state:"",
  },
  onReady: function (e) {
    //设置分享
    wx.showShareMenu({
        withShareTicket: true
    })
  },
  onLoad: function (options) {
    var id = options.id;
    var title = options.title;
    var that = this;
    //获取报名信息
     wx.request({
          url:""+pathURL+"/wx/usercurriculum/info",
          method:"GET",
          data:{
            id:id
          },
          header: {
           'content-type': 'application/json'
          },
          success:function(res){
            var list = res.data.scienceVenues;  

                if(list.state == 0){
                    that.setData({
	                  state: "审核中"
	                });
                }
                if(list.state == 1){
                    that.setData({
	                  state: "报名成功"
	                });
                }
                if(list.state == 2){
                    that.setData({
                    state: "报名失败"
                  });
                }
                that.setData({
                  cname:title,
                  name:list.name,
                  phone:list.phone,
                  card:list.card,
                  place:list.place,
                  date:list.date
              });
           }
        });
  }


});





