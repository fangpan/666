
import WxValidate from "../../utils/WxValidate";
var pathURL = getApp().globalData.PATH;

Page({
  data: {
      cid:"",
      form:{
          name:"",
          phone:"",
          card:"",
          date: [],
          index: 0,
          place:[],
          placeindex:0,
      },
   
  },
  onLoad: function (options) {
     var that = this;
     //console.log(options.id);
     this.initValidate();

     wx.request({
            url:""+pathURL+"/wx/statecurriculum/list",
            method:"GET",
            data:{
                 cid:options.id
                },
            header: {
             'content-type': 'application/json'
            },
            success:function(res){
              //console.log(res)
                //循环地点
                 var pics = res.data.page.list[0].place
                if(pics!=null){
                  pics = pics.split(",")
                  for(var i = 0; i < pics.length; i++) {
                      if(pics[i] == undefined || pics[i] == "") {
                         pics.splice(i,1);
                         i = i - 1; 
                       }
                    }
                }
                 //循环时间
                 var pims = res.data.page.list[0].date
                if(pims!=null){
                  pims = pims.split(",")
                  for(var i = 0; i < pims.length; i++) {
                      if(pims[i] == undefined || pims[i] == "") {
                         pims.splice(i,1);
                         i = i - 1; 
                       }
                    }
                }

             let place = "form.place";
             let date = "form.date";
             that.setData({
                  cid: options.id,
                  [place]:pics,
                  [date]:pims
              })
            }
        });
  },
  //选择时间
  bindDateChange: function (e) {
      let index = "form.index";
      this.setData({
          [index]: e.detail.value
      })
      //console.log(this.data.form.date[this.data.form.index])
  },

  //选择地点
  bindPlaceChange: function (e) {
      let placeindex = "form.placeindex";
      this.setData({
          [placeindex]: e.detail.value
      })
  },

  showModal(error) {
    wx.showModal({
      content: error.msg,
      showCancel: false,
    })
},

//表单验证
initValidate() {
    let rules = {
      name: {
        required: true,
        nameC: true
      },
      phone: {
        required: true,
        tel: true
      },
      card: {
        required: true,
        idcard: true
      },
    }

    let message = {
      name: {
        required: '请输入您的姓名',
        nameC: '请输入正确的姓名'
      },
      phone: {
        required: "请输入您的手机号码",
        tel: '请输入正确的手机号码'
      },
      card: {
        required: "请输入您的身份证号码",
        idcard: "请输入正确的身份证号码"
      },
    }
    //实例化当前的验证规则和提示消息
    this.WxValidate = new WxValidate(rules, message);
  },

  //提交表格
  formSubmit: function (e) {
    var that = this
    let openId = wx.getStorageSync('openId')
    let userCurriculum = e.detail.value;
    if (!this.WxValidate.checkForm(userCurriculum)) {
     //表单元素验证不通过，此处给出相应提示
     const error = this.WxValidate.errorList[0]
     this.showModal(error);
     return false;
    }else{
       userCurriculum.openid = openId
       userCurriculum.cid = that.data.cid
       userCurriculum = JSON.stringify(userCurriculum)
       console.log(userCurriculum)
      
       //验证通过
        wx.request({
            url:""+pathURL+"/wx/usercurriculum/save",
            method:"POST",
            data:
                 userCurriculum
                ,
            header: {
             'content-type': 'application/json'
            },
            success:function(res){
                if(res.data.code ==0){
                    wx.showModal({
                        showCancel: false,
                        content: '资料提交成功，您可以在个人中心查看报名活动状态',
                        success (res) {
                            if (res.confirm) {
                              wx.navigateBack({
                                delta: 1
                              })
                            }
                           
                              //报名成功发送模版消息
                              /*wx.login({
                                success: res => {
                                  server.post({
                                    formId: e.detail.formId,
                                    code: res.code
                                    }, () => {
                                    // 提交成功后，由服务器发送模板消息
                                    server.sendTemplateMessage(res => {
                                      console.log('模板消息发送结果：', res.data)
                                    })
                                  })
                                },
                              })*/
                           }
                        })                  
                     }
                }
          });
      }
  }, //提交表格

})


// 模拟服务器端代码
/*var server = {
  appid: 'wx65a32d3a0d58bd92', // 在此处填写自己的appid
  secret: 'f1715b1e13cf9e0b4f23112941928dfd', // 在此处填写自己的secret
  // 用于保存用户的openid和formId
  user: {
    openid: '',
    formId: ''
  },
  // 用于接收表单，调用this.getOpenid()根据code换取openid
  post: function(data, success) {
    this.user.formId = data.formId
    this.getOpenid(data.code, res => {
        this.user.openid = res.data.openid
        success()
    })
  },

  // 用于发送模板消息
  getOpenid: function(code, success) {
    wx.request({
      url: 'https://api.weixin.qq.com/sns/jscode2session',
      data: {
        appid: this.appid,
        secret: this.secret,
        grant_type: 'authorization_code',
        js_code: code
      },
      success: success
    })
  },
  // 用于发送模板消息
  sendTemplateMessage: function(success) {
    var user = this.user
    var data = {
      touser: user.openid,
      template_id: 'hKs3tanU1xIU3vC02vOFsbWw7FLUns8Iczskqc-0UDI',  // 在此处填写模板id
      page: 'index',
      form_id: user.formId,
      data: {
        keyword1: {
          value: '科普研学成 果汇报'
        },
        keyword2: {
          value: '王回复'
        },
        keyword3: {
          value: '13188888888'
        },
        keyword4: {
          value: '2019-12-01'
        },
        keyword5: {
          value: '光谷大道'
        },
        keyword6: {
          value: '审核中'
        }
      }
    }
    this.getAccessToken(res => {
      var token = res.data.access_token
      console.log('服务器access_token：' + token)
      var url = 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + token
      wx.request({
        url: url,
        method: 'post',
        data: data,
        success: success
      })
    })
  },
  // 用于获取access_token
  getAccessToken: function(success) {
    var url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + this.appid + '&secret=' + this.secret
    wx.request({
      url: url,
      success: success
    })

  }
}*/




