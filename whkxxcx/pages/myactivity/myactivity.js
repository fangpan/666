
var app = getApp()
var pathURL = app.globalData.PATH;

Page({
  data: {
    note: [],
    noteed:false,
  },
  onReady: function (e) {
    //设置分享
    wx.showShareMenu({
        withShareTicket: true
    })
  },
  onLoad: function (options) {
    var that = this
    var openId = wx.getStorageSync('openId');
 
    if(openId == undefined || openId == "" || openId == null ){
       wx.showModal({
          title: '提示',
          content: '登录信息错误！',
          success (res) {
            if (res.confirm) {
              wx.navigateBack({
                delta: 1
              })
            } else if (res.cancel) {
              wx.navigateBack({
                delta: 1
              })
            }
          }
        })
   }else{
     wx.request({
        url:""+pathURL+"/wx/usercurriculum/list",
        method:"GET",
        data:{
          openid:openId
        },
        header: {
         'content-type': 'application/json'
        },
        success:function(res){
         console.log(res)
         if(res.data.code!=0){
             that.setData({
              noteed:false
            }) 
           }else if(res.data.page.list.length==0){
              that.setData({
                noteed:false
              }) 
           }
           else{
              var note_list = that.data.note;
              for (var i = 0; i < res.data.page.list.length; i++) {
                if(res.data.page.list[i].state == 0){
                  res.data.page.list[i].state = "审核中"
                }
                if(res.data.page.list[i].state == 1){
                  res.data.page.list[i].state = "报名成功"
                }
                if(res.data.page.list[i].state == 2){
                  res.data.page.list[i].state = "报名失败"
                }
                note_list.push(res.data.page.list[i]);
              }
              that.setData({
                note: note_list,
                noteed:true
              })          
           }
        }, //  success
        fail:function(){
            wx.showModal({
              title: '提示',
              content: '加载失败！'
            })
        }

      })  // request
   }
 },

toActDetail:function(e){
  var id = e.currentTarget.dataset.id;
  var title = e.currentTarget.dataset.title;
  wx.navigateTo({
       url: '../preview/preview?id='+id+'&title='+title+''
  });
},

})




