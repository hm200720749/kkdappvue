/*
    圆环进度条
    对象
    背景色
    圆环色
    字体色
    内径
    环宽
*/

function per_cirque(obj,bgc,circ,fc,bj,hk){
    $.each(obj, function(index, val) {
    
    if($(this).html()!=''){
       
    }else{
        
    var color_b='background-color:'+bgc;
    var banj=parseFloat(bj)*2;
    var point=parseInt($(this).siblings('input').val());
 
    var cir_html='<div class="per_cirque_wrapper">'+
                            '<div class="sec_wrapper right">'+
                                '<div class="cirque_main rightcirque"></div>'+
                            '</div>'+
                            '<div class="sec_wrapper left">'+
                                '<div class="cirque_main leftcirque"></div>'+
                            '</div>'+
                            '<div class="textper">'+point+'%</div>'+
                     '</div>';
        $(this).append(cir_html);
        $(this).height(banj);
        $(this).width(banj);
        $(this).find('.cirque_main').width(banj);
        $(this).find('.cirque_main').height(banj);
        $(this).find('.cirque_main').css({'border':hk+'px solid '+bgc});
        $(this).find('.cirque_main').css({'border':hk+'px solid '+bgc});
        $(this).find('.cirque_main.rightcirque').css({'border-top':hk+'px solid '+circ,'border-right':hk+'px solid '+circ});
        $(this).find('.cirque_main.leftcirque').css({'border-bottom':hk+'px solid '+circ,'border-left':hk+'px solid '+circ});
        $(this).find('.textper').css({'color':fc});
        var obj_l=$(this).find('.cirque_main.leftcirque');
        var obj_r=$(this).find('.cirque_main.rightcirque');
        
        var t = setTimeout(function(){demo(point,obj_l,obj_r)},500);
    } 
});
}
function demo(point,l,r){
    point=point/100*180;
        if(point>90){
          point-=90;
             l.css({'-webkit-transform':'rotate(-315deg)','-moz-transform':'rotate(-315deg)','-ms-transform':'rotate(-315deg)','-o-transform':'rotate(-315deg)','transform':'rotate(-315deg)'});
            point=-135-2*point;
             r.css({'-webkit-transform':'rotate('+point+'deg)','-moz-transform':'rotate('+point+'deg)','-o-transform':'rotate('+point+'deg)','-ms-transform':'rotate('+point+'deg)','transform':'rotate('+point+'deg)'});
            
        }else{
          point=-135-2*point;
           l.css({'-webkit-transform':'rotate('+point+'deg)','-moz-transform':'rotate('+point+'deg)','-o-transform':'rotate('+point+'deg)','-ms-transform':'rotate('+point+'deg)','transform':'rotate('+point+'deg)'});
        }
}