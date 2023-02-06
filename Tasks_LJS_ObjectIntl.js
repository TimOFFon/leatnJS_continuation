//==========================================================

//                      Object Intl

//==========================================================

/*
https://learn.javascript.ru/intl#intl-collator

Отсортируйте массив с буквой ё


Используя Intl.Collator, отсортируйте массив:

let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

// ... ваш код ...

console.log( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК


В этом примере порядок сортировки не должен зависеть 
от регистра.

Что касается буквы "ё", то мы следуем обычным правилам 
сортировки буквы ё, по которым «е» и «ё» считаются одной 
и той же буквой, за исключением случая, когда два слова 
отличаются только в позиции буквы «е» / «ё» – тогда слово 
с «е» ставится первым.
*/

//Решение 
//-------------------------------------------------------
let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator('ru', {
    sensitivity: 'accent'
});

animals.sort(collator.compare);

// console.log(animals); 
//['АИСТ', 'ёж', 'енот', 'ехидна', 'тигр', 'ЯК']

//Решение из учебника
//--------------------------------------------------------
/*
animal.sort((a,b) => collator.compare(a, b));
*/