//app.js

App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
　　success: res => {
　　　　// 发送 res.code 到后台换取 openId, sessionKey
　　　　/* var appid = 'wxe0b21958d553884c'; //填写微信小程序appid
　　　　 var secret = '8fc59ce0ef7682c48d887763ba98f3f0'; //填写微信小程序secret
  　　　 if (res.code) {
          var that = this 
  　　　　//调用request请求api转换登录凭证
      　　　　wx.request({
      　　　　　　url: 'https://api.weixin.qq.com/sns/jscode2session',
      　　　　　　data: {
      　　　　　　　　appid: appid,
      　　　　　　　　secret: secret,
      　　　　　　　　grant_type: 'authorization_code',
      　　　　　　　　js_code: res.code
      　　　　　　},
      　　　　　　method: 'GET',
      　　　　　　header: { 'content-type': 'application/json' },
      　　　　　　success: function (res) {
      　　　　　　     console.log(res.data.openid) //获取openid
                       that.globalData.openId = res.data.openid;
      　　　　　　}
      　　　　})
  　　    }*/
    　　}
    }),

    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    PATH:"https://www.hongshankexie.com"
  },
  showLogoModel:function(){
     console.log(99999)
  }
})


