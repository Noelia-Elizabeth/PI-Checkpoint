/*
En esta primera etapa, necesitamos requerir tu módulo autos que se encuentra en la misma carpeta del archivo donde estás trabajando.

Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita.

Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.
*/
let autos = require('./autos') //Importo el array autos para usarlo.

let concesionaria = { //Creo el objeto literal concesionaria.
    autos: autos, //Lista de atuos importada.
/*
Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto que reciba por parámetro la patente y devuelva el auto al cual le corresponde. En caso de no encontrar el mismo, deberá retornar null.

Para que todo funcione tenés que agregar el código que escribiste en el ejercicio anterior.
*/  
    buscarAuto: function (patente) { //Creo la función que recibe por parámetro una patente.
       for (let i = 0; i < this.autos.length; i++) {
          let auto = this.autos[i];
          if (auto.patente === patente) { //Verifica si la patente ingresada por parámetro es la misma que la del auto encontrado.
             return auto; //Retorna el auto que encontró y evita que la función siga buscando.
          }
        }
        return null; //Retorna null en caso de no encontrar un auto.
    },
/*
Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, en caso de encontrar al automóvil, le asigna el estado de vendido.

¿Cómo lo resuelven?

Recordatorio: Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior. Para resolver esta nueva funcionalidad, tendrás que utilizar la función buscarAuto.
*/ 
    venderAuto: function (patente) { //Creo la función que recibe por parámetro una patente.
       let arr = [];
        for (let i = 0; i < this.autos.length; i++) {
            let auto = this.buscarAuto(patente);
            if (auto.vendido === false) { //Evalua si el auto figura como no vendido.
               auto.vendido = true; //Cambia el estado del auto a vendido.
               arr.push(auto);
            }
        }
       return arr; //Retorna el auto que se vendió.
    },
/*
La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista de autos para la venta. A lo cual, María, cree que es una tarea sencilla que Juan y vos pueden encarar solos, usando la función autosParaLaVenta, aunque por las dudas ella les recuerda que no deberían de aparecer los autos que ya fueron vendidos.
*/
    autosParaLaVenta: function () { //Creo la función.
       let arr = [];
             for (let i = 0; i < this.autos.length; i++) {
                let auto = this.autos[i];
                if (auto.vendido === false) { //Evalua si el auto figura como no vendido.
                   arr.push(auto);
                }
             }
       return arr; //Retorna los autos que figuran como no vendidos.
    },
/*
María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km. Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. Vas a tener que desarrollar la funcionalidad autosNuevos.

¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?

Para comenzar, tenés que agregar el código que escribiste en el ejercicio anterior.
*/
    autosNuevos: function () { //Creo la función.
        let arr = [];
        let auto = this.autosParaLaVenta(); //Guarda en una variable auxiliar la lista de autos que figuran como no vendidos.
        for (let i = 0; i < auto.length; i++) {
            let a = auto[i];
            if (a.km < 100) { //Evalua si el auto tiene menos de 100 kilómetros.
                arr.push('0km');
            }
        }
        return arr; //Retorna una lista de Strings indicando cuáles de los autos no vendidos son 0km.
    },
/*
El cliente le pidió saber cuánto dinero generaron las ventas.

María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido. A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo".

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
*/
    listaDeVentas : function () { //Creo la función.
        let arr = [];
        for (let i = 0; i < this.autos.length; i++) {
           let auto = this.autos[i];
           if (auto.vendido === true) { //Evalua si el auto figura como vendido.
              arr.push(auto.precio);
           }
        }
        return arr; //Retorna una lista con los precios de los autos vendidos.
    },
/*
Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas
*/
    totalDeVentas: function () { //Creo la función.
        let total = this.listaDeVentas(); //Guarda en una variable auxiliar la lista con los precios de los autos vendidos.
        let aux = 0;
        for (let i = 0; i < total.length; i++) {
            aux += total[i]; //Va sumando el total de ventas.
        }
        return aux; //Retorna el total de las ventas.
    },
/*
Muy contento el equipo por cómo viene el desarrollo, por la tarde, María te comenta que se agrega una funcionalidad muy importante: la de verificar si una persona puede comprar o no un auto. Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. Una es el costo total: si el total de un auto excede lo que la persona puede pagar, no va a comprar el auto. Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. Si ambas condiciones se cumplen, se realiza la compra.﻿

Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.

Una persona va a ser representada mediante un objeto literal de la siguiente forma:

{
nombre: “Juan”,
capacidadDePagoEnCuotas: 20000,
capacidadDePagoTotal: 100000
}

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
*/

    puedeComprar: function (auto, persona) { //Creo la función que recibe como parámetro un auto y una persona.
        if (auto.precio <= persona.capacidadDePagoTotal && persona.capacidadDePagoEnCuotas >= (auto.precio/auto.cuotas)) {
/*Evalua si el precio total no excede el total de dinero de la persona Y si las cuotas no exceden lo que puede pagar la persona por mes.*/
            return true; //Retorna que sí puede comprar el auto.
        } else {
            return false; //Retorna que no puede comprar el auto.
        }
    },
/*
Ahora, te comprometiste a realizarla. Así que manos a la obra. Hay que escribir la función autosQuePuedeComprar, que recibe una persona y devuelve la lista de autos que puede comprar.

La función debe de realizar los siguientes pasos:

1) Obtener los autos para la venta

2) Por cada uno de los autos debe de probar si la persona puede comprarlo, ¿ya hay alguna funcionalidad que me permita hacer esto?.

3) Luego debemos retornar los que pueda comprar, ¿hay alguna manera de poder filtrar la lista de autos para la venta del punto 1 con el paso 2?

Para comenzar tenés que agregar el código que escribiste en el ejercicio anterior.
*/
    autosQuePuedeComprar: function (persona) { //Creo la función que recibe como parámetro una persona.
        let arr;
        arr = this.autosParaLaVenta(); //Guarda en una variable auxiliar la lista de autos que figuran como no vendidos.
        let total = [];
        for (let i = 0; i < this.autosParaLaVenta().length; i++) { 
            if (this.puedeComprar(arr[i], persona) === true) { //Evalua si la versona puede comprar el auto.
                total.push(arr[i]);
            }
        }
        return total; //Retorna una lista de los autos que la persona puede comprar.
    }

}


console.log('---------------Ejercicio Función autosNuevos----------------');
console.log(concesionaria.autosNuevos()) //Cambiar el valor de km del Ford Fiesta a, por ejemplo, 90 para ver cambios en el resultado.

console.log('--------------Ejercicio Función listaDeVentas----------------');
console.log(concesionaria.listaDeVentas()); //Cambiar el estado de vendido a true de cualquier auto para ver cambios en el resultado.

console.log('--------------Ejercicio Función totalDeVentas----------------');
console.log(concesionaria.totalDeVentas()); //Cambiar el estado de vendido a true de cualquier auto para ver cambios en el resultado.

let persona = {
    nombre: 'Juan',
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
}

console.log('--------------Ejercicio Función puedeComprar------------------');
console.log(concesionaria.puedeComprar(autos[1], persona)); //Cambiar el índice a 0 para que el resultado sea false.

console.log('-----------Ejercicio Función autosQuePuedeComprar-------------');
console.log(concesionaria.autosQuePuedeComprar(persona)); //Cambiar el precio del Ford Fiesta por, por ejemplo, 90000 para que lo incluya en la lista.