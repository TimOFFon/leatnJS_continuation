//=========================================================
//=========================================================
//=========================================================
//=========================================================
/*
https://www.codewars.com/kata/563c13853b07a8f17c000022

8 kyu
Is the date today

Напишите простую функцию, которая принимает дату 
в качестве параметра и возвращает логическое значение, 
представляющее, сегодняшняя дата или нет. 
Убедитесь, что ваша функция не возвращает 
ложное срабатывание, проверяя только день. 
*/
// Решение
//--------------------------------------------------
function isToday(date) {
    let today = new Date().toDateString();
    if(today === date.toDateString()) {
        return true;
    } else {
        return false;
    }
  }

/*
Более эстэтичесиое написание с codewars:
function isToday(date) {
  return new Date().toDateString() === date.toDateString();
}
 */





//=========================================================
//=========================================================
//=========================================================
//=========================================================
/*
https://www.codewars.com/kata/602afedfd4a64d0008eb4e6e

6 kyu
Determine the date by the day number

Какая дата соответствует n-му дню года?
Ответ зависит от того, является ли год високосным или нет.

Напишите функцию, которая поможет вам определить дату, 
вы знаете номер дня в году, а также является ли 
год високосным или нет.
Функция принимает номер дня и логическое значение isLeap 
в качестве аргументов и возвращает соответствующую 
года в виде строки «Месяц, день».
Будут проверены только допустимые комбинации номера дня 
и isLeap.

Примеры:

* With input `41, false` => return "February, 10"
* With input `60, false` => return "March, 1
* With input `60, true` => return "February, 29"
* With input `365, false` => return "December, 31"
* With input `366, true` => return "December, 31"
*/

// Решение
//------------------------------------------------

function getDay(day, isLeap){
    let months = ['January', 
                 'February', 
                 'March', 
                 'April', 
                 'May', 
                 'June', 
                 'July', 
                 'August', 
                 'September', 
                 'October', 
                 'November', 
                 'December'];
    let year = null;
    if(isLeap) {
        year = new Date(2000, 0, 1);
    } else {
        year = new Date(2001, 0, 1);
    }
    year.setDate(year.getDate() + (day - 1));
    return  `${months[year.getMonth()]}` + `, ` + `${year.getDate()}`;
}

// Код с codewars (ПРИМЕР ИСПОЛЬЗОВАНИЯ DateTimeFormat())
//--------------------------------------------------------
/*
const monthFormat = Intl.DateTimeFormat('en-US', { month: 'long' });
const dayFormat = Intl.DateTimeFormat('en-US', { day: 'numeric' });

function getDay(day, isLeap){
  
  if(day > 365 + isLeap) {
    return "wrong day";
  }
  
  let date = new Date(2005 - isLeap, 0, day);    
  return `${monthFormat.format(date)}, ${dayFormat.format(date)}`;
}
*/


// Код с codewars (ПРИМЕР ИСПОЛЬЗОВАНИЯ toLocaleString())
//----------------------------------------------------------
/*
function getDay(day, isLeap) {
  
  const d = new Date(1999 + isLeap, 0, day);
  
  return d.toLocaleString('en', { month: 'long' }) + ', ' + d.getDate();
  
}
*/


// Ещё один пример toLocaleString()
//--------------------------------------------------------
/* 
  const getDay = (day, isLeap) =>
  new Date(2021 - isLeap, 0, day)
  .toLocaleDateString(`en`, {month: 'long', day: 'numeric'})
  .replace(` `, `, `); 
*/


// Ещё один пример toLocaleString()
//-------------------------------------------------------
/*
function getDay(day, isLeap){
   
  const date = isLeap
  ? new Date(1004, 0, day).toLocaleString('default', { month: 'long', day: 'numeric' })
  : new Date(2021, 0, day).toLocaleString('default', { month: 'long', day: 'numeric' });
  
  return date.split(' ').join(', ');
}
*/






