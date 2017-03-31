/**
 * Created by Administrator on 2017/3/29 0029.
 */
function touchimg(options){
    var j=0;
    var timer;
    var loopTime=options.loopTime;
    var elem=document.getElementById(options.elem);
    var temp_img=elem.innerHTML;
    //创建遮罩
    var wrap=document.createElement("div");
    wrap.style.overflow="hidden";
    wrap.style.position="relative";
    wrap.innerHTML=temp_img;
    elem.innerHTML="";
    elem.appendChild(wrap);
    var elem_ig_ul=elem.getElementsByClassName("img-ground")[0];
    //var node_li=elem_ig_ul.getElementsByTagName("li")[0].cloneNode(true);
    //elem_ig_ul.appendChild(node_li);
    //console.log(elem_ig_ul);
    var elem_ig_li=elem_ig_ul.getElementsByTagName("li");
    if(elem=="undefined"||elem_ig_li=="undefined") return;
    var elem_width=elem.clientWidth;
    //console.log(elem_width)
    var img_width=elem_ig_li[0].getElementsByTagName('a')[0].getElementsByTagName("img")[0].clientWidth;
    var img_length=elem_ig_li.length;
    //ul 样式设置
    elem_ig_ul.style.width=elem_width*img_length+"px";
    elem_ig_ul.style.overflow="hidden";
    elem_ig_ul.style.position="relative";
    elem_ig_ul.style.transform="translate(0,0)";
    elem_ig_ul.style.transition="all 0.5s";
    //li 样式设置;
    for(var i=0;i<img_length;i++){
        elem_ig_li[i].style.float="left";
        elem_ig_li[i].style.width=elem_width+"px";
        elem_ig_li[i].getElementsByTagName('a')[0].getElementsByTagName("img")[0].style.width=elem_width+"px";
    }
    //滚动函数
    function scroll_ul(fx){
        if(fx=="left"){
            if(j==0){
                j=img_length-1;
            }else{
                j--;
            }
        }else if(fx=="right"){
            if(j==img_length-1){
                j=0;
            }else{
                j++;
            }
        }
        elem_ig_ul.style.transform="translate(-"+elem_width*j+"px,0)";
    }
    function play(){
        timer=setInterval(function(){scroll_ul("right")},loopTime);
    }
    function stop(){
        clearInterval(timer);
    }
    elem.onmouseover=stop;
    elem.onmouseout=play;
    play();
    //touch
    var startX,startY,j_change=0;
    elem.addEventListener("touchstart",function(e){
        elem_ig_ul.style.transition="all 0s";
        var touch= e.touches[0];
        startX=touch.clientX;
        startY=touch.clientY;
        stop();
        e.preventDefault();
    },false);
    var maxscro=-elem_width*(img_length-1);
    elem.addEventListener("touchmove",function(e){
        var touch= e.changedTouches[0],
            endX=touch.clientX,
            endY=touch.clientY,
            distanceX=endX-startX,
            distanceY=endY-startY;

            if(Math.abs(distanceX)>=Math.abs(distanceY)){
                distanceX>0?j_change=-1:j_change=1;
                var trans_x=-j*elem_width+distanceX;
                if(trans_x>0||trans_x<maxscro){
                    var scale_val=Math.abs(distanceX)*0.0015+1;
                    var trans_label=1-Math.abs(distanceX)*0.0013;
                    //trans_x>0?"":scale_val=1.2;
                    var origin_tran="5% center";
                    var temp_x=0;
                    trans_x<maxscro?origin_tran="95% center":"";
                    trans_x>0?temp_x=0:"";
                    trans_x<maxscro?temp_x=maxscro:"";
                    elem_ig_ul.style.transform="scale("+scale_val+") translate("+temp_x*trans_label+"px,0)";
                    elem_ig_ul.style.transformOrigin=origin_tran;
                }else if(trans_x<0&&trans_x>maxscro){
                    elem_ig_ul.style.transform="translate("+trans_x+"px,0)";
                }
                e.preventDefault();
            }

    },false);
    elem.addEventListener("touchend",function(e){
        elem_ig_ul.style.transition="all 0.5s";
            if((j_change==-1&&j!=0)||(j_change==1&&j!=img_length-1)){
                j+=j_change;
            };
            elem_ig_ul.style.transform="translate(-"+elem_width*j+"px,0)";

            play();
    },false);

}