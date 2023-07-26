const suma = require('../Programs/suma.js');
const division = require('../Programs/division.js');
const areaTriangulo = require('../Programs/areaTriangulo.js');
const tipoNumero = require('../Programs/tipoNumero.js');
const numCaracteres = require('../Programs/numCaracteres.js');
const esPrimo = require('../Programs/esPrimo.js');
const numMayor = require('../Programs/numMayor.js');
// const esPalindromo = require('../Programs/esPalindromo.js');

test('1. La funcion suma funciona', () => {
    expect(suma(1,5)).toBe(6)
})

test('2. La funcion division funciona', () => {
    expect(division(10,2)).toBe(5)
})

test('3. La funcion areaTriangulo funciona', () => {
    expect(areaTriangulo(10,2)).toBe(10)
})

test('4. La funcion tipoNumero funciona si es positivo', () => {
    expect(tipoNumero(5)).toBe('positivo')
})

test('5. La funcion tipoNumero funciona si es negativo', () => {
    expect(tipoNumero(-5)).toBe('negativo')
})

test('6. La funcion tipoNumero funciona si es cero', () => {
    expect(tipoNumero(0)).toBe('cero')
})

test('7. La funcion numCaracteres funciona', () => {
    expect(numCaracteres('hola muchacho')).toBe(13)
})

// test('8. La funcion esPalindromo funciona', () => {
//     expect(esPalindromo('hola muchacho')).toBe(false)
// })

// test('9. La funcion esPalindromo funciona', () => {
//     expect(esPalindromo('cococ')).toBe(true)
// })

test('10. La funcion esPrimo funciona', () => {
    expect(esPrimo(6)).toBe(false)
})

test('11. La funcion esPrimo funciona', () => {
    expect(esPrimo(2)).toBe(true)
})

test('12. numMayor', () => {
    expect(numMayor([1,5,2,3,4,10,85,14])).toBe(85)
})
