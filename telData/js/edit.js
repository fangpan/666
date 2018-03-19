
 var json=[  
  	        {
  	        	"id":"a1",
  	        	"con":"备注信息备注信息备注信息备注信息",
  	           "name":"张一"
  	        },
  	        {
  	        	"id":"a2",
  	        	"con":"备注信息备注信息备注信息备注信息",
  	          "name":"张二"
  	        },
            {
              "id":"a2",
              "con":"备注信息备注信息备注信息备注信息",
              "name":"张三"
            },
            {
              "id":"a2",
              "con":"备注信息备注信息备注信息备注信息",
              "name":"张四"
            },
            {
              "id":"a2",
              "con":"备注信息备注信息备注信息备注信息",
              "name":"张五"
            },
             {
              "id":"a2",
              "con":"备注信息备注信息备注信息备注信息",
              "name":"张六"
            }
  	      
	   ]

 for(var i=0;i<json.length;i++){

    var item = json[i]

      var H = 

              ' <tr class="forTR">'
              +'<td width="70%">'+item.con+'</td>'
              +'<td class="editInput"><input type="text" onblur="patten(this)"></td>'
              +'<td width="10%">'+item.name+'</td>'
              +'<td width="10%">'
              +'<span class="edit" onclick="edit(this)">编辑</span>'
              +'<span class="save" onclick="save(this)">保存</span>&nbsp;&nbsp;'
              +'<span class="del" onclick="del(this)">删除</span>'
              +'</td>'
              +'</tr>'

  $(".beizhu #Searchresult").append(H)

 }


$(function(){

var num_entries = $("#Searchresult tr").length; 

  var showCount = 5;
  
  var initPagination = function() {
    
    $("#Pagination").pagination(num_entries, {
      num_edge_entries: '', 
      num_display_entries: 3, 
      callback: pageselectCallback,
      items_per_page:showCount 
    });
   }();  
  function pageselectCallback(page_index, jq){
    var max_elem = Math.min((page_index+1) *showCount, num_entries);    
    $("#List").html("");   
    for(var i=page_index*showCount;i<max_elem;i++){
      var new_content = $("#Searchresult tr:eq("+i+")").clone();
      $("#List").append(new_content); 
    }
    return false;
  }

})



//添加备注信息 

 $(".addbtn").click(function(){

   var item = new Array();

   item.id = "a3";
   item.name = "张大爷";
   item.con=$(this).prev(".addVal").val();

   var regu = "^[ ]+$";
   var re = new RegExp(regu);
   var bull=  re.test(item.con);
 
if(item.con == "" || bull==true){

  alert("请添加备注信息")
  $(this).prev(".addVal").focus().val("");
}

 else{

   json.push(item);

    $(this).prev(".addVal").val("");

      var H=   ' <tr class="forTR">'
                +'<td width="70%">'+item.con+'</td>'
                +'<td class="editInput"><input type="text" onblur="patten(this)"></td>'
                +'<td width="10%">'+item.name+'</td>'
                +'<td width="10%">'
                +'<span class="edit" onclick="edit(this)">编辑</span>'
                +'<span class="save" onclick="save(this)">保存</span>&nbsp;&nbsp;'
                +'<span class="del" onclick="del(this)">删除</span>'
                +'</td>'
	            +'</tr>'

    $(".beizhu tbody").prepend(H)
   }

 })


//编辑
function edit(obj){

	var ths = $(obj)
  var VAL=ths.parents().siblings("td:first-child").text();

	ths.hide();
  ths.parents("tr").find("td:first-child").hide();
  ths.parents("tr").find("td:first-child").next().show();
	ths.parents("tr").find("td:first-child").next().find("input").val(VAL).focus();
	ths.next(".save").show();
  
}

//保存

function save(obj){

 var ths = $(obj)
 var inputData =ths.parents("tr").find("td:first-child").next().find("input").val();
 ths.parents("tr").find("td:first-child").html(inputData)
 var data=ths.parents("tr").find("td:first-child").html()
 json.push(data);

 ths.hide();
 ths.prev(".edit").show();
 ths.parents("tr").find("td:first-child").show();
 ths.parents("tr").find("td:first-child").next().hide();

}

//删除

function del(obj){
   var ths = $(obj)
   ths.parents(".forTR").remove();
}
 



