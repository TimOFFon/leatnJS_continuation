
//=====================================================

//   LJS 5.6      Перебираемые объекты

//=====================================================


/**
 * Создать из обычного объекта obj1 итерируемый объект,
 * что бы объект итерировался в <for of>
 */


let obj1 = {
    from: 1,
    to: 10
};

//Решение:

obj1[Symbol.iterator] = function() {
    return {
        curent: this.from,
        finish: this.to,
        next() {
            if(this.curent > this.finish) {
                return {done: true};
            } else {
                return {done: false, value: this.curent++};
            }
        }
    }
};

for(let value of obj1) {
    // console.log(value);//12345678910
}


//------------------      18min  --------------------





//===================================================
//===================================================
//===================================================





//=====================================================

//   LJS 5.7            Map и Set

//=====================================================



/**
 *       "Фильтрация уникальных элементов массива"
 * Создайте функцию unique(arr), которая вернёт массив 
 * уникальных, не повторяющихся значений массива arr.
 */

 let values = ["Hare", "Krishna", "Hare", "Krishna",
 "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
// Решение: 
function unique(arr) {
    let uniqValues = new Set();
    let resultArr = [];

    for(let value of values) {
        uniqValues.add(value);
    }

    for(let setFrom of uniqValues) {
        resultArr.push(setFrom);
    }

    return resultArr;
}

// console.log(unique(values)); 
// ['Hare', 'Krishna', ':-O']

//-------------------  18 min  -----------------------
// Решение из учебника:
// function unique(arr) {
//     return Array.from(new Set(arr));
//   }

//====================================================
//====================================================
//====================================================
//------------- Закрепеление материала ---------------
// 1/3 (Фильтрация уникальных элементов массива)
// 09.01.23

function unique2(arr) {
    let uniqueArr = new Set();
    for(let elem of arr) {
        uniqueArr.add(elem);
    }
    return Array.from(uniqueArr);
}

let values2 = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

// console.log(unique2(values2));


//====================================================
//====================================================
//====================================================


/**
 *              "Отфильтруйте анаграммы"
 * 
 *   Анаграммы – это слова, у которых те же буквы в   
 *   том же количестве, но они располагаются в другом 
 *   порядке.
 * 
 *   nap - pan
 *   ear - are - era
 *   cheaters - hectares - teachers
 * 
 *   Напишите функцию aclean(arr), которая возвращает 
 *   массив слов, очищенный от анаграмм.
 */

 let arr2 = ["nap", "teachers", "cheaters", 
           "PAN", "ear", "era", "hectares"];

// Решение:
/** 
 *  1. Беру элемент массива и сравниваю с другими на 
 *     совпадение на все буквы и количество и наличие 
 *     в чёрном списке.
 *  2. Если совпадение полное и длина совпадает,
 *     то вношу в "чёрный список". 
 *  3. А слово "образец" по кончанию массива записываю
 *     в белый список.
*/

function aclean(arr) {
    let whiteList = [];
    let blackList = [];

    for(let j = 0; j < arr.length; j++) {
        let word1 = arr[j].toLowerCase();

        if(blackList.includes(word1)) {
            continue;
        } else {
            foFar: for(let i = j + 1; i < arr.length; i++) {
                let word2 = arr[i].toLowerCase();
                if(word1.length === word2.length) {
                    for(let leter of word1) {
                        if(!word2.includes(leter)) {
                            continue foFar;
                        } else if(word1.indexOf(leter,
                                  word1.length - 1) === 
                                  word1.length - 1) {
                                    if(!whiteList.includes(word1)) {
                                        whiteList.push(word1); 
                                    }
                                   
                            blackList.push(word2);        
                        } 
                    }
                } else {
                    continue foFar;
                }
            }
        }
    }
    return whiteList;
}

// console.log(aclean(arr2)); // ['nap', 'teachers', 'ear']

//---------------   120 min ------------------------

// Refactoring with Map() or Set()
/**
 * Идеи:
 * Длины сравниваемых слов совпадают.
 * Можно создать пары по одинаковой длине.
 * Содать или ключи, или значения через Set для уникальности.
 * Вывести уникальные значения, или ключи, или значния.
 * 
 */

function aclean2(arr) {
    let map = new Map();

    function workingWord(w) {
        return w.split('').sort().join('').toLowerCase();
    }

    for(let word of arr) {
        map.set(workingWord(word), word);
    }
     return Array.from(map.values());   
}

// console.log(aclean2(arr2)); // ['PAN', 'hectares', 'era']

// ---------------------- 60 min --------------------------------


//====================================================
//====================================================
//====================================================
//------------- Закрепеление материала ---------------
// 2/3 (Отфильтруйте анаграммы)
// 09.01.23

let arrAn2 = ["nap", "teachers", "cheaters", "PAN",
 "ear", "era", "hectares"];

 function aclean2(arr) {
    let cleanedArr = new Map();
    for(let i of arr) {
        cleanedArr.set(i.toLowerCase()
        .split('')
        .sort()
        .join(''), i);
    }
    return console.log(Array.from(cleanedArr.values()));
 }

//  aclean2(arrAn2); // ['PAN', 'hectares', 'era']


//====================================================
//====================================================
//====================================================




/**
 *                     Перебираемые ключи
 * 
 *  Мы хотели бы получить массив ключей map.keys() в переменную 
 *   и далее работать с ними, например, применить метод .push.
 * 
 *  
 *                     Но это не выходит:
 */
 
                      let map3 = new Map();

                      map3.set("name", "John");

                      let keys3 = map3.keys();

                    //   console.log(map3.keys()); 
                      //MapIterator {'name'}


                        // keys3.push("more");
                        
                // Error: keys.push is not a function
                // Ошибка: keys.push -- это не функция

 /** 
 *    Почему? 
 * 
 *    Что нужно поправить в коде, чтобы вызов keys.push сработал?
 */
//-----------------------------------------------------------------
 //Решение:

 /**
  *   Чтобы на мапах работали методы массивов сначало нужно мапы
  *   перевести в массивы с помощью метода Array.from()
  */

                    keys3 = Array.from(map3);
                    keys3.push("more");
                    // console.log(keys3);
                    //  ['name', 'John'], more

//-----------------------  10 min -----------------


//====================================================
//====================================================
//====================================================
//------------- Закрепеление материала ---------------
// 3/3 (Массив ключей)
// 09.01.23
let mapKeys2 = new Map();
mapKeys2.set("name", "John");
let keysMap2 = Array.from(mapKeys2.keys());
keysMap2.push('more');

// console.log(keysMap2); // ['name', 'more']

//====================================================
//====================================================
//====================================================




//=====================================================

//   LJS 5.8         WeakMap и WeakSet

//=====================================================

/**
 *              Хранение отметок "не прочитано"
 * 
 *                  Есть массив сообщений:
 * 
 *                 let messages = [
 *                 {text: "Hello", from: "John"},
 *                 {text: "How goes?", from: "John"},
 *                 {text: "See you soon", from: "Alice"}];
 * 
 *      У вас есть к ним доступ, но управление этим массивом 
 *      происходит где-то ещё. Добавляются новые сообщения и 
 *      удаляются старые, и вы не знаете в какой момент это 
 *      может произойти.
 * 
 *      Имея такую вводную информацию, решите, какую структуру 
 *      данных вы могли бы использовать для ответа на вопрос 
 *      «было ли сообщение прочитано?». Структура должна быть 
 *      подходящей, чтобы можно было однозначно сказать, было 
 *      ли прочитано это сообщение для каждого объекта сообщения.
 * 
 *      P.S. Когда сообщение удаляется из массива messages, 
 *      оно должно также исчезать из структуры данных.
 * 
 *      P.P.S. Нам не следует модифицировать сами объекты 
 *      сообщений, добавлять туда свойства. Если сообщения 
 *      принадлежат какому-то другому коду, то это может 
 *      привести к плохим последствиям.
 */
//------------------------------------------------------------


// Решение: 
/**
 *  Используем структуру данных WeakMap.
 */

let messages = [
                   {text: "Hello", from: "John"},
                   {text: "How goes?", from: "John"},
                   {text: "See you soon", from: "Alice"}];




                   let weakObj = new WeakMap();

function readMessageStatus(arrItems, status = false) {
    if(arrItems.length > 0 && !status) {
        for(let obj of arrItems) {
            weakObj.set(obj, status);
        }
    } else {
        if(weakObj.has(arrItems)) weakObj.delete(arrItems);
        weakObj.set(arrItems, status);
    }

    return console.log(weakObj.get(arrItems), weakObj);
}

let read = true;
//-----------------------------------------------------------

// readMessageStatus(messages); 
//  WeakMap {{…} => false, {…} => false, {…} => false}


// readMessageStatus(messages[0], read); 
// true WeakMap {{…} => true, {…} => false, {…} => false}

// console.log(weakObj);
// WeakMap{{…} => true, {…} => false, {…} => false}



//------------------------  60 min  ------------------------



// Решение из учебника

let readMessages = new WeakSet();

// Два сообщения были прочитаны
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages содержит 2 элемента

// ...давайте снова прочитаем первое сообщение!
readMessages.add(messages[0]);
// readMessages до сих пор содержит 2 элемента

// Вопрос: было ли сообщение message[0] прочитано?
// console.log("Read message 0: " + readMessages.has(messages[0]));
// Read message 0: true

// messages.shift();
// теперь readMessages содержит 1 элемент 
//(хотя технически память может быть очищена позже)




//====================================================
//====================================================
//====================================================
//------------- Закрепеление материала ---------------
// 1/2 (Хранение отметок "не прочитано")
// 10.01.23

let messages2 = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];

  let wasReading = new WeakSet();

