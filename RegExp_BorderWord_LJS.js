//=====================================================
//=====================================================
//=====================================================
//=====================================================
//=====================================================
//=====================================================

//                   Объект RegExp

//                 Граница слова: \b

//=====================================================
//=====================================================
//=====================================================
//=====================================================
//=====================================================
//=====================================================
/*
          Граница слова \b – проверка, как ^ и $

      Мы можем использовать \b не только со словами, 
                    но и с цифрами.

    --------------------------------------------------
    Граница слова \b не работает для алфавитов, 
    не основанных на латинице!!!
    --------------------------------------------------

    Когда движок регулярных выражений видит \b, 
    он проверяет, что позиция в строке является 
    границей слова.

Есть три вида позиций, которые являются границами 
слова:

Начало текста, если его первый символ \w.

Позиция внутри текста, если слева находится \w, 
а справа – не \w, или наоборот.

Конец текста, если его последний символ \w.
Например, регулярное выражение \bJava\b будет найдено 
в строке Hello, Java!, где Java – отдельное слово, 
но не будет найдено в строке Hello, JavaScript!.
*/
//=================================================
//                    ПРИМЕРЫ
//=================================================
{
    // console.log("Hello, Java!".match(/\bJava\b/));
//['Java', index: 7, input: 'Hello, Java!', 
//groups: undefined]

// console.log("Hello, JavaScript!".match(/\bJava\b/));
// null

// console.log( "Hello, Java!".match(/\bHello\b/) ); 
// Hello

// console.log( "Hello, Java!".match(/\bJava\b/) );  
// Java

// console.log( "Hello, Java!".match(/\bHell\b/) );  
// null (нет совпадения)

// console.log( "Hello, Java!".match(/\bJava!\b/) ); 
// null

// console.log( "1 23 456 78".match(/\b\d\d\b/g) ); 
// 23,78

// console.log( "12,34,56".match(/\b\d\d\b/g) ); 
// 12,34,56
}

//==================================================
//==================================================
//==================================================
//                ПОВТОРЕНИЕ
//==================================================
//==================================================
//==================================================

/*
        \b - граница слова

        используется с \w \d

        Алгоритм проверки:
        1) Начало текста - если первый символ \w \d
        2) Внутри - слева \w \d справа нет, и наоборот
        3) Конец - последний символ \w \d
*/

//====================================================
//====================================================
//                      ЗАДАЧА
//====================================================
//====================================================
/*    Найдите время
       
Время имеет формат: часы:минуты. 
И часы, и минуты имеют две цифры, например, 09:00.

Введите регулярное выражение, чтобы найти время 
в строке: Завтрак в 09:00 в комнате 123:456.

P.S. В этой задаче пока нет необходимости 
проверять правильность времени, поэтому 25:99 
также может быть верным результатом.

P.P.S. Регулярное выражение не должно находить 123:456.
 */
{//--------- РЕШЕНИЕ -----------
   
    let str = 'Завтрак в 09:00 в комнате 123:456.';
    let regexp = /\b\d\d\:\d\d\b/g;
    let result = str.match(regexp).join('');
    // console.log(result); // 09:00
}