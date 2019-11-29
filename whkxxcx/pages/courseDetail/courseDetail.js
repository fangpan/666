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
    loveed:false,    //收藏状态
    sc:"",
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
    var openId = wx.getStorageSync('openId')

    that.setData({  
       id:id     
    })

   //判断是否登录
   if(openId == undefined || openId =="" || openId == null ){
        that.setData({  
          loveed:false  
        })
   }else{
       that.setData({  
          loveed:true   
        })
   }
   
   //课程详情
   wx.request({
        url:""+pathURL+"/wx/curriculum/info",
        method:"GET",
        data:{
           id:id ,
           openid:openId
        },
        header: {
         'content-type': 'application/json'
        },
        success:function(res){
            var list = res.data.curriculum;    
            var pics = list.pictures
            //console.log(list)

             //判断是否收藏
             if(list.sc ==1 ){
                that.setData({  
                  loveed:true   
                })
              }else{
                that.setData({  
                  loveed:false   
                })
              }

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

//收藏课程
likeCourse:function(){
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
       wx.request({
            url:""+pathURL+"/wx/pay/setState",
            method:"GET",
            data:{
                  openid:openId,
                  type:that.data.id
            },
            header: {
             'content-type': 'application/json'
            },
            success:function(res){
              that.setData({
                 loveed:true
              });
              wx.showToast({
                  title:"收藏成功",
                  duration: 2000,
                  mask: true,
                  success:function(){},
                  fail:function(){},
                  complete:function(){}
                })
            }
          });
     }
},

//取消收藏课程
unlikeCourse:function(){
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
       wx.request({
            url:""+pathURL+"/wx/pay/setState",
            method:"GET",
            data:{
                  openid:openId,
                  type:that.data.id
            },
            header: {
             'content-type': 'application/json'
            },
            success:function(res){
              that.setData({
                 loveed:false
              });
              wx.showToast({
                  title:"取消收藏成功",
                  duration: 2000,
                  mask: true,
                  success:function(){},
                  fail:function(){},
                  complete:function(){}
                })

            }
          });
     }
},


})


