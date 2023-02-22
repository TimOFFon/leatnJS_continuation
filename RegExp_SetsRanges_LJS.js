//=====================================================
//=====================================================
//=====================================================
//=====================================================
//=====================================================
//=====================================================

//                   Объект RegExp

//               Наборы и диапазоны [...]

//=====================================================
//=====================================================
//=====================================================
//=====================================================
//=====================================================
//=====================================================



/*
        […] - «искать любой символ из заданных»

    Для примера, [eao] означает любой из 3-х символов: 
    'a', 'e' или 'o'.

    Можно использовать в регулярных выражениях вместе с 
    обычными символами /[тх]оп/gi.
*/


//======================================================
//======================================================
//======================================================

//                    Диапазоны

//======================================================
//======================================================
//======================================================
/*
             [a-z]   - соответствует символу в 
                       диапазоне от a до z

             [0-5]   – цифра от 0 до 5

          [0-9A-F]   - ва диапазона: ищется символ, 
                       который либо цифра от 0 до 9, 
                       либо буква от A до F

       [0-9A-Fa-f]   - добавлен нижний регистр

            [\s\d]   - использование символьных 
                       классов

========================================================
========================================================
Символьные классы – сокращения для наборов символов
========================================================

          \d – то же самое, что и [0-9],

          \w – то же самое, что и [a-zA-Z0-9_],

          \s – то же самое, что и [\t\n\v\f\r ], 
               плюс несколько редких пробельных 
               символов Юникода.


=======================================================
=======================================================
            Пример: многоязычный аналог \w  
=======================================================
        [\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]
======================================================

          Alphabetic (Alpha)       – для букв,

          Mark (M)                 – для акцентов,

          Decimal_Number (Nd)      – для цифр,

          Connector_Punctuation (Pc) – для символа 
                                       подчёркивания '_' 
                                       и подобных ему,

          Join_Control (Join_C) – два специальных кода 
                                  200c и 200d, 
                                  используемые в 
                                  лигатурах, например, 
                                  арабских.
*/


//======================================================
//======================================================
//======================================================

//                Исключающие диапазоны    

//======================================================
//======================================================
//======================================================
/*
          [^…]   - обозначаются символом каретки ^ в 
                   начале диапазона и соответствуют 
                   любому символу за исключением 
                   заданных


       [^aeyo]   – любой символ, за исключением 
                   'a', 'e', 'y' или 'o'


       [^0-9]    – любой символ, за исключением цифры, 
                   то же, что и \D


       [^\s]     – любой непробельный символ, то же, 
                   что и \S     
*/

//======================================================
//======================================================
//======================================================

//               Экранирование внутри […]  

//======================================================
//======================================================
//======================================================
/*
    В квадратных скобках большинство специальных 
    символов можно использовать без экранирования:


    Символы . + ( ) не нужно экранировать никогда.

    Тире - не надо экранировать в начале или в конце 
           (где оно не задаёт диапазон).

    Символ каретки ^ нужно экранировать только в начале 
                    (где он означает исключение).

    Закрывающую квадратную скобку ], если нужен именно 
                     такой символ, экранировать нужно.

--------------------------------------------------------
    экранировать «на всякий случай», то не будет 
    никакого вреда
--------------------------------------------------------
*/


//=====================================================
//=====================================================
//=====================================================

//                  Наборы и флаг «u»

//=====================================================
//=====================================================
//=====================================================
/*
     Если в наборе есть суррогатные пары, для 
     корректной работы обязательно нужен флаг u
*/


//=====================================================
//=====================================================
//=====================================================
//                      ПРИМЕРЫ
//=====================================================
//=====================================================
//=====================================================

// Использование набора с обычным символом
{
    let reg = /[тх]оп/gi;

    // console.log("Топ хоп".match(reg));
    // ['Топ', 'хоп']
}
//----------------------------------------------------

// или то, или то
{
    let reg = /В[уа]ля/;

    // console.log("Вуаля".match(reg));
    // null
}
//----------------------------------------------------

//Поиск по диапазону от A до F или две цифры после х
{
    let reg = /x[0-9A-F][0-9A-F]/g;
    let str = "Exception 0xAF";

    // console.log(str.match(reg));
    // ['xAF']
}
//----------------------------------------------------

// многоязычный аналог \w (юникод)
{
    let str = `Hi 你好 12`;
    let reg = /[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gu;

    // console.log(str.match(reg));
    // ['H', 'i', '你', '好', '1', '2']
    /*
       \p{...} - класс юникода
        Alpha  - Alphabetic (для букв)
           M   - Mark (для акцентов)
           Nd  - Decimal_Number (для цифр)
           Pc  - Connector_Punctuation ('_' и подобных)
       Join_C  - Join_Control (лигатуры в арабском)
    */
}
//---------------------------------------------------

// любые символы, кроме латинских букв, цифр и пробелов
{
    let str = 'alice15@gmail.com';
    let reg = /[^\d\sA-Z]/gi;

    // console.log(str.match(reg));
    // ['@', '.']
}
//-----------------------------------------------------

// нет необходимости экранировать
{
    let reg = /[-().^+]/g;;
    let str = "1 + 2 - 3";

    // console.log(str.match(reg));
    // ['+', '-']
}
//-----------------------------------------------------

// Экранирование всех возможных символов
{
    let reg = /[\-\(\)\.\^\+]/g;
    let str =  "1 + 2 - 3";

    // console.log(str.match(reg));
    // ['+', '-'] тоже работает
}
//-----------------------------------------------------

// сурогатные пары класс u
{
    // console.log('𝒳'.match(/[𝒳𝒴]/));
    //  "\ud835"

    // console.log('𝒳'.match(/[𝒳𝒴]/ug));
    // ['𝒳']

    // console.log('𝒳'.match(/[𝒳-𝒴]/));
    // SyntaxError

    // console.log('𝒳'.match(/[𝒳-𝒴]/ug));
    // ['𝒳']
}

