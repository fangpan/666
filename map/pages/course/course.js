
Page({
  data: {
    name:"",
    imgUrls: [],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
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
  
  onLoad: function (options) {
    var that = this
    var id = options.id;
    var pathURL = getApp().globalData.PATH
   //课程详情
   wx.request({
        url:""+pathURL+"/wx/curriculum/info/"+id+"",
        method:"GET",
        header: {
         'content-type': 'application/json'
        },
        success:function(res){
            var list = res.data.curriculum;    
            var pics = list.pictures
            console.log(list)
            if(pics!=null){
              pics = pics.split(",")
              for(var i = 0; i < pics.length; i++) {
                  if(pics[i] == undefined || pics[i] == "") {
                     pics.splice(i,1);
                     i = i - 1; 
                   }
                }
            }
           that.setData({
                 imgUrls:pics ,
                 courseIntroduction:list.courseIntroduction,
                 time:list.time ,
                 lecturer:list.lecturer,
                 telephone:list.telephone ,
                 name:list.name,
                 audio:list.audio,
                 video:list.video
            });
           var name = that.data.name  
           wx.setNavigationBarTitle({
               title:name
           })
        }
      });
  },
 
//拨打电话
 calling: function (e) {
    var NUM = e.currentTarget.dataset.num
    console.log(NUM)
    wx.makePhoneCall({
        phoneNumber:NUM 
      })
  }

})