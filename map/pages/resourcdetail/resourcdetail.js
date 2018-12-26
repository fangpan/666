
Page({
  data: {
    markers:[],
    imgUrls:[],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    showMore: false,
    zhantingList:[],
    count: 39,
    audio:"",
    video:"",
 },
  onReady: function (e) {
      this.reload();
      var  pathURL = getApp().globalData.PATH
      this.setData({
        pathURL: pathURL
    })
  },
//音频播放
 actionEvent: function(e) {
    var method = this.data.status === 'play' ? 'pause' : 'play';
    this.setData({
      status: method,
      action: {
        method: method
      }
    });
  },
  timeupdateEvent: function(e) {
    var t = e.detail.currentTime
    this.setData({
      timeText: this.formatTime(t),
    });
  },
  endEvent: function() {
     this.reload();
  },
  reload: function() {
    this.setData({
      per: 0,
      status: 'pause',
      currentTime: '0',
      timeText: '00:00',
    });
    setTimeout(() => {
      this.setData({
        action: {
          method: 'pause'
        }
      })
    }, 100);
  },
  formatTime: function(time) {
    time = Math.floor(time);
    var m = Math.floor(time / 60).toString();
    m = m.length < 2 ? '0' + m : m;
    var s = (time - parseInt(m) * 60).toString();
    s = s.length < 2 ? '0' + s : s;
    return `${m}:${s}`;
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
    var pathURL = getApp().globalData.PATH
   //展教联盟详情
   wx.request({
        url:""+pathURL+"/wx/exhibitionalliance/info/"+id+"",
        method:"GET",
        header: {
         'content-type': 'application/json'
        },
        success:function(res){
          var list = res.data.exhibitionAlliance;  
          list.callout.display = "ALWAYS";
          list.callout.color = "#FF0000";
          list.callout.padding = 4;
          list.callout.content = res.data.exhibitionAlliance.unitName;

          var pics = list.pictures
          if(pics!=null){
            pics = pics.split(",")
            for(var i = 0; i < pics.length; i++) {
                if(pics[i] == undefined || pics[i] == "") {
                   pics.splice(i,1);
                   i = i - 1; 
                 }
              }
            }
           var  counts =  Number(that.data.count)+1
           var name = list.unitName  
           that.setData({
                "markers[0]":list,
                 imgUrls:pics,
                 count:counts,
                 audio:list.audio,
                 video:list.video,
            });
           wx.setNavigationBarTitle({
               title:name
           })
          console.log(list)
        }
      });

   //展厅列表
   wx.request({
        url:""+pathURL+"/wx/exhibitionhall/list?module=1&&moduleid="+id+"",
        method:"GET",
        header: {
         'content-type': 'application/json'
        },
        success:function(res){
            var list = res.data.page.list;    
            console.log(list)   
            that.setData({
                zhantingList : list
            });
        }
      });
   console.log(that.data.audio)
  },

// 标记点地图导航
 markertap:function() {
    var name = this.data.markers[0].unitName
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

//查看更多展厅
listToggle: function () {
    this.setData({
      showMore: !this.data.showMore
    })
  },

//跳转展厅详情
TOdetail: function (e) {
   var id = e.currentTarget.id
   wx.navigateTo({
       url: '/pages/roomdetail/roomdetail?id='+id+''
     });
  }
})


