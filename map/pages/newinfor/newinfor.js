
var pathURL = getApp().globalData.PATH
var url = ""+pathURL+"/wx/activity/list";
var limit = 10;

Page({
  data:{
    moment:[],
    page : 1,
    show: false
  },
onReady: function (e) {
    wx.showLoading({
      title: '数据加载中',
    })
      var  pathURL = getApp().globalData.PATH
      this.setData({
          pathURL: pathURL
    })
  },
onLoad:function(){
  var that = this
  var page = 1
   wx.request({
      url: url,
      method: "GET",
      header: {
        'content-type': 'application/text'
      },
      data:{
         page:page,
         limit:limit
      },
      success: function (res) {
        wx.hideLoading();
        // 回调函数
        var moment_list = that.data.moment;
        for (var i = 0; i < res.data.page.list.length; i++) {
          moment_list.push(res.data.page.list[i]);
        }
        // 设置数据
        that.setData({
          moment: that.data.moment
        })
        console.log(that.data.moment)
        // 隐藏加载框
        wx.hideLoading();
      }
    })
 },

//页面滑动到底部加载
onReachBottom: function () {
    var that = this;
    // 显示加载图标
    wx.showLoading({
      title: '拼命加载中',
    })
     that.setData({
          page: that.data.page +1
     })
 
    wx.request({
      url: url,
      method: "GET",
      // 请求头部
      header: {
        'content-type': 'application/text'
      },
      data:{
           page:that.data.page,
           limit:limit
        },
      success: function (res) {
        var moment_list = that.data.moment;
        for (var i = 0; i < res.data.page.list.length; i++) {
          moment_list.push(res.data.page.list[i]);
        }
        // 设置数据
        that.setData({
          moment: that.data.moment
        })
        //console.log(res.data.page.list)
        // 隐藏加载框
        wx.hideLoading();
        if(res.data.page.list.length==0){
              that.setData({
                  show:true
              });
         }
      }
    })
  },

 // 下拉刷新
  onPullDownRefresh: function () {
    // 显示顶部刷新图标
    wx.showNavigationBarLoading();
    var that = this;
    var page = 1
    wx.request({
      url: url,
      method: "GET",
      header: {
        'content-type': 'application/text'
      },
      data:{
           page:page,
           limit:limit
        },
      success: function (res) {
        that.setData({
          moment: res.data.page.list
        });
        // 设置数组元素
        that.setData({
          moment: that.data.moment,
          page:1
        });
        console.log(that.data.moment);
        // 隐藏导航栏加载框
        wx.hideNavigationBarLoading();
        // 停止下拉动作
        wx.stopPullDownRefresh();
      }
    })
  },


  // 获取滚动条当前位置
  onPageScroll: function (e) {
    //console.log(e)
    if (e.scrollTop > 250) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },

  //回到顶部
  goTop: function (e) { 
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '请升级到最新微信版本后重试。'
      })
    }
  },

 loadDETAIL:function(e){
  var id = e.currentTarget.id
  wx.navigateTo({
       url:'/pages/infordetail/infordetail?id='+id+'' 
     })
 }

})




  