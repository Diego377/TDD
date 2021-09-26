//import sumar from "./App.js";

//describe("Sumar", () => {
//  it("deberia sumar dos numeros", () => {
//    expect(sumar(3, 2)).toEqual(5);
//  });
//});

//import multiplicar from "./App.js";

//describe("Multiplicar", () => {
//  it("deberia multiplicar dos numeros", () => {
//    expect(multiplicar(3, 2)).toEqual(6);
//  });
//  it("deberia multiplicar dos numeros", () => {
//    expect(multiplicar(6, 5)).toEqual(30);
//  });
//});

import calcularTotal from "./App.js";

describe("Calcular total", () => {
  it("deberia calcular el total", () => {
    expect(calcularTotal(3, 2)).toEqual(6);
  });
});

