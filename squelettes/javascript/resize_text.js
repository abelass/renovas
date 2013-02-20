
<!-- Text resize -->
$(document).ready(function(){
  var section = new Array('#colonne_cq_5','#colonne_cq_6'); 
  section = section.join(',');

  /* récup taille fonte si mémorisée dans cookie */
  if($.cookie('taille_fonte_h3')) { 
	var taille_via_cookie = $.cookie("taille_fonte_h3") ;
    var taille_via_cookie = parseFloat(taille_via_cookie, 10);
	
    $('h3.cq_titre_3').css('font-size', taille_via_cookie);
  }

  if($.cookie('taille_fonte_col5')) {  
	var taille_via_cookie = $.cookie("taille_fonte_col5") ;
    var taille_via_cookie = parseFloat(taille_via_cookie, 10);
	
    $('#colonne_cq_5').css('font-size', taille_via_cookie);
  }

  if($.cookie('taille_fonte_col6')) {  
	var taille_via_cookie = $.cookie("taille_fonte_col6") ;
    var taille_via_cookie = parseFloat(taille_via_cookie, 10);
	
    $('#colonne_cq_6').css('font-size', taille_via_cookie);
  }


  // Increase Font Size
  $(".increaseFont").click(function(){
	  
    var currentFontSize = $('h3.cq_titre_3').css('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);
    var newFontSize = currentFontSizeNum*1.2;
    $('h3.cq_titre_3').css('font-size', newFontSize);
	$.cookie('taille_fonte_h3', newFontSize, { expires: 7, path: '/' });


    var currentFontSize = $('#colonne_cq_5').css('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);
    var newFontSize = currentFontSizeNum*1.2;
    $('#colonne_cq_5').css('font-size', newFontSize);
	$.cookie('taille_fonte_col5', newFontSize, { expires: 7, path: '/' });

	
    var currentFontSize = $('#colonne_cq_6').css('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);
    var newFontSize = currentFontSizeNum*1.2;
    $('#colonne_cq_6').css('font-size', newFontSize);
	$.cookie('taille_fonte_col6', newFontSize, { expires: 7, path: '/' });
	

    return false;
  });

  // Decrease Font Size
  $(".decreaseFont").click(function(){

    var currentFontSize = $('h3.cq_titre_3').css('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);
    var newFontSize = currentFontSizeNum*0.8;
    $('h3.cq_titre_3').css('font-size', newFontSize);
	$.cookie('taille_fonte_h3', newFontSize, { expires: 7, path: '/' });


    var currentFontSize = $('#colonne_cq_5').css('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);
    var newFontSize = currentFontSizeNum*0.8;
    $('#colonne_cq_5').css('font-size', newFontSize);
	$.cookie('taille_fonte_col5', newFontSize, { expires: 7, path: '/' });
	
	
    var currentFontSize = $('#colonne_cq_6').css('font-size');
    var currentFontSizeNum = parseFloat(currentFontSize, 10);
    var newFontSize = currentFontSizeNum*0.8;
    $('#colonne_cq_6').css('font-size', newFontSize);
	$.cookie('taille_fonte_col6', newFontSize, { expires: 7, path: '/' });

	
    return false;
  });


  // Reset Font Size
  var originalFontSize = $(section).css('font-size');
  $(".resetFont").click(function(){
    $('h3.cq_titre_3').css('font-size', '17px');
    $('#colonne_cq_5').css('font-size', '1em');
    $('#colonne_cq_6').css('font-size', '0.8em');

	$.cookie('taille_fonte_h3', originalFontSize, { expires: -1, path: '/' }); /*effacer le cookie */
	$.cookie('taille_fonte_col5', originalFontSize, { expires: -1, path: '/' }); /*effacer le cookie */
	$.cookie('taille_fonte_col6', originalFontSize, { expires: -1, path: '/' }); /*effacer le cookie */
  });  
  
});
<!-- #Text resize -->
