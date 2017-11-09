
var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
  	
//卡劵详情
var priceNum = 
      {
          useName:"小鹿忍不住忍不住要剁手",
          totleprice:'300',
          monthprice:'50',
          monthNum:'6',
          getmonth:'6',
          leavemonth:'6'
       }

$scope.priceNum = priceNum;


  //已发放json格式	
  	var  coupon1=
 	
 	  [
        {
        	couponId:1,
        	price:'200',
        	usetime:'2016年6月1日'
        },
        {
        	couponId:2,
        	price:'15',
        	usetime:'2016年6月2日'
        },
        {
        	couponId:3,
        	price:'108',
        	usetime:'2016年6月3日'
        },
        {
        	couponId:4,
        	price:'5',
        	usetime:'2016年6月4日'
        },

     ]
  	
  	$scope.coupon1 = coupon1;
  	
  	
//未发放json格式 
    var  coupon2=
  
    [
        {
          couponId:1,
          price:'500',
          usetime:'2018年6月1日'
        },
        {
          couponId:2,
          price:'10',
          usetime:'2018年6月2日'
        },
        {
          couponId:3,
          price:'108',
          usetime:'2018年6月3日'
        },
     ]
    
    
    $scope.coupon2 = coupon2;


  /*获取验证码*/
var isPhone = 1;
 $scope.getCode=function(){
	 
	checkPhone(); //验证手机号码
	if(isPhone){
		resetCode(); //倒计时
	}else{
		$('.codeInput').focus();
	}
	
}
  //验证手机号码
function checkPhone(){

	var phone = $('.phoneInput').val();
	var pattern = /^1{1}[3578]{1}[0-9]{9}$/;
	isPhone = 1;
	if(phone == '') {
		$.alert('请输入手机号码');
		isPhone = 0;
		return;
	}
	else if(!pattern.test(phone)){
		$.alert('请输入正确的手机号码');
		isPhone = 0;
		return;
	}
	else{
		return true;
	}
}
//倒计时
function resetCode(){
	$.alert("验证码已发到您的手机")
	$('.getCode').hide();
	$('#J_second').html('5');
	$('#J_resetCode').show();
	var second = 5;
	var timer = null;
	timer = setInterval(function(){
		second -= 1;
		if(second >0 ){
			$('#J_second').html(second);
		}else{
			clearInterval(timer);
			$('.getCode').show();
			$('#J_resetCode').hide();
		}
	},1000);
}
	
//登录
	$scope.enter=function(){
		
		var  fun=checkPhone()

		var codeNum = $(".codeInput").val();
		
		var phoneCode = 666666;  //获取到的验证码
		
		if(codeNum == phoneCode&&fun==true){
		
			$.showPreloader();
			setTimeout(function () {
					$.hidePreloader();
					window.location.href='card.html';
			}, 1000);

		}
		else{
			$.alert("您的验证码输入有误")
	 }

  }

  	
 })


