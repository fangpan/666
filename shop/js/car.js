

$(function(){

    // 获取商品数
    setTotal();
    add();
    reduce();
    prices();
    prices2();
    prices3();
    priceZ();
    // 计算商品单价金额
    function prices(){
        var price1 = parseInt($("#total1").siblings(".tb1_td4").text());
        var num1 = $("#total1").prev().children("input[name=num]").val();
        totalprice1 = price1 * num1;
        $("#total1").text(totalprice1);
    }
    function prices2(){
        var price2 = parseInt($("#total2").siblings(".tb1_td4").text());
        var num2 = $("#total2").prev().children("input[name=num]").val();
        totalprice2 = price2 * num2;
        $("#total2").text(totalprice2);
    }
    function prices3(){
        var price3 = parseInt($("#total3").siblings(".tb1_td4").text());
        var num3 = $("#total3").prev().children("input[name=num]").val();
        totalprice3 = price3 * num3;
        $("#total3").text(totalprice3);
    }
    /* function prices4(){
        var price4 = parseInt($("#total4").siblings(".tb1_td4").text());
        var num4 = $("#total4").prev().children("input[name=num]").val();
        totalprice4 = price4 * num4;
        $("#total4").text(totalprice4);
    }*/
    
    // 计算总价
    function priceZ(){
        var sum=0;
        $.each($(".td6"),function(index,item){
            sum+= parseInt($.trim($(item).text()));
        });
        $("#zong").text(sum);
        /*var totalprice1 =parseInt($("#total1").text());
        var totalprice2 =parseInt($("#total2").text());
        var totalpriceZ= totalprice1 + totalprice2;
        $("#zong").text(totalpriceZ);*/
    }
    //商品数量增减
    function reduce(){
        var inputReduce =$("input[name=reduce]");
        inputReduce.each(function(i){
            $(this).click(function(){
                var num = $(this).next().val();
                num--;
                if(num==1){
                    $(this).attr("disabled",true);
                }
                if(num>1){
                    $(this).attr("disabled",false);
                }
                $(this).next().val(num);
                setTotal();
                prices();
                prices2();
                prices3();
                priceZ();
            })
        });
    }
    function add(){
        var inputAdd = $("input[name=add]");
        inputAdd.each(function(i){
            $(this).click(function(){
            var num = $(this).prev().val();
            num++;
            if(num>1){
                $(this).siblings("input[name=reduce]").attr("disabled",false);
            }
            $(this).prev().val(num);
            setTotal();
            prices();
            prices2();
            prices3();
            priceZ();
        })
        });

    }
    // 全选功能
    $(".allselect").click(function(){
        if(this.checked){
            $(".gwc_tb2 input[type=checkbox],.allselect").attr("checked", true);
        }else{
            $(".gwc_tb2 input[type=checkbox],.allselect").attr("checked", false);
        }

    })
    //计算商品数量
    function setTotal(){
        var sum = 0;
        $.each($("input[name='num']"),function(){
            sum += parseInt(this.value);
            $("#shuliang").text(sum);
        });
    }

    
    
    // 删除功能
    $(".td7>a").click(function(){
        $(this).parents("table").remove();
        priceZ();
    })
})


  $(function(){

    $(".span").hover(
        function(){$(this).children(".add").show().siblings("span").addClass("change") },

        function(){$(this).children(".add").hide().siblings("span").removeClass("change")})

})

