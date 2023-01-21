
//=====================================================

//                    Object Date

//=====================================================


/**
 *          Date - содержит дату и время, 
 *                 методы управления ими.
 */


//======================================================

//                  **** СОЗДАНИЕ *****

//======================================================


/**
 *         new Date() - используется конструктор 
 *                      new Date,
 *                      для создания объекта Date
 */


// new Date()
//-----------------------------------------------------,
// создать объект Date с текущей датой и временем
let now = new Date();
// console.log(now);
/**
 * Fri Jan 20 2023 15:17:38 
 * GMT+0300 (Москва, стандартное время)
 */
//-----------------------------------------------------'



// new Date(milliseconds)
//-----------------------------------------------------,
//создать Date с миллисекундами (тысячная доля секунды),
// прошедших с 1 января 1970 года UTC+0
let Jan01_1970 = new Date(0);
// console.log(Jan01_1970);
/**
 * Thu Jan 01 1970 03:00:00 
 * GMT+0300 (Москва, стандартное время)
 */

// добавим 24 часа (24часа * 3600млсек/60мин * 1000млсек)
let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log(Jan02_1970);
/**
 * Fri Jan 02 1970 03:00:00 GMT+0300 (Москва, стандартное
 * время)
 */
//------------------------------------------------------'



// timestamp
//------------------------------------------------------,
/**
 *           timestamp - количество миллисекунд, 
 *                      прошедших с начала 1970 года
 * 
 *           getTime() - преобразует объект Date
 *                       в timestamp
 */

let timestapExample = new Date().getTime();
// console.log(timestapExample); // 1674220018133
//-----------------------------------------------------'



// до 1 января 1970
//-----------------------------------------------------,
// отрицательный timestamp
let Dec31_1969 = new Date(-24 * 3600 * 1000);
// console.log(Dec31_1969);
/**
 * Wed Dec 31 1969 03:00:00 GMT+0300 (Москва, стандартное
 * sвремя)
 */
//-----------------------------------------------------'



// new Date(datastring)
//----------------------------------------------------,
/**
 *     new Date(datastring) - один аргумент, 
 *                            СТРОКА,
 *                            из неё прочитывается дата
 */
let todayString = new Date('2023-01-20');
// время не указано, ставится полноч по UTC
// console.log(todayString);
/**
 * Thu Jan 20 2023 03:00:00 GMT+0300 (Москва, стандартное
 * время)
 */
//----------------------------------------------------'



//new Date(year, month, date, hours, minutes, seconds, ms)
//------------------------------------------------------,
/** 
 *  Создать Date с заданными компонентами в местном
 *               часовом поясе,
 *               обязательные только первые 2 аргумен.,
 *               year/month
 * 
 *       year  - четыре цифры.
 * 
 *       month - с 0 (январь) по 11 (декабрь).
 * 
 *       date  - день месяца,
 *               если не указан ставится значение 1.
 * 
 *       hours/
 *       minutes/ 
 *       seconds/ - если не указаны ставится значение 0
 *       ms/
*/ 
let datesParam = new Date(2023, 0);
// console.log(datesParam);
/**
 * Sun Jan 01 2023 00:00:00 GMT+0300 (Москва, стандартное
 * время)
 */

let datesParamDay = new Date(2023, 0, 20);
// console.log(datesParamDay);
/**
 * Fri Jan 20 2023 00:00:00 GMT+0300 (Москва, стандартное
 * время)
 */

let datesParamHour = new Date(2023, 0, 20, 16);
// console.log(datesParamHour);
/**
 * Fri Jan 20 2023 16:00:00 GMT+0300 (Москва, стандартное
 * время)
 */
//-----------------------------------------------------'





//======================================================

//         **** ПОЛУЧЕНИЕ КОМПОНЕНТОВ ДАТЫ *****

