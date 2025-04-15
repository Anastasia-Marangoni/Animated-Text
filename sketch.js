//parametri

let numero_parti = 10;
let testo = "Anastasia Marangoni";

//asset

let font;

function preload() {
  font = loadFont("./OpenSans-Medium.ttf");
}

//codice

//ci sono due modi per fare una variabile "let nome = valore" oppure specificare prima "let nome" e poi in un secondo momento scrivere "nome = valore" senza specificare il let prima

let h_parte;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //con WEBGL si attivano le funzioni 3D
  textFont(font);
  textAlign(CENTER)
  h_parte = height / numero_parti;
  textSize(h_parte)
}

//ciò che è all'interno di draw si ripete a 60 fps al secondo

function draw() {
  background("midnightblue");

  orbitControl();
  // questa funzione consente di muovere la visualizzazione del 3D
translate(0, -height / 2)
  
  for (let i = 0; 1 < numero_parti; i++) {
   push()
    
    let z = map (cos (frameCount/10), -1, 1, -200, 200)
    translate(0,0,z)
    
    let y_parte = i * h_parte;
    let y_testo = y_parte + h_parte - textDescent();
    text(testo, 0, y_testo);
    
    pop()
  }
}
