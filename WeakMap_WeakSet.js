
//=====================================================

//                    WeakMap

//=====================================================

/**
 *       WeakMap - не предотвращает удаление ОБЪЕКТОВ,
 *               когда эти ОБЪЕКТЫ выступают в 
 *               качестве ключей,
 *               когда в областях видимости нет доступа
 *               к этим ОБЪЕКТАМ.
 * 
 *      Ключи - должны быть ОБЪЕКТАМИ.
 */


//--------------------------------------------------
let weakMap1 = new WeakMap();

let obj1 = {};

weakMap1.set(obj1, 'ok');

// console.log(weakMap1.has(obj1)); // true

obj1 = null; // <------ !!! deleted

// console.log(weakMap1.has(obj1)); // false



//-----------------------------------------------------

/**
 *   Используем ОБЪЕКТ в качестве ключа и если больше 
 * нет ссылок на этот ОБЪЕКТ, то он будет удалён из 
 * памяти (и из объекта WeakMap) автоматически.
 */



/**----------------------------------------------------
 * 
 *           WeakMap -  НЕ ПОДДЕРЖИВАЕТ: 
 * 
 *    перебор и методы keys(), values(), entries()
 * 
 * -----------------------------------------------------
 */


/**-----------------------------------------------------
 * 
 *                    МЕТОДЫ WeakMap
 * 
 *                   weakMap.get(key)
 *                   weakMap.set(key, value)
 *                   weakMap.delete(key)
 *                   weakMap.has(key)
 * 
 * -----------------------------------------------------
 */


/**-----------------------------------------------------
 * 
 *   WeakMap -  используется в качестве дополнительного 
 *              хранилища данных.
 */

// ПРИМЕР:
//------------------------------------------------------
// map: пользователь => число визитов
let visitsCountMap = new WeakMap();

//  увеличиваем счётчик
function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let Bred = {};

countUser(Bred); // <--- Bred visited site
countUser(Bred); // <--- Bred visited site
countUser(Bred); // <--- Bred visited site

// console.log(visitsCountMap.get(Bred)); // 3 times!!!

Bred = null;  // <--- Bred get out site

// console.log(visitsCountMap.get(Bred)); // undefined
// console.log(visitsCountMap.has(Bred)); // false
//------------------------------------------------------



/**-----------------------------------------------------
 * 
 *   WeakMap -  используется в качестве кеширования, 
 * когда результат вызова функции должен где-то 
 * запоминаться («кешироваться») для того, чтобы 
 * дальнейшие её вызовы на том же объекте могли просто 
 * брать уже готовый результат, повторно используя его.
 */



// ПРИМЕР:------------------------------------

// cache.js---------------------------
let cache = new WeakMap();

// вычисляем и запоминаем результат
function process(obj) {
    if(obj === null) return console.log('Кэш чист');

    if(!cache.has(obj)) {
        // вычисляем результат для объекта
        function result(obj) {
            return obj.count * obj.price;
        }

        cache.set(obj, result(obj));
    }

    return cache.get(obj);
}
//-------------------------------------

// main.js----------------------------
// какой то объект
//before--------------
let somethingObj = {
    count: 5,
    price: 10
};
//after----------------
//...позже когда объект больше не нужен
somethingObj = null;

// let resultAnother1 = process(somethingObj);
//before 50
//after Кэш чист

// let resultAnother2 = process(somethingObj);
//before 50
//after Кэш чист






//=====================================================

//                      WeakSet

//=====================================================

/**
 *       WeakSet - аналогична Set, 
 * 
 *                 НО, можем добавлять ТОЛЬКО ОБЪЕКТЫ.
 * 
 *                 Объект присутствует в множестве,
 *                 пока доступен где-то ещё.              
 * 
 * 
 *       Данные - должны быть ОБЪЕКТАМИ.
 */


//--------------------------------------------------
/**-----------------------------------------------------
 * 
 *                    МЕТОДЫ WeakSet
 * 
 *                   WeakSet.add(Object)
 *                   WeakSet.has(Object)
 *                   WeakSet.delete(Object)
 *                   
 * 
 *                   НЕ ПОДДЕРЖИВАЕТ
 *                   
 *                         size()
 *                         keys()
 *                         values()
 *                         entries()
 * -----------------------------------------------------
 */

/**
 *           Служит для значений типа <<ДА/НЕТ>>
 */

//---------------------------------------------------
//  НАПРИМЕР: (для учёта кто посещал сайт)

let visitedSet = new WeakSet();

let john = {name: 'John'};
let pete = {name: 'Pete'};
let mary = {name: 'Mary'};

visitedSet.add(john);// John заходил
visitedSet.add(pete);// потом Pete
visitedSet.add(john);// снова John

// проверим, заходил ли сегодня John?
// console.log(visitedSet.has(john)); // true

// проверим, заходил ли сегодня Pete?
// console.log(visitedSet.has(pete)); // true

// проверим, заходила ли сегодня Mary?
// console.log(visitedSet.has(mary)); // false


//---- Конец суток, отчистка кэша-------
john = null;
pete = null;
mary = null;

// проверим, заходил ли сегодня John?
// console.log(visitedSet.has(john)); // false
// проверим, заходил ли сегодня Pete?
// console.log(visitedSet.has(pete)); // false
// проверим, заходила ли сегодня Mary?
// console.log(visitedSet.has(mary)); // false