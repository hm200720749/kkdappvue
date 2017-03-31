/**
 * Created by Administrator on 2016/11/22 0022.
 */
$(document).ready(function () {
    /*底部选择导航*/
    $(".bar-tab .tab-item").click(function(){
        $(".bar-tab .tab-item").removeClass("active");
        $(this).addClass("active");
    });


    var bwi = $(window).width();
    var bhe = $(window).height();
    /*分享*/
    $(".s_mask").width(bwi);
    $(".s_mask").height(bhe);
    $(".share_bd").hide();
    $(".share").click(function(){
        $(".share_bd").slideDown();
    });
    $(".cancel").click(function(){
        $(".share_bd").fadeOut();
    });

    /*消息列表*/
    $(".chosch").click(function(){
        $(this).toggleClass("chosch_ched");
        if($(".chosch").hasClass("chosch_ched")){
            $(this).children("input").attr("checked","checked");
        }else{
            $(this).children("input").removeAttr("checked","checked");
        }
    });

    $(".edit").click(function(){
        $(this).text("删除");
        $(".cac").removeClass("ds");
        $(".jtf").addClass("ds");
        $(".jtfs").removeClass("ds");
        $(".chosch").removeClass("chosch_ched");
        $(".chosch").children("input").removeAttr("checked");
    });

    $(".cac").click(function(){
        $(".edit").text("编辑");
        $(".cac").addClass("ds");
        $(".jtf").removeClass("ds");
        $(".jtfs").addClass("ds");
        $(".chosch").removeClass("chosch_ched");
        $(".chosch").children("input").removeAttr("checked");
    });

    /*分享清单*/
    $(".share_list").click(function(){
        $(".share_bd").slideDown();
    });
    /*清单切换*/
    $('.datapage .tab_link').click(function () {
        var index = $(this).index();
        $('.datapage .tab_link').each(function () { $(this).index() == index ? $(this).addClass('active') : $(this).removeClass('active'); })
        $('.datapage .tabs .tab').each(function () { $(this).index() == index ? $(this).addClass('tabon') : $(this).removeClass('tabon'); })
    });
    /*邀请好友*/
    $(".invite_btn").click(function(){
        $(".share_bd").slideDown();
    });


    /*地区下拉选择*/
    $(".select-area .select-value").each(function(){
        if( $(this).next("select").find("option:selected").length != 0 ){
            $(this).text( $(this).next("select").find("option:selected").text() );
        }
    });
    $(".select-area select").change(function(){
        var value = $(this).find("option:selected").text();
        $(this).parent(".select-area").find(".select-value").text(value);
    });

    /*帮助中心*/
    var hccl = $(".hc_cont");
    hccl.click(function(){
        if($(this).children(".hco").hasClass("hco_dis")){
            hccl.children(".hch").children("span").removeClass("rrt_on");
            hccl.children(".hch").siblings(".hco").removeClass("hco_dis");
        }
        else{
            hccl.children(".hch").children("span").removeClass("rrt_on");
            hccl.children(".hch").siblings(".hco").removeClass("hco_dis");
            $(this).children(".hch").children("span").addClass("rrt_on");
            $(this).children(".hch").siblings(".hco").addClass("hco_dis");
        }
    });

    /*领取红包*/
    $(".reciev_rb").hide();
    $(".reobwo").click(function(){
        $(".reciev_rb").slideDown();
    });
    $(".canreo_btn").click(function(){
        $(".reciev_rb").slideDown();
    });
    $(".dtmine").click(function(){
        $(".reciev_rb").hide();
        $(".reo_btn").addClass("reo_btnclk");
        $(".canreo_btn span").html("已领取");
    });


    /*申请提现*/
    /*输入提现密码*/
    $(".appli_mbox").hide();
    var ha_val = parseFloat($(".wd_money").text());
    $(".money_box").blur(function(){
        var mo_val = parseFloat($(".money_box").val());
        console.log(mo_val);
        if(mo_val > ha_val || isNaN(mo_val)){
            if(mo_val > ha_val){
                $(".mform_word").hide();
                $(".mforms_word").show();
            }
        }else{
            $(".mform_word").show();
            $(".mforms_word").hide();
        }
        if($(".money_box").val() == ""){
            $(".mform_word").show();
            $(".mforms_word").hide();
        }
    });


    $(".applic_ok").click(function(){
        var mo_val = parseFloat($(".money_box").val());
        if(mo_val > ha_val || isNaN(mo_val)){
            if(mo_val > ha_val){
                $(".mform_word").hide();
                $(".mforms_word").show();
            }
        }else{
            $(".mform_word").show();
            $(".mforms_word").hide();
            $(".appli_mbox").slideDown();
            $(".cash_num").html(mo_val);
            $("#cashnum").val(mo_val);
            $('#pwd-input').focus();
        }
    });
    $(".close_appli").click(function(){
        $(".appli_mbox").hide();
        $("#pwd-input").val("");
        $(".fake-box input").val("");
    });
    /*申请成功*/
});
