
function obtenerAleatorio(){
    return Math.random();
}


//console.log( obtenerAleatorio() + 10 );


function obtenerNombre(){
    return "Juan";
}

//console.log( obtenerNombre() + " Padilla" );

function esMayor05(){
    if ( obtenerAleatorio() > 0.5 ) {
        return true;
    }else{
        return false;
    }
}

//console.log( esMayor05() );

if ( esMayor05() ) {
    console.log( "Es mayor a 0.5" );
} else {
    console.log( "Es menor a 0.5" );
}


function crearPersona( nombre, apellido ) {
    return {
        nombre: nombre,
        apellido: apellido
    }
}

var persona = crearPersona( "María", "Paz" );


function creaFuncion() {

    return function( nombre ) {
        console.log( "Me creo " + nombre );

        return function() {
            console.log( "Segunda funcion" );
        }
    }
}

var nuevafuncion = creaFuncion();

var segundaFuncion = nuevafuncion( persona.nombre );

segundaFuncion();


