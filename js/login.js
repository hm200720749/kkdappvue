/**
 * Created by Administrator on 2016/12/16 0016.
 */
$(document).ready(function(){
    $(".agreeok").click(function(){
        var che = $(this);
        var nexchek = che.find("input[type='checkbox']");
        var checkeds = nexchek.attr("checked");
        if(checkeds == undefined){
            nexchek.trigger('checkon');
            che.removeClass("agreement");
            che.addClass("agreement"+"_checked");
            nexchek.attr("checked","checked");
        }else{
            nexchek.trigger('checkoff');
            che.removeClass("agreement"+"_checked");
            che.addClass("agreement");
            nexchek.removeAttr("checked");
        }
    });
});

/*输入验证*/
function checksave(){
    var phonepat = /^1[34578]\d{9}$/;
    var logphone = $.trim($("#loginform input[name='logphone']").val());
    if(isNaN(logphone)|| logphone==''|| logphone.length!=11 || !phonepat.text(logphone)){
        alert("请输入正确手机号");
        return false;
    }
}
function checksaves(){
    var logcode = $.trim($("#loginform input[name='logcode']").val());
    if(logcode == ""){
        alert("请输入正确验证码");
        return false;
    }
}


