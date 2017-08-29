$( document ).ready(function() {
var menu = $(".menu"),
	link = $(".m-nemu-link"),
	close = $(".close-menu"),
	clickClose = $(".menu-link")


		link.click(function(){
			menu.removeClass("menu").addClass("m-menu");
			close.css("display","block");
		})

		close.click(function(){
			menu.removeClass("m-menu ").addClass("menu");
			close.css("display","none");
	
		})

		clickClose.click(function(){
			menu.removeClass("m-menu ").addClass("menu");	
			close.css("display","none")	;
		})
		//SEE MORE BLOCK
	$(".more ").hide();
	$('.see-more').click(function(){
	$(".more ").slideToggle();
	});

$('skills-Content')
});


// 	/*PRELOADER*/
//  // var $preloader = $('#p_prldr'),
//  //    $svg_anm = $preloader.find('.svg_anm');
//  //    $preloader.delay(1400).fadeOut('slow');
// }

