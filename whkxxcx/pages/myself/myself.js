
var app = getApp()
var pathURL = app.globalData.PATH;

Page({
  data: {
    userInfo: {},
    nickName:{},
    avatarUrl:{},
    hasUserInfo: false,
  },
  onLoad: function (options) {

    var that = this;
    that.setData({
      hasUserInfo: false,
    })

  //假如登录过获取缓存信息
   wx.getStorage({
      key: 'userInfo',    
      success:(r) => { 
          this.setData({  
             hasUserInfo: true,     
             userInfo: r.data,
             nickName: r.data.nickName,       
             avatarUrl: r.data.avatarUrl
          })
      },
      fail: function() {     
        that.setData({
          hasUserInfo: false,
        })
      }
    })
  },

 getUserInfo: function(e) {
    var that = this;
    //获取信息成功
    if(e.detail.userInfo){
      app.globalData.userInfo = e.detail.userInfo;
      this.setData({
          userInfo: e.detail.userInfo,
          hasUserInfo: true,
          nickName: e.detail.userInfo.nickName,       
          avatarUrl: e.detail.userInfo.avatarUrl
      })
      //登录获取openid
      wx.login({
　　   success: res => {
         var code = res.code;
  　　　 if (code) {
             wx.getUserInfo({
                  success: function (res) {
        　　　　   //调用request请求api获取openId
            　　　　wx.request({
            　　　　　　url: ""+pathURL+"/wx/pay/getOpenId", 
            　　　　　　data: {
            　　　　　　　　encryptedData: res.encryptedData,
                            iv: res.iv,
                            code:code
            　　　　　　},
            　　　　　　method: 'GET',
            　　　　　　header: { 'content-type': 'application/json' },
            　　　　　　success: function (res) {
                              wx.setStorage({   
                                  key: 'openId',   
                                  data: res.data,   
                                  success: function() {     
                                    console.log('写入openId缓存成功');
                                  },
                                  fail: function() {       
                                    console.log('写入openId发生错误')
                                  }
                              })
            　　　　　　  }
            　　　　  });
                    }
                })
        　　}
    　　}
    });
     
      //缓存个人信息
      wx.setStorage({   
          key: 'userInfo',   
          data: e.detail.userInfo,   
          success: function() {     
            console.log('写入userInfo缓存成功')
          },
          fail: function() {     
            console.log('写入userInfo发生错误')
          }
      })

    }else{
       this.setData({
          hasUserInfo: false,
       })
        wx.showModal({
          title: '提示',
          content: '获取登录信息失败！'
        })
    }
 },

mycollect:function(){
    wx.navigateTo({
       url:'/pages/loveCourse/loveCourse' 
    })
},

myactivity:function(){
    wx.navigateTo({
       url:'/pages/myactivity/myactivity' 
    })
},

aboutus:function(){
    wx.navigateTo({
       url:'/pages/about/about' 
    })
}


})
