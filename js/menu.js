window.onload = function(){
	var link = document.querySelector(".m-nemu-link")
	var menu = document.querySelector(".m-menu")
	var close = document.querySelector(".close-menu")
	var clickClose = document.querySelectorAll(".menu-link")

	link.onclick = function(){
		menu.classList.add("m-menu_active")
		console.log ("opend")
	}
	close.onclick = function(){
		menu.classList.remove("m-menu_active")
		console.log ("closed")
	}


	clickClose.forEach(function (el) {
		el.onclick = function () {
			menu.classList.remove("m-menu_active")
		}
	});
	/*see more section*/
	$(".more ").hide();
	$('.see-more').click(function(){
	$(".more ").slideToggle();
	});

}
