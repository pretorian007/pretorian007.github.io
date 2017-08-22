$( document ).ready(function() {
var menu = $(".menu");
var link = $(".m-nemu-link");
var close = $(".close-menu");
var clickClose = $(".menu-link")


		link.click(function(){
			menu.removeClass("menu").addClass("m-menu")
			close.css("display","block")
		})

		close.click(function(){
			menu.removeClass("m-menu ").addClass("menu")
			close.css("display","none")
	
		})

		clickClose.click(function(){
			menu.removeClass("m-menu ").addClass("menu")	
			close.css("display","none")	
		})
		//SEE MORE BLOCK
	$(".more ").hide();
	$('.see-more').click(function(){
	$(".more ").slideToggle();
	});


});









// window.onload = function(){
// 	var link = document.querySelector(".m-nemu-link")
// 	var menu = document.querySelector(".menu")
// 	var close = document.querySelector(".close-menu")
// 	var clickClose = document.querySelectorAll(".menu-link")

// 	link.onclick = function(){
// 		menu.classList.remove("menu")
// 		menu.classList.add("m-menu", "m-menu_active")
// 		close.style.display ="block";
// 		console.log ("opend")
// 	}
// 	close.onclick = function(){
// 		menu.classList.remove("m-menu", "m-menu_active");
// 		menu.classList.add("menu")
// 		close.style.display ="none";
// 		console.log ("closed")
// 	}


	clickClose.forEach(function (el) {
		el.onclick = function () {
			menu.classList.remove("m-menu_active")
		}
	});






// 	/*PRELOADER*/
//  // var $preloader = $('#p_prldr'),
//  //    $svg_anm = $preloader.find('.svg_anm');
//  //    $preloader.delay(1400).fadeOut('slow');
// }

