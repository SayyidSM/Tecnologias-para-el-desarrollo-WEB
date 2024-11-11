// Ejercicio 1: Número Par
function esPar(numero) {
    if (numero % 2 === 0) {
        alert(`${numero} es un número par.`);
    } else {
        alert(`${numero} es un número impar.`);
    }
}

// Ejercicio 2: Tabla de Multiplicar
function mostrarTablaMultiplicar(numero) {
    let resultado = "";
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} * ${i} = ${numero * i}\n`;
    }
    alert(resultado);
}

// Ejercicio 3: Producto mediante Sumas
function productoMedianteSumas(a, b) {
    let producto = 0;
    for (let i = 0; i < b; i++) {
        producto += a;
    }
    alert(`El producto de ${a} y ${b} mediante sumas es: ${producto}`);
}

// Ejercicio 4: Mayor Valor
function posicionMayorValor(arr) {
    let mayor = arr[0];
    let posicion = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
            posicion = i;
        }
    }
    alert(`El mayor valor es ${mayor} y se encuentra en la posición ${posicion}`);
}

// Ejercicio 5: Suma de Vectores
function sumaVectores(A, B) {
    let C = [];
    for (let i = 0; i < A.length; i++) {
        C[i] = A[i] + B[i];
    }
    alert(`El vector C es: ${C}`);
}

// Ejercicio 6: Calcular Media
function calcularMedia(arr) {
    let suma = arr.reduce((a, b) => a + b, 0);
    let media = suma / arr.length;
    alert(`La media de los números es: ${media}`);
}

// Ejercicio 7: Ordenar Números
function mostrarEnOrden(arr) {
    let ordenado = arr.slice().sort((a, b) => a - b);
    alert(`Los números en orden son: ${ordenado}`);
}

// Ejercicio 8: Procesar Textos
function procesarTextos(textos) {
    textos.forEach(texto => {
        alert(`Texto: ${texto}\nLongitud: ${texto.length}\nEn mayúsculas: ${texto.toUpperCase()}\nEn minúsculas: ${texto.toLowerCase()}`);
    });
}
