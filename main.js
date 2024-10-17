var titulo = document.querySelector(".titulo");
titulo.textContent = "Vitor nutrição";
var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < 5; i++){
  console.log(pacientes[i]);

  var tdPeso = pacientes[i].querySelector('.info-peso');
  var peso = tdPeso.textContent;

  var tdAltura = pacientes[i].querySelector('.info-altura');
  var altura = tdAltura.textContent;

  var tdIMC = pacientes[i].querySelector('.info-imc');

  var pesoEnValido = true;
  var alturaEnValida = true;

  if(peso <= 0 || peso >= 600){
    tdIMC.textContent = "Peso inválido ";
    pesoEnValido = false;
    pacientes[i].classList.add("dados-invalidos");
    
    
  }

  if(altura <= 0 || altura > 2.80){
    tdIMC.textContent = "Altura inválido ";
    alturaEnValida = false;
    pacientes[i].classList.add("dados-invalidos");
    
  }

  if (pesoEnValido && alturaEnValida){
    var imc = peso / (altura*altura);
    tdIMC.textContent = imc.toFixed(2);
  }
}

titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
  console.log("O titulo foi clicado");
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();
  
  var form = document.querySelector("#form-adiciona");
  
  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.peso.value;
  var gordura = form.gordura.value;
});