//======================================================
/**
 * 
 *         getFullYear()   -   получить год (4 цифры)
 *         getUTCFullYear() -  для временной зоны UTC+0    
 * 
 * 
 *         getMonth()    -    получить месяц (0 - 11)
 *         getUTCMonth()  -   UTC+0
 * 
 *         
 *         getDate()   -      получить день (1 - 31)
 *         getUTCDate() -     UTC+0
 * 
 * 
 *         getDay()  -  получить день недели (0 вск - 6 сбб)
 *         getUTCDay() -      UTC+0
 * 
 * 
 *         getHours()  -       получить часы
 *         getUTCHours() -     UTC+0
 * 
 * 
 *         getMinutes() -      получить минуты
 * 
 * 
 *         getSeconds() -      получить секунды
 * 
 * 
 *         getMilliseconds() - получить миллисекунды
 * 
 * 
 *         getTime()  -        timestamp с 
 *                             1 января 1970 UTC+0
 * 
 * 
 *      getTimezoneOffset()  -  Возвращает разницу в
 *                              минутах между UTC и
 *                              местным часовым поясом
 */

// ПРИМЕРЫ----------------------------------------------,
let myDate = new Date();
let myHours = myDate.getHours();
// console.log(myHours); // 19

let utcHours = myDate.getUTCHours();
// console.log(utcHours); // 16

let mySpredTime = myDate.getTimezoneOffset();
// console.log(mySpredTime); // -180



let utcDateMinusOne = new Date(); 
let utcSpredTimeMinusOne = utcDateMinusOne.getTimezoneOffset() + 240; // UTC -1 
// (1h -> 0h -> +1h -> +2h -> +3h)
// четыре шага с локального до целевого
// 60 * 4 = 240
// console.log(utcSpredTimeMinusOne); // 60 (разница +60 до UTC)
//----------------------------------------------------------'




//======================================================

//         **** УСТАНОВКА КОМПОНЕНТОВ ДАТЫ *****

//======================================================
/**
 *            setFullYear(year, [month], [date])
 *            setUTC
 * 
 *            setMonth(month, [date])
 *            setUTC
 * 
 *            setdate(date)
 *            setUTC
 * 
 *            setMinutes(min, [sek], [ms])
 *            setUTC
 * 
 *            setSeconds(sec, [ms])
 *            setUTC
 * 
 *            setMilliseconds(ms)
 *            setUTC
 * 
 *            setTime(milliseconds) дата в миллисекундах
 *                                  с 01.01.1970 UTC
 */





//======================================================

//            **** АВТОИСПРАВЛЕНИЕ ДАТЫ *****

//======================================================
/**
 * 
 *           Автоисправление - даты вне обычного 
 *                             диапазона значений
 *                             исправляются оъектом.
 *                             
 */
// Распределение лишних дней
//--------------------------------------------------,
let overloadDate = new Date(2023, 0, 35);
// console.log(overloadDate); // Sat Feb 04 2023

let overloadDate2 = new Date(2023, 1, 28);
overloadDate2.setDate(overloadDate2.getDate() + 2);
// console.log(overloadDate2); // Thu Mar 02 2023
//-------------------------------------------------------'



//-------------------------------------------------------,
// Механизм "автоиправления" используется для получения
// дат после заданых отрезков времени
let setTimePeriod = new Date();
let startPeriod = setTimePeriod.getSeconds();

setTimePeriod.setSeconds(setTimePeriod.getSeconds() + 5);

let finishPeriod = setTimePeriod.getSeconds();

// console.log(`СТАРТ: ${startPeriod}, КОНЕЦ ТАЙМЕРА: ${finishPeriod}`);
// СТАРТ: 11, КОНЕЦ ТАЙМЕРА: 16
//---------------------------------------------------------'


//----------------------------------------------------------,
// нулевые и отрицательные значения
let lateDay = new Date(2023, 0, 2); // 2 Jan

lateDay.setDate(1); // задаём позднее число
// console.log(lateDay); // Sun Jan 01 2023

lateDay.setDate(0); // отрицательное значение для Jan
// console.log(lateDay); // Sat Dec 31 2022 (автоисправление)
//----------------------------------------------------------'