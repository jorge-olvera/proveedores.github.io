"use strict";
let forma = document.getElementById("forma"),
    campos = ["clave", "nombre", "telefono", "fecha"],
    salidas = ["salidaClave", "salidaNombre", "salidaTelefono", "salidaFecha"];

    forma.addEventListener("submit",proveedores,false);

function proveedores() {

    for(let i = 0, longitud = campos.length; i < longitud; i++){
        let campo = forma[campos[i]];
        let salida = document.getElementById(salidas[i]);
        salida.value = campo.value;
    }

    var opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var txtFecha = fecha.valueAsDate;
    var diaHoy = new Date();
    console.log(diaHoy.toLocaleDateString("es-ES"));
    console.log(diaHoy.toLocaleDateString("es-ES", opciones));
    console.log(diaHoy.toLocaleDateString("es-ES", opciones));

}