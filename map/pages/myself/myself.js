
const app = getApp()

Page({
  data: {},
  onLoad: function (options) {
     //获取用户信息
      var  nickName = getApp().globalData.userInfo.nickName
      var  avatarUrl = getApp().globalData.userInfo.avatarUrl
      this.setData({
             userName: nickName,       
             avatarUrl: avatarUrl
      })
  },

  //跳转到展教联盟
 resources: function () {
    wx.redirectTo({
      url:'/pages/resources/resources'
    })
  },

 //跳转到资源信息列表
 newinfor: function () {
    wx.redirectTo({
      url:'/pages/newinfor/newinfor'
    })
  }

})
