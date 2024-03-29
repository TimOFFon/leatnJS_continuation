//=====================================================
//=====================================================
//=====================================================
//=====================================================
//=====================================================
//=====================================================

//                   Объект RegExp

//           Якоря: начало строки ^ и конец $

//=====================================================
//=====================================================
//=====================================================
//=====================================================
//=====================================================
//=====================================================
/*
               ^ $    - «якоря» (anchors)

        ^  - совпадение с началом текста

        $  - совпадение с концом текста

        ^...$ - часто используются для проверки, 
                совпадает ли строка с шаблоном 
                полностью. /^\d\d:\d\d$/
    Якоря ^ и $ – это проверки. У них нулевая ширина.
*/
//=====================================================
//                      ПРИМЕРЫ
//=====================================================
// начинается ли текст с Mary
{
    let str1 = 'Mary had a little lamb';
    // console.log(/^Mary/.test(str1)); // true
}
//-----------------------------------------------------
// кончается ли строка словом snow
{
    let str1 = "it's fleece was white as snow";

    // console.log(/snow$/.test(str1)); // true
}
//-----------------------------------------------------
// полное совпадение
{
    let goodInput = '12:34';
    let badInput = '12:345';

    let regexp = /^\d\d:\d\d$/;

    // console.log(regexp.test(goodInput)); // true
    // console.log(regexp.test(badInput)); // false
}
//==================================================






//==================================================
//==================================================
//==================================================
//==================================================
/*
 
            Многострочный режим якорей ^ $, 
      
                      флаг "m"

*/
//==================================================
//==================================================
//==================================================
//==================================================
/*
      m      - флаг включающий многострочный режим 
               для смены поведения ^ и $
*/
//==================================================
//                      ПРИМЕРЫ
//==================================================
// поиск в начале строки ^w
{
    let str = `1е место: Винни
2е место: Пятачок
3е место: Слонопотам`;

// console.log(str.match(/^\d/gm));//['1', '2', '3']
// console.log(str.match(/^\d/g));//['1'] (без m)
}
//--------------------------------------------------
// поиск в конце строки w$
{
    let str = `Винни: 1
Пятачок: 2
Слонопотам: 3`;

//console.log(str.match(/\d$/gm));//['1', '2', '3']
}
//--------------------------------------------------
// Ищем \n вместо ^ $
{
    let str = `Винни: 1
Пятачок: 2
Слонопотам: 3`;

//console.log(str.match(/\d\n/g)); // ['1\n', '2\n']
}

//====================================================
//====================================================
//                     Задача
//====================================================
//====================================================
/*
             Регулярное выражение ^$

Какая строка подойдёт под шаблон ^$?
*/
{//----------- РЕШЕНИЕ ---------
    let line = '';
    let regexp = /^$/;
    let result = line.match(regexp);

    // console.log(result);
    //['', index: 0, input: '', groups: undefined]
}


