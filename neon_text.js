/*------------------------------------------------------------*/
/*- textColor - Цвет текста ----------------------------------*/
/*- textSize - Размер текста ---------------------------------*/
/*- neonHighlight - цвет первой начала свечения --------------*/
/*- neonHighlightColor цвет неоновой подсветки ---------------*/
/*- neonHighlightHover - цвет неоновой подсветки при hover ---*/
/*- neonFontHover - цвет шрифта при hover --------------------*/
/*------------------------------------------------------------*/
jQuery.fn.neonText = function(options){
  var options = jQuery.extend({
		textColor: '#FFFFFF',
		textSize: '40pt', 
		neonHighlight: '#FFFFFF', 
		neonHighlightColor: '#FF00DE',
		neonHighlightHover: '#00FFFF', 
		neonFontHover: '#FFFFFF' 
	},options)
	return this.each(function() {
		jQuery(this).css('color', options.textColor)
			.css('font-size', options.textSize)
			.css('text-shadow','0 0 10px '+options.neonHighlight+',0 0 20px '+options.neonHighlight+',0 0 30px '+options.neonHighlight +',0 0 40px '+options.neonHighlightColor+',0 0 70px '+options.neonHighlightColor+',0 0 80px '+options.neonHighlightColor+',0 0 100px '+options.neonHighlightColor)
			.hover(
				function () {
					jQuery(this)
						.css('text-shadow','0 0 10px '+options.neonHighlight+',0 0 20px '+options.neonHighlight+',0 0 30px '+options.neonHighlight+',0 0 40px '+options.neonHighlightHover+',0 0 70px '+options.neonHighlightHover+',0 0 80px '+options.neonHighlightHover+',0 0 100px '+options.neonHighlightHover)
						.css('color', options.neonFontHover);
				},
				function () {
					jQuery(this)
						.css('color', options.textColor)
						.css('text-shadow','0 0 10px ' +options.neonHighlight + ',0 0 20px ' +options.neonHighlight + ',0 0 30px ' +options.neonHighlightColor + ',0 0 40px ' +options.neonHighlightColor +  ',0 0 70px ' +options.neonHighlightColor +  ',0 0 80px ' +options.neonHighlightColor + ',0 0 100px ' +options.neonHighlightColor)
				}
			);
	});
	
	$(document).ready(function(){
			/*Стандартны параметры*/
			$('.first_neon').neonText();
			/*С настройкой*/
			$('.second_neon').neonText({
				textColor:'white',
				textSize:'40pt',
				neonHighlight:'white',
				neonHighlightColor:'#008000',
				neonHighlightHover:'#FFFF00',
				neonFontHover:'white'
			});
			$('.third_neon').neonText({
				textColor:'white',
				textSize:'40pt',
				neonHighlight:'white',
				neonHighlightColor:'#00FFFF',
				neonHighlightHover:'#7FFF00',
				neonFontHover:'white'
			});
		});
		
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-46156385-1', 'cssscript.com');
  ga('send', 'pageview');
};
