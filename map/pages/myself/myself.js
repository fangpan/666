
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
  }

})
