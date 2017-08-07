	var link = document.querySelector(".m-nemu-link")
	var menu = document.querySelector(".m-menu")
	var close = document.querySelector(".close-menu")
	link.onclick = function(){
		menu.classList.add("m-menu_active")
		console.log ("opend")
	}
	close.onclick = function(){
		menu.classList.remove("m-menu_active")
		console.log ("hi")
	}