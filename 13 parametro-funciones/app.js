
function imprimir( fn ) {

    // if ( apellido === undefined ) {
    //     apellido = "xxx";
    // }

    // apellido = apellido || "xxx"; 
    // console.log( `${ nombre } ${ apellido }` );

    //console.log( persona.nombre + " " + persona.apellido );
    fn();
}

var persona = {
    nombre: "Juan",
    apellido: "Padilla"
}


// imprimir( {
//     nombre: "Juan",
//     apellido: "Padilla"
// } );

//imprimir( persona );

var mifuncion = function(){
    console.log("miFunción");
}

imprimir( function(){
    console.log( mifuncion );
} )