//=========================================================
//=========================================================
//=========================================================
//=========================================================
/*
https://www.codewars.com/kata/53988ee02c2414dbad000baa/train/javascript

6 kyu
Pretty date


Напишите вспомогательную функцию, которая принимает 
объект Time и преобразует его в более понятный для 
человека формат. Вам нужно только подняться 
до «_ недели назад».

toPretty(0) => "только что"

toPretty(40000) => "11 часов назад"


Результатом будет количество времени t, включенное в одну 
из следующих фраз: «только что», «[t] секунд назад», 
«[t] минут назад», «[t] часов назад», «[ t] дней назад", 
"[t] недель назад".

Вам придется обрабатывать единичные случаи. 
То есть, когда t = 1, формулировка будет одной из 
«секунду назад», «минуту назад», «час назад», 
«день назад», «неделю назад».

Количество времени всегда округляется до ближайшего 
целого числа. 

Например, если количество времени на самом деле 
составляет 11,73 часа назад, возвращаемое значение 
будет «11 часов назад».

Будет указано только время в прошлом, с диапазоном от 
«только что» до «52 недели назад».
*/

// Решение
//---------------------------------------------------

function toPretty(seconds){
    if (!seconds) return 'just now';
    if(seconds < 60) {
        let sec = seconds;
        return (sec < 2) ? `a second ago` : `${sec} seconds ago`;
    } 
    if(seconds < 3600) {
        let min = Math.floor(seconds / 60);
        return (min < 2) ? `a minute ago` : `${min} minutes ago`;
    } 
    if(seconds < 86400) {
        let hour =  Math.floor(seconds / 3600);
        return (hour < 2) ? `an hour ago` : `${hour} hours ago`;
    } 
    if(seconds < 604800) {
        let day = Math.floor(seconds / 86400);
        return (day < 2) ? `a day ago` : `${day} days ago`;
    } 
    if(seconds > 604800) {
        let week = Math.floor(seconds / 604800);
        return (week < 2) ? `a week ago` : `${week} weeks ago`;
    } 
  }






//=========================================================
//=========================================================
//=========================================================
//=========================================================
/*
https://www.codewars.com/kata/53a257d83cacabb1fd0007d3


7 kyu
Dangerous Dates



Исправьте эту функцию, чтобы она правильно выводила 
список следующих пяти дней (начиная с даты ввода). 

Каждая дата должна быть в формате M/D/YYYY. 

то есть 12 марта 2013 года будет 3/12/2013.

Пример вывода: 
"14.03.2013, 15.03.2013, 16.03.2013, 
17.03.2013, 18.03.2013"

Есть трудный способ сделать это, и есть правильный путь.
*/

/*
var nextFiveDays = function(date){
    var day = date.getDate(),
    month = date.getMonth(),
    dates = [];

    for (var i = 0; i <= 5; i++) {
      dates.push(month + '/' + (day + i));
    }
    
    return dates.join(', ');
}
*/
// Решение
//------------------------------------------------------

var nextFiveDays = function(date){
    let dates = [];

    for (var i = 0; i < 5; i++) {
      date.setDate(date.getDate() + 1);
      dates.push(date.toLocaleDateString('en-US'));
    }
    
    return dates.join(', ');
}

// ИНТЕРЕСНЫЕ РЕШЕНИЯ С CODEWARS
//-------------------------------------------------------
/*
// Array.apply
//--------------------------------------
var nextFiveDays = function(date){
  return Array.apply(null, Array(5)).map(() => {
    date.setDate(date.getDate() + 1);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  }).join(', ');
}
//---------------------------------------


// Array.map
//---------------------------------------
const nextFiveDays = date =>
  [...Array(5)].map(() => (date.setDate(date.getDate() + 1), 
  date.toLocaleDateString(`en-US`))).join(`, `);
//------------------------------------


// Array.apply & Array.map
//-------------------------------------------
var nextFiveDays = function(date){
  return Array.apply(null, Array(5)).map(() => {
    date.setDate(date.getDate() + 1);
    return `${date.getMonth() + 1}
    /${date.getDate()}/${date.getFullYear()}`;
  }).join(', ');
}


// Интересное решение с миллисекундами
//--------------------------------------------
const format = d => [
  d.getMonth()+1,
  d.getDate(),
  d.getFullYear()
].join`/`

// 
const nextFiveDays = function(date) {
  const res = [];
  for (let i = 0; i < 5; ++i) {
    date.setMilliseconds(date.getMilliseconds() + 1e3 * 3600 * 24);
    res.push(format(date));
  }
  return res.join`, `;
}
//-------------------------------------------------


// Непонятное решение
//---------------------------------------------------
var nextFiveDays = function(date) {
    return [1, 2, 3, 4, 5].map(delta => {
      const d = new Date(date.getTime() + 86400000 * delta);
      return `${d.getMonth()+1}/${d.getDate()}/${1900 + d.getYear()}`;
    }).join(', ');
}
//---------------------------------------------------
*/






