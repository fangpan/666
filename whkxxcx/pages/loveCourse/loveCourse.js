
var app = getApp()
var pathURL = app.globalData.PATH;

Page({
  data: {
    imgWidth:0,
    imgHeight:0,
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
        url:""+pathURL+"/wx/pay/getCurriculumState",
        method:"GET",
        data:{
          openid:openId
        },
        header: {
         'content-type': 'application/json'
        },
        success:function(res){
         //console.log(res.data.code)
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

 toDetail:function(e){
    var id = e.currentTarget.dataset.id
     wx.navigateTo({
        url:'/pages/courseDetail/courseDetail?id='+id+'' 
     })
 }


})







