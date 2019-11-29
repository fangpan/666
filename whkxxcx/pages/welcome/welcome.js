// pages/welcome/welcome.js
Page({

  data: {

  },

  onLoad: function (options) {

  },
  onReady: function () {
      //缓存个人信息
    wx.setStorage({   
        key: 'weled',   //关键字，本地缓存中指定的key
        data: "come",   
        success: function() {      //缓存成功后，输出提示
          console.log('写入weled缓存成功')
        },
        fail: function() {        //缓存失败后的提示
          console.log('写入weled发生错误')
        }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
   onShow: function(){
     //实例化一个动画 
     var animation = wx.createAnimation({
       duration:2000,                 //动画持续时间，单位 ms
       timingFunction: 'linear',     //动画的效果
       delay: 100,                   //动画延迟时间
       transformOrigin: 'center center',//属性允许您改变被转换元素的位置。
     }) 

      this.animation = animation
      //从 Y 轴顺时针旋转一个角度
      animation.rotateY(360).step({})
      //缩小为0
      animation.scale(0.01,0.01).step({})
      this.setData({
        //输出动画
        animationWEL: animation.export()
      })
      
    setTimeout(function() {
      this.setData({
         animationWEL:animation.export(),
         wellogo:false
      })
      wx.switchTab({
          url:'/pages/index/index'
      })
    }.bind(this), 4200)
  },

})