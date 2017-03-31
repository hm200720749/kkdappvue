 /* 
load img
*/ 
 function do_clk_inp(obj){
                $(obj).siblings('input').click();
            }   
function readURL(input) {
               if (input.files && input.files[0]) {

                   var reader = new FileReader();

                   reader.onload = function (e) {

                       $(input).siblings('img').attr('src', e.target.result);

                   }

                   reader.readAsDataURL(input.files[0]);

               }

            }
/* 
radio
*/ 
$(document).ready(function(){
  $('.pro_radio .radio_btn').click(function(){
    $(this).siblings('.radio_btn').removeClass('on');
    $(this).addClass('on');
    if($(this).data('radioVal')){
      var data_val=$(this).data('radioVal');
      $(this).siblings('input').val(data_val);
    }
  })
  // $('.project,.cont_expand .bor_bot').click(function(){
  //                     $(this).children('.pro_val').focus();
                      
  //                   })
  $('.menu_btn').click(function(){
                        $('#leftpage').addClass('on');
                    });
                    $('.clopage').click(function(){
                            $('#leftpage').removeClass('on');
                    })
})