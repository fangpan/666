Page({
  data: {
    scale:11,
    longitude:114.40300,
    latitude:30.52050,
    markers: [],
    showMore: false,
    inputValue:null,
    polygons: [
      {
       points: [{latitude:30.466100,longitude:114.625000},{latitude:30.454840,longitude:114.624530},{latitude:30.453230,longitude:114.620060},{latitude:30.452460,longitude:114.611710},{latitude:30.452620,longitude:114.610400},{latitude:30.456910,longitude:114.594310},{latitude:30.456920,longitude:114.592390},{latitude:30.479500,longitude:114.597260},{latitude:30.484090,longitude:114.598020},{latitude:30.485820,longitude:114.596290},{latitude:30.489070,longitude:114.590690},{latitude:30.501990,longitude:114.595360},{latitude:30.503990,longitude:114.596060},{latitude:30.502680,longitude:114.584700},{latitude:30.507220,longitude:114.576950},{latitude:30.507790,longitude:114.576010},{latitude:30.524920,longitude:114.586460},{latitude:30.541030,longitude:114.590070},{latitude:30.545390,longitude:114.587660},{latitude:30.545590,longitude:114.587550},{latitude:30.547150,longitude:114.557240},{latitude:30.546770,longitude:114.554450},{latitude:30.545340,longitude:114.552040},{latitude:30.533160,longitude:114.537620},{latitude:30.531000,longitude:114.523660},{latitude:30.530350,longitude:114.519950},{latitude:30.523550,longitude:114.513420},{latitude:30.523260,longitude:114.513210},{latitude:30.519230,longitude:114.511520},{latitude:30.519130,longitude:114.511480},{latitude:30.519600,longitude:114.530090},{latitude:30.519450,longitude:114.534720},{latitude:30.516160,longitude:114.536570},{latitude:30.513500,longitude:114.538060},{latitude:30.491560,longitude:114.537370},{latitude:30.491450,longitude:114.537370},{latitude:30.491500,longitude:114.532360},{latitude:30.491510,longitude:114.531800},{latitude:30.472950,longitude:114.511920},{latitude:30.471660,longitude:114.510540},{latitude:30.471940,longitude:114.500000},{latitude:30.472180,longitude:114.498570},{latitude:30.490560,longitude:114.476600},{latitude:30.490770,longitude:114.476390},{latitude:30.491030,longitude:114.457150},{latitude:30.491200,longitude:114.444990},{latitude:30.481570,longitude:114.434680},{latitude:30.481560,longitude:114.434640},{latitude:30.477060,longitude:114.433930},{latitude:30.477040,longitude:114.433930},{latitude:30.477160,longitude:114.430400},{latitude:30.477130,longitude:114.430150},{latitude:30.472970,longitude:114.428710},{latitude:30.472760,longitude:114.428570},{latitude:30.468500,longitude:114.431420},{latitude:30.468410,longitude:114.431430},{latitude:30.467960,longitude:114.420680},{latitude:30.467960,longitude:114.420650},{latitude:30.464840,longitude:114.420330},{latitude:30.464670,longitude:114.420330},{latitude:30.463490,longitude:114.411790},{latitude:30.463480,longitude:114.411730},{latitude:30.461960,longitude:114.412770},{latitude:30.460630,longitude:114.413680},{latitude:30.455630,longitude:114.406310},{latitude:30.454810,longitude:114.405060},{latitude:30.456360,longitude:114.402420},{latitude:30.456430,longitude:114.402350},{latitude:30.447800,longitude:114.395510},{latitude:30.447210,longitude:114.395040},{latitude:30.449370,longitude:114.390710},{latitude:30.449330,longitude:114.390480},{latitude:30.443160,longitude:114.375000},{latitude:30.437120,longitude:114.342320},{latitude:30.445210,longitude:114.317050},{latitude:30.445240,longitude:114.316940},{latitude:30.454130,longitude:114.308730},{latitude:30.454180,longitude:114.308690},{latitude:30.459140,longitude:114.294320},{latitude:30.459190,longitude:114.294250},{latitude:30.445490,longitude:114.288760},{latitude:30.435530,longitude:114.286770},{latitude:30.426650,longitude:114.280480},{latitude:30.419610,longitude:114.271920},{latitude:30.416670,longitude:114.262120},{latitude:30.416470,longitude:114.261450},{latitude:30.417720,longitude:114.255550},{latitude:30.418000,longitude:114.254360},{latitude:30.424550,longitude:114.250000},{latitude:30.426750,longitude:114.248770},{latitude:30.427160,longitude:114.243120},{latitude:30.428940,longitude:114.240330},{latitude:30.417420,longitude:114.232830},{latitude:30.405370,longitude:114.237280},{latitude:30.391920,longitude:114.238230},{latitude:30.384160,longitude:114.230550},{latitude:30.380860,longitude:114.227290},{latitude:30.384900,longitude:114.218570},{latitude:30.400420,longitude:114.215470},{latitude:30.405740,longitude:114.211480},{latitude:30.406940,longitude:114.210160},{latitude:30.389230,longitude:114.197080},{latitude:30.389130,longitude:114.196910},{latitude:30.392300,longitude:114.189320},{latitude:30.392380,longitude:114.188520},{latitude:30.389180,longitude:114.177860},{latitude:30.391760,longitude:114.164700},{latitude:30.402760,longitude:114.174670},{latitude:30.432200,longitude:114.191140},{latitude:30.443930,longitude:114.197350},{latitude:30.449110,longitude:114.205900},{latitude:30.453700,longitude:114.211640},{latitude:30.500840,longitude:114.255670},{latitude:30.506720,longitude:114.261590},{latitude:30.497970,longitude:114.270690},{latitude:30.497740,longitude:114.271270},{latitude:30.519310,longitude:114.292570},{latitude:30.519410,longitude:114.292640},{latitude:30.518960,longitude:114.296570},{latitude:30.519030,longitude:114.296820},{latitude:30.514370,longitude:114.298230},{latitude:30.514220,longitude:114.299570},{latitude:30.519840,longitude:114.302120},{latitude:30.519840,longitude:114.302270},{latitude:30.511250,longitude:114.303860},{latitude:30.510790,longitude:114.304910},{latitude:30.518920,longitude:114.310500},{latitude:30.523160,longitude:114.313740},{latitude:30.520370,longitude:114.314610},{latitude:30.520400,longitude:114.314810},{latitude:30.526290,longitude:114.322040},{latitude:30.526510,longitude:114.322380},{latitude:30.531020,longitude:114.323790},{latitude:30.531040,longitude:114.323830},{latitude:30.528730,longitude:114.331630},{latitude:30.527860,longitude:114.332690},{latitude:30.525520,longitude:114.330980},{latitude:30.525050,longitude:114.330640},{latitude:30.526180,longitude:114.326360},{latitude:30.526210,longitude:114.326090},{latitude:30.523100,longitude:114.326170},{latitude:30.522870,longitude:114.326040},{latitude:30.520380,longitude:114.320360},{latitude:30.520320,longitude:114.320270},{latitude:30.516090,longitude:114.327950},{latitude:30.514410,longitude:114.331180},{latitude:30.517590,longitude:114.328800},{latitude:30.518110,longitude:114.328030},{latitude:30.522850,longitude:114.329870},{latitude:30.523700,longitude:114.330160},{latitude:30.519820,longitude:114.331360},{latitude:30.519120,longitude:114.334430},{latitude:30.525020,longitude:114.338470},{latitude:30.524790,longitude:114.339180},{latitude:30.519630,longitude:114.340400},{latitude:30.519590,longitude:114.340890},{latitude:30.530610,longitude:114.346420},{latitude:30.530730,longitude:114.346790},{latitude:30.530570,longitude:114.349800},{latitude:30.529310,longitude:114.351700},{latitude:30.532900,longitude:114.357510},{latitude:30.533010,longitude:114.357680},{latitude:30.528430,longitude:114.375110},{latitude:30.528410,longitude:114.375290},{latitude:30.534450,longitude:114.377430},{latitude:30.534520,longitude:114.377420},{latitude:30.536970,longitude:114.395100},{latitude:30.537560,longitude:114.396590},{latitude:30.528550,longitude:114.406830},{latitude:30.528500,longitude:114.406940},{latitude:30.539240,longitude:114.414490},{latitude:30.540160,longitude:114.414940},{latitude:30.545890,longitude:114.414700},{latitude:30.545930,longitude:114.414760},{latitude:30.538700,longitude:114.425210},{latitude:30.537560,longitude:114.425680},{latitude:30.538320,longitude:114.428600},{latitude:30.538560,longitude:114.428870},{latitude:30.544740,longitude:114.426580},{latitude:30.546050,longitude:114.426640},{latitude:30.549910,longitude:114.430000},{latitude:30.551100,longitude:114.429630},{latitude:30.553620,longitude:114.407280},{latitude:30.553700,longitude:114.407230},{latitude:30.559480,longitude:114.407090},{latitude:30.559520,longitude:114.407090},{latitude:30.565000,longitude:114.412210},{latitude:30.565210,longitude:114.412250},{latitude:30.577910,longitude:114.411350},{latitude:30.578080,longitude:114.411380},{latitude:30.575710,longitude:114.416420},{latitude:30.575630,longitude:114.416630},{latitude:30.583690,longitude:114.417070},{latitude:30.583910,longitude:114.417050},{latitude:30.592110,longitude:114.404450},{latitude:30.592220,longitude:114.403130},{latitude:30.598780,longitude:114.398660},{latitude:30.598950,longitude:114.398530},{latitude:30.581390,longitude:114.390840},{latitude:30.581300,longitude:114.390870},{latitude:30.580830,longitude:114.384450},{latitude:30.580830,longitude:114.384320},{latitude:30.586650,longitude:114.382250},{latitude:30.586660,longitude:114.381450},{latitude:30.579410,longitude:114.374730},{latitude:30.579560,longitude:114.374380},{latitude:30.576270,longitude:114.374870},{latitude:30.575210,longitude:114.373830},{latitude:30.578890,longitude:114.366180},{latitude:30.579700,longitude:114.364400},{latitude:30.563950,longitude:114.346300},{latitude:30.563030,longitude:114.344430},{latitude:30.560240,longitude:114.345230},{latitude:30.559190,longitude:114.345450},{latitude:30.554070,longitude:114.341210},{latitude:30.553930,longitude:114.341130},{latitude:30.556010,longitude:114.336170},{latitude:30.556130,longitude:114.335510},{latitude:30.551510,longitude:114.334630},{latitude:30.549270,longitude:114.332320},{latitude:30.553100,longitude:114.330370},{latitude:30.553240,longitude:114.330130},{latitude:30.554190,longitude:114.323400},{latitude:30.554170,longitude:114.323260},{latitude:30.548410,longitude:114.321930},{latitude:30.546420,longitude:114.322780},{latitude:30.545190,longitude:114.333130},{latitude:30.544990,longitude:114.333020},{latitude:30.545190,longitude:114.322560},{latitude:30.545380,longitude:114.321190},{latitude:30.564590,longitude:114.319220},{latitude:30.564820,longitude:114.319300},{latitude:30.571140,longitude:114.335160},{latitude:30.571930,longitude:114.337700},{latitude:30.582070,longitude:114.342560},{latitude:30.582400,longitude:114.343010},{latitude:30.586170,longitude:114.340000},{latitude:30.586460,longitude:114.339800},{latitude:30.577600,longitude:114.329440},{latitude:30.577360,longitude:114.329170},{latitude:30.580960,longitude:114.329040},{latitude:30.581010,longitude:114.329070},{latitude:30.591580,longitude:114.341640},{latitude:30.591690,longitude:114.341780},{latitude:30.594970,longitude:114.341630},{latitude:30.596040,longitude:114.342760},{latitude:30.592510,longitude:114.347150},{latitude:30.592300,longitude:114.347350},{latitude:30.602310,longitude:114.366770},{latitude:30.602680,longitude:114.367480},{latitude:30.609460,longitude:114.365760},{latitude:30.610030,longitude:114.366650},{latitude:30.606360,longitude:114.369070},{latitude:30.604250,longitude:114.370290},{latitude:30.606520,longitude:114.375000},{latitude:30.606620,longitude:114.375260},{latitude:30.604790,longitude:114.376680},{latitude:30.606060,longitude:114.379830},{latitude:30.607320,longitude:114.375000},{latitude:30.610930,longitude:114.372760},{latitude:30.615280,longitude:114.377300},{latitude:30.615290,longitude:114.377320},{latitude:30.619330,longitude:114.386150},{latitude:30.619340,longitude:114.386300},{latitude:30.616260,longitude:114.390390},{latitude:30.615820,longitude:114.390710},{latitude:30.618890,longitude:114.394280},{latitude:30.619270,longitude:114.394310},{latitude:30.619240,longitude:114.404540},{latitude:30.619230,longitude:114.404820},{latitude:30.616410,longitude:114.406570},{latitude:30.615330,longitude:114.406560},{latitude:30.616480,longitude:114.408120},{latitude:30.618510,longitude:114.408240},{latitude:30.620950,longitude:114.405150},{latitude:30.621320,longitude:114.405160},{latitude:30.619460,longitude:114.408090},{latitude:30.619460,longitude:114.408240},{latitude:30.623740,longitude:114.408590},{latitude:30.624120,longitude:114.408640},{latitude:30.624130,longitude:114.410870},{latitude:30.621640,longitude:114.410820},{latitude:30.622280,longitude:114.416680},{latitude:30.625100,longitude:114.417360},{latitude:30.619030,longitude:114.436670},{latitude:30.619070,longitude:114.436760},{latitude:30.600100,longitude:114.440090},{latitude:30.599900,longitude:114.440150},{latitude:30.594760,longitude:114.450960},{latitude:30.594670,longitude:114.451000},{latitude:30.572620,longitude:114.447070},{latitude:30.568540,longitude:114.446800},{latitude:30.568500,longitude:114.453970},{latitude:30.567920,longitude:114.456080},{latitude:30.564380,longitude:114.456220},{latitude:30.564130,longitude:114.457100},{latitude:30.567710,longitude:114.464160},{latitude:30.567640,longitude:114.465520},{latitude:30.563530,longitude:114.463110},{latitude:30.563480,longitude:114.463510},{latitude:30.563600,longitude:114.467680},{latitude:30.564140,longitude:114.468410},{latitude:30.569050,longitude:114.469810},{latitude:30.571110,longitude:114.470700},{latitude:30.568150,longitude:114.474210},{latitude:30.568370,longitude:114.475240},{latitude:30.564810,longitude:114.477140},{latitude:30.564400,longitude:114.477200},{latitude:30.564280,longitude:114.476790},{latitude:30.564270,longitude:114.473270},{latitude:30.561080,longitude:114.474110},{latitude:30.560900,longitude:114.474150},{latitude:30.557780,longitude:114.479740},{latitude:30.555040,longitude:114.479770},{latitude:30.544340,longitude:114.476010},{latitude:30.543920,longitude:114.475600},{latitude:30.547240,longitude:114.469640},{latitude:30.546770,longitude:114.469480},{latitude:30.540980,longitude:114.475220},{latitude:30.537260,longitude:114.476020},{latitude:30.537650,longitude:114.479610},{latitude:30.537950,longitude:114.480150},{latitude:30.545610,longitude:114.483660},{latitude:30.545720,longitude:114.485200},{latitude:30.539480,longitude:114.485550},{latitude:30.537900,longitude:114.486750},{latitude:30.536640,longitude:114.492810},{latitude:30.536830,longitude:114.493270},{latitude:30.545620,longitude:114.492210},{latitude:30.546190,longitude:114.492640},{latitude:30.562580,longitude:114.483390},{latitude:30.565200,longitude:114.483360},{latitude:30.567640,longitude:114.491000},{latitude:30.568020,longitude:114.491910},{latitude:30.571020,longitude:114.492270},{latitude:30.571240,longitude:114.493020},{latitude:30.569270,longitude:114.497100},{latitude:30.569150,longitude:114.497700},{latitude:30.572540,longitude:114.503580},{latitude:30.572520,longitude:114.504000},{latitude:30.571220,longitude:114.508150},{latitude:30.570820,longitude:114.509940},{latitude:30.568510,longitude:114.509970},{latitude:30.568770,longitude:114.513840},{latitude:30.578990,longitude:114.515330},{latitude:30.581560,longitude:114.516450},{latitude:30.587000,longitude:114.513620},{latitude:30.587110,longitude:114.513800},{latitude:30.583330,longitude:114.539050},{latitude:30.581940,longitude:114.540270},{latitude:30.585040,longitude:114.543430},{latitude:30.585510,longitude:114.544600},{latitude:30.581240,longitude:114.549060},{latitude:30.580310,longitude:114.549080},{latitude:30.582100,longitude:114.549890},{latitude:30.582750,longitude:114.550280},{latitude:30.578380,longitude:114.559270},{latitude:30.580210,longitude:114.562660},{latitude:30.585270,longitude:114.561070},{latitude:30.590600,longitude:114.560470},{latitude:30.590290,longitude:114.552450},{latitude:30.591930,longitude:114.551470},{latitude:30.587730,longitude:114.543780},{latitude:30.589320,longitude:114.542140},{latitude:30.593110,longitude:114.541460},{latitude:30.598260,longitude:114.538390},{latitude:30.605900,longitude:114.528940},{latitude:30.606350,longitude:114.528450},{latitude:30.608930,longitude:114.531930},{latitude:30.604740,longitude:114.533750},{latitude:30.606980,longitude:114.536920},{latitude:30.617640,longitude:114.529250},{latitude:30.621680,longitude:114.525790},{latitude:30.617360,longitude:114.519260},{latitude:30.615350,longitude:114.516560},{latitude:30.621090,longitude:114.510120},{latitude:30.616900,longitude:114.505360},{latitude:30.637130,longitude:114.477860},{latitude:30.637190,longitude:114.477790},{latitude:30.637550,longitude:114.466400},{latitude:30.637400,longitude:114.466140},{latitude:30.629420,longitude:114.464730},{latitude:30.629370,longitude:114.464220},{latitude:30.636960,longitude:114.457690},{latitude:30.640120,longitude:114.456220},{latitude:30.642190,longitude:114.459830},{latitude:30.643200,longitude:114.459940},{latitude:30.663220,longitude:114.456310},{latitude:30.663680,longitude:114.456200},{latitude:30.664930,longitude:114.467050},{latitude:30.664910,longitude:114.467310},{latitude:30.668500,longitude:114.463500},{latitude:30.674100,longitude:114.461420},{latitude:30.656870,longitude:114.404960},{latitude:30.656480,longitude:114.403810},{latitude:30.641480,longitude:114.375000},{latitude:30.640840,longitude:114.373850},{latitude:30.636380,longitude:114.356400},{latitude:30.639220,longitude:114.352680},{latitude:30.664400,longitude:114.373650},{latitude:30.677390,longitude:114.391910},{latitude:30.686420,longitude:114.405570},{latitude:30.687520,longitude:114.411920},{latitude:30.692530,longitude:114.432560},{latitude:30.692750,longitude:114.469650},{latitude:30.685930,longitude:114.499630},{latitude:30.684270,longitude:114.505300},{latitude:30.677010,longitude:114.530190},{latitude:30.664120,longitude:114.546160},{latitude:30.663080,longitude:114.547460},{latitude:30.580690,longitude:114.584900},{latitude:30.577220,longitude:114.586390},{latitude:30.564290,longitude:114.599320},{latitude:30.556030,longitude:114.621280},{latitude:30.556890,longitude:114.623270},{latitude:30.552060,longitude:114.626000},{latitude:30.547630,longitude:114.626510},{latitude:30.545670,longitude:114.623810},{latitude:30.543840,longitude:114.623570},{latitude:30.539440,longitude:114.632670},{latitude:30.538250,longitude:114.633290},{latitude:30.533420,longitude:114.626770},{latitude:30.533280,longitude:114.626630},{latitude:30.530510,longitude:114.634290},{latitude:30.523720,longitude:114.636260},{latitude:30.505380,longitude:114.635920},{latitude:30.500610,longitude:114.636270},{latitude:30.481740,longitude:114.641280},{latitude:30.477980,longitude:114.642130},{latitude:30.475400,longitude:114.641080},{latitude:30.472480,longitude:114.637790},{latitude:30.469960,longitude:114.627720}],
        strokeColor:"#FF0000",
        strokeWidth: 1,
        fillColor:"#fedcbdBB"
      }
    ]
  },
  onReady: function (e) {
    wx.showLoading({
       title: '加载中...',
    })
    // 使用 wx.createMapContext 获取 map 上下文 
    var pathURL = getApp().globalData.PATH
    this.mapCtx = wx.createMapContext('map');
    this.setData({
      inputValue: "",
      pathURL: pathURL
    })
    //设置分享
    wx.showShareMenu({
        withShareTicket: true
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
  onLoad: function () {
  	var that = this
    var pathURL = getApp().globalData.PATH
     //获取管理站列表
	   wx.request({
	        url:""+pathURL+"/wx/teachingstation/list?limit=9999",
	        method:"GET",
	        header: {
	         'content-type': 'application/json'
	        },
	        success:function(res){
            wx.hideLoading();
	            var list = res.data.page.list;  
	            that.setData({
	                markers : list
	            });
              console.log(list)
	         }
	      });
	    
   },
  addScale:function(){
      var that = this 
        this.mapCtx.getScale({
             success:function(res){
              var newscale = Number(res.scale)+3
               that.setData({
                 scale : newscale
             });
            }
        })
    },
  minScale:function(){
        var that = this 
        this.mapCtx.getScale({
                 success:function(res){
                  var newscale = Number(res.scale)+1
                   that.setData({
                     scale : newscale
                 });
              }
        })
    },

// 获取缩放等级
    getScale:function(e){ 
       var that = this 
       if(e.causedBy=="scale"){
            this.mapCtx.getScale({
               success:function(res){
                  if(res.scale >= 13){
                     var list = that.data.markers
                     for(var i=0;i<list.length;i++){
                          var i = Number(i)
                          list[i].callout.display = "ALWAYS"
                          list[i].callout.bgColor = "none"
                          list[i].callout.color = "#009688"
                       }
                      that.setData({
                          markers : list
                      });
                  }
                  else{
                      var list = that.data.markers
                      for(var i=0;i<list.length;i++){
                            var i = Number(i)
                            list[i].callout.display = "BYCLICK"
                         }
                        that.setData({
                            markers : list
                       });
                   }
                 }
            })
       }
    },

 //搜索
 search: function () {
   var pathURL = getApp().globalData.PATH
	 var that = this;
	 wx.request({
        url:""+pathURL+"/wx/teachingstation/list?limit=9999&&name="+that.data.inputValue+"",
        method:"GET",
        header: {
         'content-type': 'application/json'
        },
        success:function(res){
            var list = res.data.page.list;  
              if(list == "" || list == undefined || list == null){
                 wx.showModal({
                    title: '',
                    content: '未查到相关信息！',
                    showCancel: false, //不显示取消按钮
                    confirmText: '确定'
                  })
                  that.setData({
                      markers : "",
                });
              }
             else{
                for(var i=0;i<list.length;i++){
                    var i = Number(i)
                    list[i].callout.display = "ALWAYS"
                    list[i].callout.bgColor = "none"
                    list[i].callout.color = "#009688"
                 }    
                that.setData({
                    markers : list,
                    scale : 13,
                    longitude : list[0].longitude,
                    latitude : list[0].latitude
              });
            }
        }
      });
  },

//点击标记点
  markertap(e) {
     var id = e.markerId
       wx.navigateTo({
           url: '../communitylist/communitylist?id='+id+''
       });
  },

 inputValue: function(e){
    this.setData({
      inputValue: e.detail.value
    })
  },

//跳转到展教联盟
 resources: function () {
    wx.switchTab({
      url:'/pages/resources/resources'
    })
  },

//跳转到特色场馆
 changguan: function () {
    wx.redirectTo({
      url:'/pages/changguan/changguan'
    })
  },

//查看更多
listToggle: function () {
    this.setData({
      showMore: !this.data.showMore
    })
  },

//跳转到管理站社区列表
TOdetail: function (e) {
   var id = e.currentTarget.id
       wx.navigateTo({
           url: '../communitylist/communitylist?id='+id+''
         });
    }
})

