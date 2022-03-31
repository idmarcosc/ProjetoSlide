let contador = 1;

function verifica(){
  let cont = 0;
  if(document.getElementById('slide1').checked){
    cont = 1
  }if(document.getElementById('slide2').checked){
    cont = 2
  }if(document.getElementById('slide3').checked){
    cont = 3
  }if(document.getElementById('slide4').checked){
    cont = 4
  }if(document.getElementById('slide5').checked){
    cont = 5
  }
  return cont
}


setInterval(() => {
  contador = verifica() + 1;
  if( contador > 5) {
    contador = 1;
  }
  document.getElementById('slide' + contador).checked = true;

}, 4000);