//=========================================================
//=========================================================
//=========================================================
//=========================================================
/*
https://www.codewars.com/kata/5887140d2640aea82f0000d3/train/javascript

7 kyu
#~For Kids~# Date decryption.


#~Детские испытания~#
Это ката противоположно моему другой кате: «See Here!»
Здесь ваша задача написать функцию, 
которая принимает зашифрованную дату в формате 
(ASCII CODE = AC) ACAC-AC-AC(String) 
и возвращает ее в расшифрованном формате 
(обычная дата в ГГГГ-мм-дд), 
для этого вы сломаете строку зашифрованной даты, 
для каждого символа даты (кроме «-») 
переведите ее в код ASCII, 
вычтите из нее 50 и верните результат, 
переведенный в соответствии с таблицей ASCII 
с «-» между ними.

Example: 
"FC-3-G" ->(ASCII Translation)-> 
-> You will get 70 67 - 51 - 71 
(for each of then -50)-> 20 17 - 1 - 21 -> 
-> "2017-01-21"

"Et->-9" -> "1966-12-07"
*/

// console.log(`9`.charCodeAt(0));

function translateDate(dateStr){
    let workArr = [];
    let workStr = '';
    for (let i = 0; i < dateStr.length; i++) {
        if(dateStr[i] !== '-') {
            workArr.push(+dateStr[i].charCodeAt(0) - 50);
        }
    }

    if (workArr[1] < 10) {
        workArr[1] = '0' + workArr[1];
    } else {
        workArr[1] = '' + workArr[1];
    }

    workArr.forEach((item, index) => {
        if(index > 1 && index !== workArr.length) {
            workStr += '-';
        }
        workStr += item;
        return workStr;
    });

    let date = new Date(workStr);
    workStr = date.toJSON().slice(0, 10);
    return console.log(workStr);
}
// console.log('F'.charCodeAt(0));
// translateDate('F4-4-4');


//Интересные решения с CODEWARS
//--------------------------------------------------------

// Решение на регулярках в крутом минимализме
/*
function translateDate(s) {
  return s.replace(/[^-]/g, c => {
    c = c.charCodeAt() - 50
    return c >= 10 ? c : '0' + c
  })
}
*/

// мап-рестпараметры-минимализм-----------
/*
const translateDate = (dateStr) => 
[...dateStr].map(x => x !== '-' ? x.charCodeAt() - 50 : x)
.map(x => x < 10 ? '0' + x : x).join('')
 */


//Не понятное решение-----------------------
/*
function translateDate(d){
  var D=d.split('-')
  return `${(D[0].charCodeAt(0)-50).toString().
    padStart(2, 0)}${(D[0].charCodeAt(1)-50).toString()
        .padStart(2, 0)}-${(D[1].charCodeAt()-50).toString()
            .padStart(2, 0)}-${(D[2].charCodeAt()-50).toString()
                .padStart(2, 0)}`
}
*/






//=========================================================
//=========================================================
//=========================================================
//=========================================================
/*
https://www.codewars.com/kata/58870b572640aeb910000098/train/javascript

7 kyu
#~For Kids~# Date encryption.


Ваша задача состоит в том, чтобы написать функцию, 
которая принимает дату в формате Y-m-d (String) и 
возвращает ее в зашифрованном формате, для этого вы 
разбиваете строку даты, каждые 2 символа даты (кроме '-') 
являются ASCII числовой код добавляет к нему 50 и возвращает 
результат, переведенный в соответствии с таблицей ASCII, 
с «-» между ними.


Example: "2017-01-21" -> 
You will get 20 17 - 01 - 21 (for each of then +50)-> 
70 67 - 51 - 71 ->(ASCII Translation)-> "FC-3-G"

"1966-12-07" -> "Et->-9"
*/


//Решение
//---------------------------------------------------------
let ex1 = '2017-01-21'; //'FC-3-G'
let ex2 = '1966-12-07'; //'Et->-9'
let ex3 = '2010-07-29'; //'F<-9-O'
let ex4 = '2002-02-02'; //'F4-4-4'
let ex5 = '2055-11-11'; //'Fi-=-='

