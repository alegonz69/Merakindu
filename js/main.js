// Simulador interactivo

function calcularOperacion() {
    let operacion = prompt("Elige una operación: suma, resta, multiplicacion, division");
  
    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));
    let resultado;
  
    switch (operacion) {
      case "suma":
        resultado = num1 + num2;
        break;
      case "resta":
        resultado = num1 - num2;
        break;
      case "multiplicacion":
        resultado = num1 * num2;
        break;
      case "division":
        if (num2 !== 0) {
          resultado = num1 / num2;
        } else {
          alert("No se puede dividir por 0.");
          return;
        }
        break;
      default:
        alert("Operación no válida.");
        return;
    }
  
    alert("El resultado de la " + operacion + " es: " + resultado);
  }
  
  calcularOperacion();
  
