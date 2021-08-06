//const lista1 = [
//  100,
//  200,
//  300,
//  500
//];


function calcularPromedioArismetica(lista){

    //let sumaLista = 0;
    //for (let i = 0; i < lista.length; i++){
    //    sumaLista = sumaLista + lista[i];
    //}
    const sumaLista = lista.reduce(
        function(valorAcomulado = 0, nuevoElemento){
          return valorAcomulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista
}