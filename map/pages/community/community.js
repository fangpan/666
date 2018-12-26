Page({
  data: {
     markers: [],
     showMore: false,
  },

  onReady: function (e) {
     // 使用 wx.createMapContext 获取 map 上下文 
     var  pathURL = getApp().globalData.PATH
     this.mapCtx = wx.createMapContext('map');
     this.setData({
          pathURL: pathURL
    })
  },
//展示品牌
  showLogoModel:function(){
       //util.showLogoModel()
       //app.showLogoModel()
       wx.showModal({
          title: '公众号搜索 "游品慧" ',
          content: '公众号搜索 "游品慧" 并添加关注，探寻地质地理和大自然的奥秘，了解科普实践课程情况',
          showCancel: false, //不显示取消按钮
          confirmText: '确定'
        })
  },
  onLoad: function (options) {
    var that=this
    var id = options.id;
    var  pathURL = getApp().globalData.PATH
    //获取社区大学详情
    wx.request({
        url:""+pathURL+"/wx/scienceuniversity/info/"+id+"",
        method:"GET",
        header: {
         'content-type': 'application/json'
        },
        success:function(res){
            var list = res.data.scienceUniversity; 
              list.callout.display = "ALWAYS";
              list.callout.color = "#FF0000";
              list.callout.padding = 4;
              list.callout.content = list.name;
              var unitName = list.name;   
              console.log(list)
            that.setData({
                "markers[0]" : list,
                 name : unitName
            });
            var name = list.name  
           wx.setNavigationBarTitle({
               title:name
           })
        }
      });
  //课程列表
     wx.request({
        url:""+pathURL+"/wx/curriculum/list?limit=9999&&id="+id+"",
        method:"GET",
        header: {
         'content-type': 'application/json'
        },
        success:function(res){
            var list = res.data.page.list;       
           that.setData({
                courseList : list
            });
            console.log(list)
        }
      });
  },

// 地图导航
 markertap:function() {
    var name = this.data.markers[0].name
    var latitude = Number(this.data.markers[0].latitude)
    var longitude = Number(this.data.markers[0].longitude)
    wx.openLocation({
      latitude: latitude,
      longitude: longitude,
      scale: 18,
      name: name,
      address:''
    })
 },

//查看更多
listToggle: function () {
    this.setData({
      showMore: !this.data.showMore
    })
  },

//跳转课程详情
TOdetail: function (e) {
    var id = e.currentTarget.id
     wx.navigateTo({
         url: '../course/course?id='+id+''
       });
  }

})



