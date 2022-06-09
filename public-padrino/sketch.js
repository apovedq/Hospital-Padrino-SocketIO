let pantallas = [];
let pantalla1;
let x = 28;
let y = 57;
let largo = 35;
let alto = 35;
let contador;

function preload() {
  pantallas[0] = loadImage("assets/principal.png")
  pantallas[1] = loadImage("assets/2.png")
  pantallas[2] = loadImage("assets/3.png")
  pantallas[3] = loadImage("assets/4.png")

  contador = 0;
}

function setup() {
  createCanvas(428, 926);
}

function draw() {
  background(220);
  image(pantallas[contador],0,0);
  fill(255);
  //rect(x, y, largo, alto);
}

function mousePressed() {

  if (mouseX > 35 && mouseX < 35 + 380 && mouseY > 260 && mouseY < 260 + 70) { 
    fill(255, 255, 255)
    circle(300, 300, 300);
    console.log("undido")
    contador = 1;
  }

  if (mouseX > 208 && mouseX < 208 + 40 && mouseY > 870 && mouseY < 870 + 40) { 
    fill(255, 255, 255)
    circle(300, 300, 300);
    console.log("undido")
    contador = 2;
  }

   if (mouseX > 30 && mouseX < 30 + 380 && mouseY > 160 && mouseY < 160 + 70) { 
    fill(255, 255, 255)
    circle(300, 300, 300);
    console.log("undido")
    contador = 3;
  }

  if (contador === 3 && mouseX > 28 && mouseX < 28 + 35 && mouseY > 57 && mouseY < 57 + 35) {
    console.log("undido");
    contador = 0;
  }

  if (contador === 1 && mouseX > 28 && mouseX < 28 + 35 && mouseY > 57 && mouseY < 57 + 35) {
    console.log("undido");
    contador = 0;
  }

  if (contador === 2 && mouseX > 28 && mouseX < 28 + 35 && mouseY > 57 && mouseY < 57 + 35) {
    console.log("undido");
    contador = 0;
  }

}