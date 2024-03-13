$(function(){
  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 100,
    fade: true,
    cssEase: 'linear'
  });
  
  $('.qa-company').mouseover(function(){
    console.log('マウスオーバーしました！');
   
  });
});
				