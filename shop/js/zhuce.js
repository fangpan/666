

function focus_phone(){
 
 var resultphones=document.getElementById("result_phone");

 var userphones=document.getElementsByClassName("phone")[0];


 result_phone.innerHTML="请输入手机号码";
   result_phone.style.color="red";
                 result_phone.style.fontSize="13px";

}

function blur_phone(){


var resultphones=document.getElementById("result_phone");

var values=document.getElementsByClassName("phone")[0].value;

var reg= /^1{1}[3578]{1}[0-9]{9}$/

var num=reg.exec(values)
 
if (values=="") {result_phone.innerHTML="手机号不能为空";
        result_phone.style.color="red";
         result_phone.style.fontSize="13px";
         return false;
} 

else{if(num!=values){result_phone.innerHTML="您输入的手机号码有误"
          result_phone.style.color="red";
           result_phone.style.fontSize="13px";
           return false;
}
    else{ result_phone.innerHTML="<img src='images/yes00.png'>";
           return true;
}
    };

}


function focus_password(){
    var resultpasswords=document.getElementById("result_password")

     result_password.style.color="red";
    result_password.innerHTML="请输入密码";
    result_password.style.fontSize="13px";
    }


function blur_password(){
    var resultpasswords=document.getElementById("result_password")
    
     var values=document.getElementsByClassName("password")[0].value
                         
     var reg=/^(?!^\d*$)(?!^[a-zA-Z]*$)(?!^[-_*+@]*$)[-\d\w*+@]{6,16}$/

    if(values==""){result_password.innerHTML="<img src='images/Error00.png'> 长度为6-16个字符"
                   result_password.style.color="red";
                 result_password.style.fontSize="13px";
                 document.getElementsByClassName("password")[0].style.borderColor="red";
                 return false;
    }
    else{   if(!reg.test(values)){result_password.innerHTML="<img src='images/Error00.png'> 长度为6-16个字符"
                  result_password.style.color="red";
                 result_password.style.fontSize="13px";
                 document.getElementsByClassName("password")[0].style.borderColor="red";
                  return false;

    }
    else{ result_password.innerHTML="<img src='images/yes00.png'>" ;
           return true;
}       
        }                                       
    }
  function focus_password2(){
       var resultpasswords2=document.getElementById("result_password2")
     result_password2.style.color="red";
    result_password2.innerHTML="请再次输入密码";
    result_password2.style.fontSize="13px";
  }

function blur_password2(){
    var resultpasswords2=document.getElementById("result_password2")
     var values=document.getElementsByClassName("password")[0].value
     var values2=document.getElementsByClassName("password2")[0].value
                                  
    if(values2==""){result_password2.innerHTML="请再次输入密码"
                   result_password2.style.color="red";
                 result_password2.style.fontSize="13px";
                 document.getElementsByClassName("password2")[0].style.borderColor="red";
                 return false;

    }
  if(values2!==values)
       {result_password2.innerHTML="两次密码不一致";
        result_password2.style.fontSize="13px";
       result_password2.style.color="red";
       return false;

}
else{
    result_password2.innerHTML="<img src='images/yes00.png'>" 
     return true;
}      
        }                                       
    
    function checkForm(){
     
     var flag_phone=blur_phone();
     var flag_password=blur_password();
     var flag_password2=blur_password2();
   
     if (flag_phone==true&&flag_password==true&&flag_password2==true) 
         { return true; }
    else {return false;  }   
    
    }