//   console.log(wasReading.add(messages2[0])); // прочитатно
//   console.log(wasReading.has(messages2[0])); // проверяем
  
  
  messages2.shift(); // объект удалется
//   console.log(wasReading.has(messages2[0])); // проверяем

//====================================================
//====================================================
//====================================================
// 2/2 (Хранение времени прочтения)
// 10.01.23
let messages2_2 = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
  ];

  let whenWasReading = new WeakMap();

  //прочитано
//   console.log(whenWasReading.set(messages2_2, 'time1'));

  //проверяем воемя - time1
//   console.log(whenWasReading.get(messages2_2));


//====================================================
//====================================================
//====================================================
// 1/2 (Сумма свойств объекта)
// 10.01.23

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

  let emptyObj = {};

  function sumSalaries(obj) {
    let sum = null;
    if(!Object.keys(obj).length) {
        return 0;
    } else {
        for (let i of Object.values(obj)) {
            sum += i;
        }
    }
    return sum;
  }

//   console.log(sumSalaries(salaries)); // 650
//   console.log(sumSalaries(emptyObj)); // 0

//====================================================
//====================================================
//====================================================
// 2/2 (Подсчёт количества свойств объекта)
// 10.01.23

let user = {
    name: 'John',
    age: 30
  };

  function count(obj) {
    return Object.values(obj).length;
  }

//   console.log(count(user)); // 2