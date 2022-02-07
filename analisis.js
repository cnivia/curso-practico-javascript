//Helpers

function esPar(numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
        }
    );
    
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculadora de medianas.

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad];
        const personaMitad2 = lista[mitad-1];

        const mediana = calcularMediaAritmetica ([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const mediana = lista[mitad];
        return mediana;
    }
}

//Mediana general.

const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneral = medianaSalarios(salariosColSorted);

//Mediana Top 10.

const spliceStart = salariosColSorted.length * 0.9;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosTop10 = salariosColSorted.splice(spliceStart,spliceCount);

const medianaTop10 = medianaSalarios(salariosTop10);

console.log({
    medianaGeneral,
    medianaTop10,
}
);

