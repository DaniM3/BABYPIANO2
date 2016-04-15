// JavaScript Document
$(document).ready(funtion(e){
$('#Principal').height($('#page').height());//Calcular el alto de la pantalla del dispositivo
document.addEventListener("deviceready",function(){
	//Precargar el sonido
	audio=window.plugins.lowLatencyAudio;
	audio.preloadFX('do','audio/DO.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('re','audio/RE.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('mi','audio/MI.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('fa','audio/FA.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('sol','audio/SOL.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('la','audio/LA.mp3',function(){},function(e){alert('Error '+e);});
	audio.preloadFX('si','audio/SI.mp3',function(){},function(e){alert('Error '+e);});
	//reproducir las notas
	$('.nota').bind('touchstar', function(){$(this).addClass('tocada');audio.play($(this).attr('id'));});
	$('.nota').bind('touchstar', function(){$(this).removeClass('tocada');});
},false);//deviceready
});//ready