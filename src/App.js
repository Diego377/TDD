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

function calcularTotalConEstadoYDescuento(cantidad,precio,estado){

  var total = cantidad*precio;
  var impuesto = 0;
  var descuento = 0;

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
    if (total >= 30000) {
      descuento=0.15*total;
  } else {
      if (total >= 10000) {
          descuento=0.1*total;
      } else {
          if (total >= 7000) {
              descuento = 0.07 * total;
          } else {
              if (total >= 3000) {
                  descuento = 0.05 * total;
              } else {
                  if (total >= 1000) {
                      descuento = 0.03 * total;
                  } 
              }
          }
      }
  }
  var montoTotal2 = (total + impuesto - descuento);
  return montoTotal2;
}

function calcularTotalConEstadoDescuentoYRegalo(cantidad,precio,estado,regalo){

    var total = cantidad*precio;
    var impuesto = 0;
    var descuento = 0;
  
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
      if (total >= 30000) {
        descuento=0.15*total;
    } else {
        if (total >= 10000) {
            descuento=0.1*total;
        } else {
            if (total >= 7000) {
                descuento = 0.07 * total;
            } else {
                if (total >= 3000) {
                    descuento = 0.05 * total;
                } else {
                    if (total >= 1000) {
                        descuento = 0.03 * total;
                    } 
                }
            }
        }
    }
    if(regalo == true){
        var envoltorio = 5;
        var montoTotal2 = (total + impuesto - descuento + envoltorio);
    }else{
        var montoTotal2 = (total + impuesto - descuento);
    }
    return montoTotal2;
  }

//export default calcularTotal;
//export default calcularTotalConEstado;
//export default calcularTotalConEstadoYDescuento;
export default calcularTotalConEstadoDescuentoYRegalo;