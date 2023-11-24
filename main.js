//Criar uma referência para tela
canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");

//Dê altura e largura específicas para a imagem do carro

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

//Defina a posição inicial para uma imagem de carro.
largura = 75;
altura = 100;
carx = 5;
cary = 255;
function add() {
	fundoTag = new Image();
	fundoTag.onload = updatefundo;
	fundoTag.src = backgroundImage;

	carTag = new Image()
	carTag.onload = updatecar;
	carTag.src = greencarImage;
	//carregar carro e imagens de fundo na tela.
}

function updatefundo() {
ctx.drawImage(fundoTag,0,0,canvas.width, canvas.height);

}

function updatecar() {
	ctx.drawImage(carTag,carx,cary,largura,altura);
	
	//Defina a função ‘uploadGreenCar’.


}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if (keyPressed == '38') {
		up();
		console.log("up");
	}

	if (keyPressed == '40') {
		down();
		console.log("down");
	}

	if (keyPressed == '37') {
		left();
		console.log("left");
	}

	if (keyPressed == '39') {
		right();
		console.log("right");
	}


}

function up() {
	cary = cary - 10;
	updatefundo();
	updatecar();
	
	//Definir função para mover o carro para cima
}

function down() {
	cary = cary + 10;
	updatefundo();
	updatecar();
}


function left() {
	carx = carx - 10
	updatefundo();
	updatecar();
}


function right() {
	carx = carx + 10
	updatefundo();
	updatecar();
}
