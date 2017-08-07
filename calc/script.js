
var d = document;
// var fullRadius = d.querySelector("#radFull");
var blockWidth = d.querySelector("#blockWidth");
var blockHeight = d.querySelector("#blockHeight");
var block = d.querySelector("#block");
var out = d.querySelector("#generated")
var gen = d.querySelector("#generate")
var radTopLeft = d.querySelector("#topLeft")
var radTopRight = d.querySelector("#topRight")
var radBotLeft = d.querySelector("#botLeft")
var radBotRight = d.querySelector("#botRight")
var clearArea = d.querySelector("#clearArea")
var block = d.querySelector("#block");
var cp = d.querySelector("#cp")
var inpColor = d.querySelector("#inpColor")
// var inpColorBtn = d.querySelector("#inpColorBtn")

var arr = [radTopLeft, radTopRight, radBotLeft, radBotRight]

//присвоение действий в функции
arr.oninput = singleRad;
// fullRadius.oninput = fulRad;
blockWidth.oninput = size;
blockHeight.oninput = size;

// radTopLeft.oninput = singleRad;
// radTopRight.oninput = singleRad;
// radBotLeft.oninput = singleRad;
// radBotRight.oninput = singleRad;


function fulRad(){
	block.style.borderRadius = this.value + "px"
}
function size(){
	// console.log (this.value)	
	block.style.height = blockHeight.value + "px"
	block.style.width = blockWidth.value + "px"	
}
//перебираем массив и присваиваем всем событие
for (var i = 0; i < arr.length; i++) {
	arr[i].oninput = singleRad;
}
	var pixTL = d.querySelector("#pixelsTL");
	var pixTR = d.querySelector("#pixelsTR");
	var pixBL = d.querySelector("#pixelsBL");
	var pixBR = d.querySelector("#pixelsBR");

function singleRad (){	
	block.style.borderTopLeftRadius = radTopLeft.value + "px" ;
	block.style.borderTopRightRadius = radTopRight.value + "px";
	block.style.borderBottomLeftRadius = radBotLeft.value + "px";
	block.style.borderBottomRightRadius = radBotRight.value + "px";
		pixTL.innerHTML = radTopLeft.value + "px;";
		pixTR.innerHTML = radTopRight.value + "px;";
		pixBL.innerHTML = radBotLeft.value  + "px;";
		pixBR.innerHTML = radBotRight.value  + "px;";
}


//вывод генерации
gen.onclick = function () {	
	
	// out.innerHTML = "-webkit-border-radius: " + fullRadius.value + "px;" + "\n";	

	out.innerHTML = out.type = ""
	out.innerHTML = "-webkit-border-radius: " 
	
	+ radTopLeft.value + "px; " 
	+ radTopRight.value + "px; " 
	+ radBotLeft.value + "px; "
	+ radBotRight.value + "px;" + "\n";

	out.innerHTML += "border-radius: " 
	+ radTopLeft.value + "px; " 
	+ radTopRight.value + "px; " 
	+ radBotLeft.value + "px; "
	+ radBotRight.value + "px;" + "\n";
	
	out.innerHTML += "height: " + blockHeight.value + "px;"+ "\n";
	out.innerHTML += "width: " + blockWidth.value + "px;"+ "\n";
	out.innerHTML += "background: " + cp.value + "\n";


	// out.innerHTML += "border-top-left-radius: " + radTopLeft.value + "px;" + "\n";
	// out.innerHTML += "border-top-right-radius: " + radTopRight.value + "px;" + "\n";
	// out.innerHTML += "border-bottom-left-radius: " + radBotLeft.value + "px;" + "\n";
	// out.innerHTML += "border-bottom-right-radius: " + radBotRight.value + "px;" + "\n";	
	

}

clearArea.onclick = function (){
	// block.style.borderRadius = fullRadius.value = "0"
	
clearInnerPx = [pixTL, pixTR, pixBL, pixBR]
	clearInnerPx.forEach(function (el) {
		el.innerHTML = "0px;";
		});

clearBorderStyle = [
	"borderTopLeftRadius",
 	"borderTopRightRadius",
 	"borderBottomLeftRadius",
 	"borderBottomRightRadius" 
 ]
 clearBorderStyle.forEach(function(el){
 	block.style[el] = "0"
 });

clearRadValue = [radTopLeft, radTopRight, radBotLeft, radBotRight]
clearRadValue.forEach(function(el){
	el.value = "0"
})
	block.style.background = "#7daf1f"
	cp.value = "#7daf1f"
	block.style.height = blockHeight.value = "250"
	block.style.width = blockWidth.value = "250"	
	out.innerHTML = out.type = ""
}

cp.onchange = function(){	
	block.style.backgroundColor = cp.value;
}

// inpColorBtn.onclick = function(){
// 	block.style.background = inpColor.value;
// 	cp.value = inpColor.value;
// }

//get random color
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}
var random = document.querySelector("#btnRand")
random.onclick = function(){
   block.style.background = getRandomColor();
    console.log (getRandomColor())
  		cp.value = block.style.background = getRandomColor();
  			// inpColor.value = block.style.background=getRandomColor() ;
}
//
window.onload = function(){


}