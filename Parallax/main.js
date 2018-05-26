window.onscroll = function(){
  var pgscroll=window.pageYOffset;
  document.getElementsByClassName('logo')[0].style.transform = 'translate(0px, '+ pgscroll/2+'%)';
  document.getElementsByClassName('black-bird')[0].style.transform = 'translate(0px, -'+ pgscroll/40+'%)';
  var gallery = document.querySelector('.gallery')
  var img_left = document.querySelectorAll('.slide-right')
  var img_right = document.querySelectorAll('.slide-left')
  var img_center =  document.querySelectorAll('.slide-top')
  var promo_img = document.getElementsByClassName('promo')

  if ( gallery.getBoundingClientRect().top <= 600 ){
      img_left.forEach(function(element){
        element.style.transform = 'translate(0px)';
        element.style.transition = 'all 1s ease-in-out';
      })

      img_right.forEach(function(element){
        element.style.transform = 'translate(0px)';
        element.style.transition = 'all 1s ease-in-out';
      })

      img_center.forEach(function(element){
        element.style.transform = 'translate(0px)';
        element.style.transition = 'all 1s ease-in-out';
      })

      if(pgscroll > 600){
        console.log('hello')
        promo_img[0].style.opacity = pgscroll/2;
      }



  }
}
