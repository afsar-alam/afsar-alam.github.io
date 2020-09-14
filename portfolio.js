     
     setTimeout(() => {

      document.querySelector('.loading-bar').style.display = 'none';
      document.querySelector('body').setAttribute('style','overflow: scroll;');
      
      }, 9000);



     $(document).ready(function(){
   $("nav a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
        window.location.hash = hash;
      });
    } 
  });
});


 $(document).ready(function(){
  $(".contant-btn").on('click', function(event) {
   if (this.hash !== "") {
     event.preventDefault();
     var hash = this.hash;
     $('html, body').animate({
       scrollTop: $(hash).offset().top
     }, 2000, function(){
       window.location.hash = hash;
     });
   } 
 });
});


$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $('#scrollup').fadeIn();
    }else{
      $('#scrollup').fadeOut();

    }

  });

  $('#scrollup').click(function(){
    $('html ,body').animate({scrollTop : 0},2000);
  });

  
});