function translateDate(dateStr){
    let str = '';
    let workArr2 = [];
    let [...workArr1] = dateStr.split('')
                       .filter(item => (item !== '-'))
                       .map((item,index) => {
                        str += item;
                        if(index % 2 !== 0) {
                            workArr2.push(+str + 50);
                            str = '';
                        }
                    });
    workArr2 = workArr2.map((item, index) => {
       item = String.fromCharCode(item);
       if(index <= 1) {
        str += item;
       } else {
        str += '-' + item;
       }
       return item;
    });
    

    return console.log(str);
  }

//   translateDate(ex1); // FC-3-G
//   translateDate(ex2); // Et->-9
//   translateDate(ex3); // F<-9-O
//   translateDate(ex4); // F4-4-4
//   translateDate(ex5); // Fi-=-=


// ИНТЕРЕСНЫЕ РЕШЕНИЯ С CODEWARS
//------------------------------------------------------

// Супер минимализм на регулярках
/*
function translateDate(s) {
  return s.replace(/\d\d/g, x => String.fromCharCode(+x + 50))
}
 */


//Регулярки и МАП------------------------
/*
function translateDate(dateStr){
  return dateStr.replace(/-/gi,"")
          .match(/.{1,2}/g)
          .map(i => String.fromCharCode(parseInt(i)+50))
          .join("-").replace(/-/,"");
}
*/


// Супер ПРОСТО!--------------------------
/*
function translateDate(d){
  return String.fromCharCode(+(d[0]+d[1])+50)
        +String.fromCharCode(+(d[2]+d[3])+50)+
        '-'+String.fromCharCode(+(d[5]+d[6])+50)+
        '-'+String.fromCharCode(+(d[8]+d[9])+50)
}
*/







//=========================================================
//=========================================================
//=========================================================
//=========================================================
/*
https://www.codewars.com/kata/533b0d5e7abec41550000a9e/train/javascript

6 kyu
JSON.parse Date Reviver


Ваша задача состоит в том, чтобы написать функцию 
JSON_Date_reviver() для возврата реального объекта Date, 
когда переданное значение является одной из этих строк даты. 

Однако, если это не «строка даты», исходное значение 
должно быть возвращено как есть.

Для справки, вот несколько примеров "строки даты"
*/
let dStr1 = "2014-04-01T18:51:35.275Z"; // 1396378295275
let dStr2 = "1994-10-03T07:48:15.704Z"; // 781170495704
let dStr3 = "1986-12-24T03:49:25.419Z"; // 535780165419
let dStr4 = "+198456-09-18T00:02:27.626Z"; // 6200521833747626
let dStr5 = "-260424-08-20T15:37:04.134Z"; // -8280334801375866
let dStr6 = "+080521-01-20T03:54:16.348Z"; // 2478831825256348



//Решение
//----------------------------------------------------------


function JSON_Date_reviver(key, value) {
    // ... ОТЛОЖЕННО ДО СЛЕДУЮЩЕЙ ТЕМЫ
}







//=========================================================
//=========================================================
//=========================================================
//=========================================================
/*
https://www.codewars.com/kata/5b925cd69cc49d4d87000117/train/javascript

5 kyu
one line task : date converter (not that date, the other one)


Дан период даты в следующем формате:

vvvv----------- Год
ГГГГММ
     ^^--------------- Месяц
Пример ввода может выглядеть так:

vvvv---------------- 4-значный код года (2018)
201809
     ^^--------------- 2-значный код, обозначающий месяц 
     (сентябрь)
Выведите тот же период даты в следующем формате:

  vvv-------------------------- 3 символа для месяца
  МММГГ
     ^^---------------- Последние 2 цифры года
Выход для вышеуказанного ввода будет:

  vvv------------------- Месяц (сентябрь)
  18 сент.
     ^^------------- Год (2018)
Обобщение:

Данные на входе в формате ГГГГММ, на выходе в формате МММГГ.

Последние две цифры ввода будут соответствовать месяцу.

Таблица для них представлена в виде:

{
  '01' : 'Jan'
  '02' : 'Feb',
  '03' : 'Mar',
  '04' : 'Apr',
  '05' : 'May',
  '06' : 'Jun',
  '07' : 'Jul',
  '08' : 'Aug',
  '09' : 'Sep',
  '10' : 'Oct',
  '11' : 'Nov',
  '12' : 'Dec',
 }
 
Вывод всегда должен состоять из следующего:

первые три символа месяца (используйте таблицу выше) 
и последние два символа года (из ввода).

Условия :
Ввод всегда будет состоять из шести цифр.
Первые четыре цифры всегда будут обозначать год.
Последние две цифры ввода будут представлять код месяца.
Код будет от 01 --- 12
Ввод всегда будет действительным
Первый символ месяца должен быть заглавным, а остальные 
должны быть маленькими.

Ограничения :
Вы не должны ничего импортировать
Вы должны выполнить задание в меньше/равно 52 байтам
Вы не должны использовать более одной строки
*/

