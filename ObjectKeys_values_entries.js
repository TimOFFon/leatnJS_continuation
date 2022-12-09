
//=====================================================

//           Object.keys, values, entries

//        Методы для перебора простых объектов

//=====================================================


/**
 *      Object.keys(obj) -   возвращает массив КЛЮЧЕЙ.
 * 
 *      Object.values(obj) - возвращает массив ЗНАЧЕНИЙ.
 * 
 *      Object.keys(obj) -   возвращает массив ПАР.
 */




/**
 *      В ОТЛИЧИИ от методов MAP, которые возвращают
 *      ПЕРЕБИРАЕМЫЙ ОБЪЕКТ
 * 
 *      следующие методы возвращают РЕАЛЬНЫЙ МАССИВ
 */

//----------------------------------------------------
let user1 = {
    name: 'John',
    age: 30
};

// console.log(Object.keys(user1));// ['name', 'age']
// console.log(Object.values(user1));//['John', 30]
// console.log(Object.entries(user1));//[["name","John"],["age",30]]
//-----------------------------------------------------



// ПРИМЕР ПЕРЕБОРА
//----------------------------------------------------

for (let value of Object.values(user1)) {
    // console.log(value); // John, затем 30
}
//-----------------------------------------------------



/**
 *         ИГНОРИРУЮТ СИМВОЛЬНЫЕ СВОЙСТВА
 * 
 *   как и цикл for..in, эти методы игнорируют свойства, 
 *   использующие Symbol(...) в качестве ключей
 */




/**
 *    ЕСЛИ ТРЕБУЕТСЯ УЧИТЫВАТЬ СИМВОЛЬНЫЕ КЛЮЧИ
 * 
 * 
 *          Object.getOwnPropertySymbols - 
 *   
 *          - отдельный метод, возвращающий 
 *          только массив символьных ключей
 * 
 * 
 * 
 * 
 *                Reflect.ownKeys(obj) - 
 *        
 *          - метод возвращающий все ключи
 */
//----------------------------------------------------
// ПРИМЕР

let key1 = Symbol('key1');
let key2 = Symbol('key2');

let obj2 = {
    name: 'Brown',
    age: 100,
    [key2]: "fromHouse",
    [key1]: "fromGarage"
};

// for(let key in obj2) {
    // console.log(key); // name, age
// }

let showKeys = Object.getOwnPropertySymbols(obj2);

// console.log(showKeys); // [Symbol(key2), Symbol(key1)]


// for(let key of showKeys) {
//     console.log(key); // Symbol(key2), Symbol(key1)
// }


let showAllKeys = Reflect.ownKeys(obj2);

// for (let key of showAllKeys) {
//     console.log(key); // name, age, Symbol(key2), Symbol(key1)
// }








//=====================================================

//           Трансформации объекта

//=====================================================


/**
 * 
 *        Object.entries  - (объект в массив) 
 *                          возвращает массив 
 *                          пар ключ/значение 
 *                          для obj
 * 
 * 
 * 
 * 
 *        Object.fromEntries - (массив в объект)
 *                             
 * 
 * 
 */
//---------------------------------------------------
// ПРИМЕР

let busket = {
    banana: 1,
    orange: 3,
    meat: 1
};

// задача удвоить количество

let dubleQuantity = Object.fromEntries(
    Object.entries(busket)
    .map(([key, value]) => [key, value * 2])
);

// console.log(dubleQuantity);
//{banana: 2, orange: 6, meat: 2}
