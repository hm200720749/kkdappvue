/*
右滑动加载菜单
*/
window.onload=function(){
var obj_index=document.getElementById('main_content')
var isTouchMove, startTx, startTy;
obj_index.addEventListener( 'touchstart', function( e ){
  var touches = e.touches[0];
  startTx = touches.clientX;
  startTy = touches.clientY;
  isTouchMove = false;
}, false );
obj_index.addEventListener( 'touchmove', function( e ){
  isTouchMove = true;
  var touches = e.changedTouches[0],
    endTx = touches.clientX,
    endTy = touches.clientY,
    distanceX = startTx - endTx
    distanceY = startTy - endTy;
    if( Math.abs(distanceX) >= Math.abs(distanceY)&&Math.abs(distanceY)<=100&&distanceX<0 ){
      e.preventDefault();
      $('.leftpage').addClass('on');
    }
}, false );
obj_index.addEventListener( 'touchend', function( e ){
  if( !isTouchMove ){
    return;
  }
}, false );

var obj_left=document.getElementById('leftpage')
var isTouchMove_l, startTx_l, startTy_l;
obj_left.addEventListener( 'touchstart', function( e ){
  var touches = e.touches[0];
  startTx_l = touches.clientX;
  startTy_l = touches.clientY;
  isTouchMove_l = false;
}, false );
obj_left.addEventListener( 'touchmove', function( e ){
  isTouchMove_l = true;
  var touches = e.changedTouches[0],
    endTx = touches.clientX,
    endTy = touches.clientY,
    distanceX = startTx_l - endTx
    distanceY = startTy_l - endTy;
    e.preventDefault();
    if( Math.abs(distanceX) >= Math.abs(distanceY)&&Math.abs(distanceY)<=100&&distanceX>0 ){
      $('.leftpage').removeClass('on');
    }
}, false );
obj_left.addEventListener( 'touchend', function( e ){
  if( !isTouchMove_l ){
    return;
  }
}, false );
}