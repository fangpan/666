var  pathURL = getApp().globalData.PATH

Page({
  data: {
    markers:[],
    imgUrls:[],
    pathURL: pathURL,
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    showMore: false,
    zhantingList:[],
    audio:"",
    video:"",
 },

  //展示品牌
  showLogoModel:function(){
       wx.showModal({
          title: '公众号搜索 " 游品慧 " ',
          content: '公众号搜索 "游品慧" 并添加关注，探寻地质地理和大自然的奥秘，了解科普实践课程情况',
          showCancel: false, //不显示取消按钮
          confirmText: '确定'
        })
  },
  onLoad: function (options) {
    var that=this
    var id = options.id;
    //基地详情
    wx.request({
        url:""+pathURL+"/wx/basedetails/info",
        method:"GET",
        data:{
          id:id
        },
        header: {
         'content-type': 'application/json'
        },
        success:function(res){
          var list = res.data.scienceVenues;  
          //console.log(list)
          list.callout.display = "ALWAYS";
          list.callout.color = "#FF0000";
          list.callout.content = res.data.scienceVenues.baseName;

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
           var name = list.baseName  
           that.setData({
                "markers[0]":list,
                 imgUrls:pics,
                 audio:list.audio,
                 video:list.video,
            });
           wx.setNavigationBarTitle({
               title:name
           })
        }
      });

   //展厅列表
   wx.request({
        url:""+pathURL+"/wx/exhibitionhall/list", 
        method:"GET",
        data:{
          moduleid:id
        },
        header: {
         'content-type': 'application/json'
        },
        success:function(res){
            var list = res.data.page.list;    
            //console.log(res)   
            that.setData({
                zhantingList : list
            });
          }
      });
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


