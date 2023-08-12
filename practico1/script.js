// establecemos las operaciones a utilizar
function suma(a,b){
  return a+b;
}
function resta(a,b){
  return a-b;
}
function multiplicacion(a,b){
  return a*b;
}
function division(a,b){
  // verificamos que sea posible la division
  if (b==0){
    alert("NO SE PUEDE REALIZAR DIVISON POR 0");
  } else{
    return a/b;
  }
}
// definimos la funcion principal para realizar el calculo
function calcular(){
  // obtenemos los valores ingresados por el usuarios y los transformamos a float
  let num1=parseFloat (document.getElementById("operando1").value);
  let num2=parseFloat (document.getElementById("operando2").value);
  let signo= document.getElementById("operacion").value;  
  // verificamos que los valores ingresados sean numeros
  if (isNaN(num1)||isNaN(num2)){
    alert("ingrese un valor numerico");
  }else{
    // definimos cada operacion segun el signo ingresado
    switch (signo) {
      case "+":
        // verificamos que el numero no sea demasiado largo para mostrarlo en la calculadora
        if(suma(num1,num2)>999999999999999||suma(num1,num2)<-999999999999999){
          alert("resultado muy grande o pequeño para ser mostrado")
        }else{
          document.getElementById("resultado").innerHTML = suma(num1,num2);
          document.getElementById("resultado").style.fontSize= "43px";
        }
        break;
      case "-":
        if(suma(num1,num2)>999999999999999||resta(num1,num2)<-999999999999999){
          alert("resultado muy grande o pequeño para ser mostrado")
        }else{
          document.getElementById("resultado").innerHTML = resta(num1,num2);
          document.getElementById("resultado").style.fontSize= "43px";
        }
        break;
      case "*":
        if(suma(num1,num2)>999999999999999||multiplicacion(num1,num2)<-999999999999999){
          alert("resultado muy grande o pequeño para ser mostrado")
        }else{
          document.getElementById("resultado").innerHTML = multiplicacion(num1,num2);
          document.getElementById("resultado").style.fontSize= "43px";
        }
        break;
      case "/":
        if(suma(num1,num2)>999999999999999||division(num1,num2)<-999999999999999){
          alert("resultado muy grande o pequeño para ser mostrado")
        }else{
          document.getElementById("resultado").innerHTML = division(num1,num2);
          document.getElementById("resultado").style.fontSize= "43px";
        }
        break;
      case "pot":
          if(suma(num1,num2)>999999999999999||pow(num1,num2)<-999999999999999){
            alert("resultado muy grande o pequeño para ser mostrado")
          }else{
            document.getElementById("resultado").innerHTML = pow(num1,num2);
            document.getElementById("resultado").style.fontSize= "43px";
          }
          break;
      default:
        alert("Ingrese una operacion valida")
    }
  }
}
// definimos la funcion para restablecer la calculadora
function limpiar(){
  document.getElementById("operando1").value ="";
  document.getElementById("operando2").value ="";
  document.getElementById("resultado").innerHTML="RESULTADO:";
  document.getElementById("operacion").value="";
  document.getElementById("resultado").style.fontSize= "";
}