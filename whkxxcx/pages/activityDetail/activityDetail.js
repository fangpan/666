// pages/activityDetail/activityDetail.js
var pathURL = getApp().globalData.PATH;

Page({
  data: {
    id:"",
    imgUrls: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular:true,
  
  },
  onReady: function (e) {
    //设置分享
    wx.showShareMenu({
        withShareTicket: true
    })
  },
  onLoad: function (options) {
    var that = this
    var id = options.id;
    that.setData({  
       id:id     
    })

   //活动详情
   wx.request({
        url:""+pathURL+"/wx/curriculum/info",
        method:"GET",
        data:{
           id:id 
        },
        header: {
         'content-type': 'application/json'
        },
        success:function(res){
            var list = res.data.curriculum;    
            var pics = list.pictures
            //console.log(list)

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
                information:list.information,
                streetCommunity:list.streetCommunity,
                unitIntroduction:list.unitIntroduction,
                communityNumber:list.communityNumber,
            });
           var name = list.name  
           wx.setNavigationBarTitle({
               title:name
           })
        }
      });
  },

//报名活动
baoming:function(e){
    var that = this;
    var openId = wx.getStorageSync('openId')
    if(openId == undefined || openId =="" || openId == null ){
      wx.showModal({
          title: '提示',
          content: '需先到个人中心授权登录！',
          success (res) {
            if (res.confirm) {
              wx.switchTab({
                  url:'/pages/myself/myself'
              })
            } 
            else if (res.cancel) {
              
            }
          }
        })
   }else{
      wx.navigateTo({
           url:'/pages/form/form?id='+that.data.id+'' 
         })
     }
},

})


