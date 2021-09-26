//function sumar(a, b) {
//  return a + b;
//}

//export default sumar;

function multiplicar(a, b) {
  return a * b;
}

//export default multiplicar;

function calcularTotal(cantidad, precio) {
  return cantidad * precio;
}

function calcularTotalConEstado(cantidad,precio,estado){

  var total = cantidad*precio;
  var impuesto = 0;

    if(estado == "UT"){
        impuesto = 0.0665 * total;
    }else{
        if(estado == "NV"){
            impuesto = 0.08 * total;
        }else{
            if(estado == "TX"){
                impuesto = 0.0625 * total;
            }else{
                if(estado == "AL"){
                    impuesto = 0.04 * total;
                }else{
                    if(estado == "CA"){
                        impuesto = 0.0825 * total;
                    }else{
                        impuesto = 0;
                    }
                }
            }
        }
    }
  var montoTotal = (total + impuesto);
  return montoTotal;
}


export default calcularTotal;
export default calcularTotalConEstado;
