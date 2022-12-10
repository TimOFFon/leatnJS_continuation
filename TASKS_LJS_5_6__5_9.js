
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