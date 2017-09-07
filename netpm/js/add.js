 
var app = angular.module('myApp', []);

//hover 出现删除
 app.directive('mouseOverLeave', function(){
        return {

            link: function(scope, elem, attr){
                elem.bind('mouseover', function(){
                    elem.css("cursor", "pointer");
                    scope.$apply(function(){
                        scope.hover = true;
                    });
                });
                elem.bind('mouseleave', function(){
                    scope.$apply(function(){
                        scope.hover = false;
                    });
                });
            }
        }
    });

  app.controller('myCtrl', function($scope) {
  	var deleteIndex=0;//要删除的索引
  	//链路列表
  	$scope.linkRoadList =[];//用于循环的数组
  	$scope.linkItem={};//单击链路左侧的item
  	var linkItemIndex=0;//单击链路左侧的item在数组的索引
  	$scope.linkRoadRuleItem={};
  	$scope.deleteLinkItem={};
  	//查看链路信息
  	$scope.linkInfo=function(item,index){
  		linkItemIndex=index;
  		$scope.linkItem=angular.copy(item);
  		angular.element(".llform").show();
  		angular.element(".hidetr").show();
  		$scope.netCardChange();//刷新样式
  	}
  	//添加链路按钮
	$scope.addLinkRoad=function(){
		linkItemIndex=-1;
		$scope.linkItem={};
		$scope.linkItem.linkRoadRuleList=[];
		$scope.linkItem.netcard="netcard1";
		$scope.netCardChange();
	 	angular.element(".llform").show();
	 	angular.element(".hidetr").show();
	};

	//网卡选择
	$scope.netCardChange=function(){
		//因为id跟value是一样的
  		var id=$scope.linkItem.netcard;
  		//移除样式
		angular.element("#netcarddiv").find("li").find("ul").each(function(){
         			$(this).removeClass("choseul");
       		 });
		angular.element("#"+id).parent().next().addClass("choseul");
	}
	//打开添加链路规则模态窗
	$scope.openAddLinkRoadRuleModal=function(){
		$scope.linkRoadRuleItem={};
		$scope.linkRoadRuleItem.select="重传包数";
	}
	//添加链路规则确定按钮
	$scope.addLinkRoadRule=function(){
		$scope.linkItem.linkRoadRuleList.push($scope.linkRoadRuleItem);
	}
	$scope.deleteLinkRoadRule=function(index){
		$scope.linkItem.linkRoadRuleList.splice(index,1);
	}
	//删除告警项目模态窗
	$scope.delLinkModal = function(item,index){
		deleteIndex=index;
		$scope.deleteLinkItem=item;
	}
	//删除告警项目模态窗
	$scope.delLink= function(){
		if($scope.linkItem.name==$scope.deleteLinkItem.name){
			angular.element(".llform").hide();
	 		angular.element(".hidetr").hide();
		}
		$scope.linkRoadList.splice(deleteIndex,1);
	}
	//更新链路信息
	$scope.updateLinkRoadItem=function(){
		if(linkItemIndex==-1){
			$scope.linkRoadList.push($scope.linkItem);
			alert("添加成功！");
		}else{
			$scope.linkRoadList[linkItemIndex]=$scope.linkItem;
			alert("修改成功！");
		}
	}

	function initLinkData(){
		var obj1={};
		obj1.name="移动链路";
		obj1.netcard="netcard1";
		$scope.linkRoadList.push(obj1);
		var obj2={};
		obj2.name="联通链路";
		obj2.netcard="netcard3";
		$scope.linkRoadList.push(obj2);
	}
	//赋值告警规则
	function initLinkRuleData(){
		var ruleObj1={};
		ruleObj1.select="重传包数";
		ruleObj1.pt="100";
		ruleObj1.zy="200";
		ruleObj1.jj="300";
		$scope.linkRoadList[0].linkRoadRuleList=[];
		$scope.linkRoadList[0].linkRoadRuleList.push(ruleObj1);

		var ruleObj2={};
		ruleObj2.select="重传包数";
		ruleObj2.pt="100";
		ruleObj2.zy="200";
		ruleObj2.jj="300";
		$scope.linkRoadList[1].linkRoadRuleList=[];
		$scope.linkRoadList[1].linkRoadRuleList.push(ruleObj2);
	}

	initLinkData();
	initLinkRuleData();
	
	$scope.jkArray =[];//用于循环的数组
	$scope.jkItem={};//用于每次添加的数组
	var jkItemIndex=0;
	$scope.jkRuleItem={};
	$scope.deleteJkItem={};

	//添加监控按钮
	$scope.addJkButton=function(){
		angular.element(".jkform").show();
		$scope.jkItem={};
		$scope.jkItem.net="子网1";
		$scope.jkItem.linkRoad="链路A";
		$scope.jkItem.ruleList=[];
		jkItemIndex=-1;
	}
	//查看监控信息
  	$scope.jkInfo=function(item,index){
  		angular.element(".jkform").show();
  		jkItemIndex=index;
  		$scope.jkItem=angular.copy(item);
  	}
  	//添加监控规则模态窗
  	$scope.openAddJkRuleModal=function(){
  		$scope.jkRuleItem={};
		$scope.jkRuleItem.select="重传包数";
  	}
  	//添加监控规则项
  	$scope.addJkRuleItem=function(){
  		$scope.jkItem.ruleList.push($scope.jkRuleItem);
  	}
  	//更新监控规则
  	$scope.updateJkRuleItem=function(){
  		if(jkItemIndex==-1){
			$scope.jkArray.push($scope.jkItem);
			alert("添加成功！");
		}else{
			$scope.jkArray[jkItemIndex]=$scope.jkItem;
			alert("修改成功！");
		}
  	}

  	//删除告警项目模态窗
	$scope.delJkModal = function(item,index){
		deleteIndex=index;
		$scope.deleteJkItem=item;
	}
	$scope.deleteJk=function(){
		if($scope.jkItem.name==$scope.deleteJkItem.name){
			angular.element(".jkform").hide();
		}
		$scope.jkArray.splice(deleteIndex,1);
	}
	$scope.deleteJkRuleItem=function(item,index){
		$scope.jkItem.ruleList.splice(index,1);
	}

	function initJkData(){
		var obj1={};
		obj1.name="上海营业厅";
		obj1.ip="219.140.235.98";
		obj1.net="子网3";
		obj1.linkRoad="链路C";
		$scope.jkArray.push(obj1);
		var obj2={};
		obj2.name="武汉营业厅";
		obj2.ip="191.255.255.255";
		obj2.net="子网2";
		obj2.linkRoad="链路A";
		$scope.jkArray.push(obj2);
	}

	function initJkRule(){
		var ruleObj1={};
		ruleObj1.select="重传包数";
		ruleObj1.pt="100";
		ruleObj1.zy="200";
		ruleObj1.jj="300";
		$scope.jkArray[0].ruleList=[];
		$scope.jkArray[0].ruleList.push(ruleObj1);

		var ruleObj2={};
		ruleObj2.select="重传包数";
		ruleObj2.pt="230";
		ruleObj2.zy="170";
		ruleObj2.jj="220";
		$scope.jkArray[1].ruleList=[];
		$scope.jkArray[1].ruleList.push(ruleObj2);
	}

	initJkData();
	initJkRule();
	
	//添加应用项目
	$scope.showyy=function(){ 
		angular.element(".yyform").show();
	};
	$scope.showyy=function(){
		angular.element(".yyform").show();
	};

	$scope.yyArray =[];//用于循环的数组
	$scope.yyItem={};//用于每次添加的数组
	$scope.deleteYYItem={};
	var yyItemIndex=0;

	$scope.yyInfo=function(item,index){
		yyItemIndex=index;
		angular.element(".yyform").show();
		$scope.yyItem=angular.copy(item);
	}
	$scope.addyyButton=function(){
		yyItemIndex=-1;
		angular.element(".yyform").show();
		$scope.yyItem={};
	}
	$scope.addyy=function(){
		if(yyItemIndex==-1){
			$scope.yyArray.push($scope.yyItem);
			alert("添加成功！");
		}else{
			$scope.yyArray[yyItemIndex]=$scope.yyItem;
			alert("修改成功！");
		}
		
	}
	//删除应用项目
	$scope.delModal = function(item,index){
		$scope.deleteYYItem=item;
		deleteIndex=index;
	}
	$scope.delYY=function(){
		if($scope.yyItem.name==$scope.deleteYYItem.name){
			angular.element(".yyform").hide();
		}
		$scope.yyArray.splice(deleteIndex,1);
	}
	function initYYData(){
		var yyobj1={};
		yyobj1.name="应用A";
		yyobj1.ipport="192.168.1.197:8080";
		$scope.yyArray.push(yyobj1);
		var yyobj2={};
		yyobj2.name="应用B";
		yyobj2.ipport="192.168.1.120:5000";
		$scope.yyArray.push(yyobj2);
	}

	initYYData();
	
	//添加tr背景颜色
   	 //angular.element(".warntab tr:odd").css({background:"#5F6A70"});
    
});
