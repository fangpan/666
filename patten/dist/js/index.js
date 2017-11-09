
var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
  	
 //page1 模拟数据
  	
 var List1 = 
    
    [
     {
         "cardName" : "420114654567655443", 
         "number" : 
         [
            { "roleName" : "18812345666", },
            { "roleName" : "18677777777", },
            { "roleName" : "18812345678@ADSL", },
         ]
     },
	   {
         "cardName" : "42011465456765055X", 
         "number" : 
         [
            { "roleName" : "18812345777", }, 
            { "roleName" : "18812344678@ADSL", }
           
         ]
     },
     {
         "cardName" : "42011465456763256x", 
         "number" : 
         [
            { "roleName" : "18812345888", },
            { "roleName" : "18677777888", },
            { "roleName" : "18812344678@ADSL", }
         ]
     },
     {
         "cardName" : "420114654567632568", 
         "number" : 
         [
            { "roleName" : "18812345668", },
            { "roleName" : "18677777877", }
         ]
     }

    ];
  
 $scope.List1 = List1 ;

 

//page3 模拟数据

var  live =
   [
        {
         "rolebum" : "18812345671", 
         "roleName" : "已激活", 
        },
        {
         "rolebum" : "18812345672", 
         "roleName" : "未激活", 
        },
        {
          "rolebum" : "18812344678@ADSL", 
         "roleName" : "未激活", 
        },
        {
          "rolebum" : "18812344678@ADSL", 
         "roleName" : "已激活", 
        },
        {
          "rolebum" : "18812345674", 
         "roleName" : "未激活", 
        },
        {
          "rolebum" : "18812344678@ADSL", 
         "roleName" : "未激活", 
        },
        {
          "rolebum" : "18812345675", 
         "roleName" : "已激活", 
        },
        {
          "rolebum" : "18812344678@ADSL", 
         "roleName" : "未激活", 
        },
        {
          "rolebum" : "18812345677", 
         "roleName" : "已激活", 
        }
    ]
  	
   $scope.live =  live;

 
//index

  $scope.enterPage1 =function(){
    //表单验证
    var phone = angular.element("#inputName").val();
    var pattern1 =  /^1{1}[3578]{1}[0-9]{9}$/;
    var pattern2 =  /^[\u4e00-\u9fa5]{2,20}$/;
   
    if(phone == '') {
        $.alert('请输入您的帐号');
    }
   else if(!pattern1.test(phone)&&!pattern2.test(phone)){
        $.alert('请输入正确的帐号'); 
    }
   else{  
       $.showPreloader(); 
        setTimeout(function () {
            $.hidePreloader();
            window.location.href='page-1.html';
        }, 1000);   
   }
}
  $scope.enterPage0_3 =function(){
    //表单验证
    var phone = angular.element("#inputName").val();
    var pattern1 =  /^1{1}[3578]{1}[0-9]{9}$/;
    var pattern2 =  /^[\u4e00-\u9fa5]{2,20}$/;
   
    if(phone == '') {
        $.alert('请输入您的帐号');
    }
   else if(!pattern1.test(phone)&&!pattern2.test(phone)){
        $.alert('请输入正确的帐号'); 
    }
   else{  
       $.showPreloader(); 
        setTimeout(function () {
            $.hidePreloader();
            window.location.href='page-3.html';
        }, 1000);   
   }
}




//page 1
  
  $scope.enterPage2 =function(){
       
  if(angular.element("input[type=radio]:checked").length>0)

      {
         $.showPreloader(); 
         setTimeout(function () {
            $.hidePreloader();
            window.location.href='page-2.html';
        }, 1000);  
     }
    else{
        $.alert("请选择帐号")
    }
 }


//page 2
  
  $scope.enterPage3 =function(){
      $.showPreloader(); 
         setTimeout(function () {
            $.hidePreloader();
            window.location.href='page-3.html';
        }, 1000);  
  
   }

$scope.chose=function(){


$("[name='my-radio']:checked").each(function() {

   var v = $(this).siblings(".item-inner").find("span").html();

     $.alert(v)
  })

}




})
  

