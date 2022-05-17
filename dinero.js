
//APARECER EL INPUT 
function desp_cont1(){
document.getElementById('contraseña_input1').style.display='block';
}
function desp_cont2(){
document.getElementById('contraseña_input2').style.display='block';
}
function desp_cont3(){
    document.getElementById('contraseña_input3').style.display='block';
}



//GUARDAR LAS CONTRASEÑAS 
var contMaliG=1111;
var MaliG;
var OK1 = function(){
        MaliG = parseFloat(document.getElementById("contraseña1").value);
        console.log(MaliG)
        if(MaliG==contMaliG){
          elegirAct();

        }else{
            alert('Contraseña incorrecta, inténtalo de nuevo')
        }
    }

var contGeraG=2222;
var GeraG;
var OK2 = function(){
        GeraG= parseFloat(document.getElementById("contraseña2").value);
        console.log(GeraG)
        if(GeraG==contGeraG){
            elegirAct();
        }else{
            alert('Contraseña incorrecta, inténtalo de nuevo')
        }
    }

var contMauiG=3333;
var MauiG;
var OK3 = function(){
        MauiG= parseFloat(document.getElementById("contraseña3").value);
        console.log(MauiG)
        if(MauiG==contMauiG){
            elegirAct();
        }
        else{
            alert('Contraseña incorrecta, inténtalo de nuevo')
        }
    }


//REEMPLAZAR
function elegirAct(){
var primerElemento = document.getElementById("contenedorIngreso");
primerElemento.innerHTML=`
<div class="container" id="contenedorOpciones">
<div id="box-options" class=" row row-cols-1 row-cols-xl-3 row-cols-sm-1">
  <div class="col mb-3">
    <div class="card bg-success bg-opacity-25">
      <div class="card-body text-center ">
        <a href="#"  class="btn btn-primary" onclick="crearCS(this)" id="consultarSaldo" >Consultar saldo</a>
      </div>
    </div>
  </div>

  <div class="col mb-3">
    <div class="card bg-success bg-opacity-25">
      <div class="card-body text-center">
        <a href="#" class="btn btn-primary" onclick="crearIM(this)" id="ingresarMonto" >Ingresar monto</a>
      </div>
    </div>
  </div>

  <div class="col mb-3">
    <div class="card bg-success bg-opacity-25">
      <div class="card-body text-center">
        <a href="#" class="btn btn-primary" onclick="crearRM(this)" id="retirarMonto">Retirar monto</a>
      </div>
    </div>
  </div>

</div>
</div>`}
// var arrMali=[200]
// var arrGera=[290]
// var arrMaui=[67]



function crearCS(){
  var display_saldo = document.createElement('div');  
  display_saldo.innerHTML = "Tu saldo es:"; 
  document.body.appendChild(display_saldo);  
}