// Решение
//--------------------------------------------------
let S1 = '201809'; // 'Sep18'
let S2 = '999901'; //'Jan99'
let S3 = '332211'; // 'Nov22'
let S4 = '201807'; // 'Jul18'
let S5 = '000001'; // 'Jan00'
let S6 = '654312'; // 'Dec43'

// f=S=>new Date(S.split(/(\d{4})/)).toString().slice(4,7)+S[2]+S[3];
// console.log(f(S1)); Sep18 (66)

F=S=>(''+new Date(S.slice(-2))).slice(4,7)+S[2]+S[3]
// console.log(F(S1)); // Sep18 (52)
// console.log(F(S2)); // Jan99 (52)
// console.log(F(S3)); // Nov22 (52)
// console.log(F(S4)); // Jul18 (52)
// console.log(F(S5)); // Jan00 (52)
// console.log(F(S6)); // Dec43 (52)

// НЕ РЕШИЛ -----------------------
/*
Number of chars = 66, max = 52
oops, get rid of 14
*/

// В ЧЁМ ПОДВОХ ------------------
/*
1) Не надо было использовать .toString(), new Date и так
   возвращает дату
2) В конструктор даты можно было подавать только месяц
3) Перед тем как испольховать slice преобразовать 
   Date в строку!
 */

//РЕШЕНИЯ С CODEWARS--------------
/*
       f=i=>`${new Date(i[4]+i[5])}`.substr(4,3)+i[2]+i[3]

       f=i=>(''+new Date('-'+i%100)).slice(4,7)+i[2]+i[3]

       f=i=>(new Date(i[4]+i[5])+i).slice(4,7)+i[2]+i[3]

       f=_=>(new Date(_%100+``)+0).slice(4,7)+_[2]+_[3]

       f=i=>(new Date(0,i%100-1)+'').slice(4,7)+i[2]+i[3]

       f=e=>(new Date(e.slice(4))+'').slice(4,7)+e[2]+e[3]
*/







//=========================================================
//=========================================================
//=========================================================
//=========================================================
/*
https://www.codewars.com/kata/56d2eada54d686d034000516/train/javascript

6 kyu
Angular date formatter


Angular предоставляет фильтр для правильного отображения дат. 
Для этого ката мы будем учитывать только дату и формат 
(и оставим часовой пояс в стороне).

Упростим возможные представления до следующего:

**yyyy** : 4 digit representation of a year,padded (1970-9999)
**yy** : 2 digit representation of a year, padded (00-99)
**MM** : Month in a year, padded (01-12)
**M** : Month in a year (1-12)
**dd** : Day in a month, padded (01-31)
**d** : Day in a month (1-13)
**HH** : Hour in a day, padded (00-23)
**H** : Hour in a day (0-23)
**mm** : Minute in hour, padded (00-59)
**m** : Minute in hour (0-59)
**ss** : Second in minute, padded (00-59)
**s** : Second in minute (0-59)

Функция dateFilter должна принимать два аргумента: date, format.

date - может быть объектом Date, числом или 
строкой (конвертируемой в число)
format - это формат вывода. 

Вот некоторые примеры :
'HH:mm' // Can return something like '12:04'
'dd/MM/yyyy' // Can return something like '01/02/1995'
'd/M/yy H%m' // Can return something like '1/31/14 1%59'

Там, где есть нечетное количество букв, 
сначала разберите самую длинную, а затем оставшиеся, 
если это необходимо. 
Например, yyy следует анализировать как [yy]y, 
а ddd — как [dd][d].

Когда имеется более 2 MdHms, 
например, dddd, он должен анализироваться как [dd][dd].
*/

//Решение
//---------------------------

function dateFilter(date,format){
    //Format this date !
}