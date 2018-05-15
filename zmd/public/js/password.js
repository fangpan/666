
/*动态生成*/
var box=document.getElementsByClassName("box")[0];
function createDIV(num){
 for(var i=0;i<num;i++){
  var pawDiv=document.createElement("div");
  pawDiv.className="pawDiv";
  box.appendChild(pawDiv);
  var paw=document.createElement("input");
  paw.type="text";
  paw.className="paw";
  paw.maxLength="1";

  pawDiv.appendChild(paw);
 }
}
createDIV(6);

var pawDiv=document.getElementsByClassName("pawDiv");
var paw=document.getElementsByClassName("paw");
var pawDivCount=pawDiv.length;
/*设置第一个输入框默认选中*/


paw[0].focus();

/*获取输入密码*/
var getPassword=function(){
 var n="";
 for(var i=0;i<pawDivCount;i++){
  n+=paw[i].value;
 }
 return n;
};





