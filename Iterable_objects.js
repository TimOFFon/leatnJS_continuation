

///              Перебираемые объекты

/**
 * Перебираемые объекты - концепция, позволяющая использовать
 *                       любой объект в цикле for..of.
 *                       Массивы и строки.
 */
/* Можно сделать перебираемый объект из обычного объекта */

// Добавляем встроенный метод  -  Symbol.iterator

/**
 * Когда запускается цикл for..of, он вызывает этот метод
 * один раз, если этого метода нет, цикл вернёт ошибку.
 */

/**
 * Symbol.iterator - при запуске цикла должен вернуть 
 * ИТЕРАТОР (объект с методом next())
 */

/**
 * Дальше for..of работает только с методом next()
 */

/**
 * Результат вызова next() должен иметь вид
 *         {done: Boolean, value: any}
 * где done=true означает, что цикл завершен,
 * иначе value содержиточередное значение
 */

let range = {
    from: 1,
    to: 10
};
// 1. вызов for..of сначало вызывает эту функцию
range[Symbol.iterator] = function() {

    // ...она возвращает объект итератора:
    // 2. Далее, for..of работает только с этим итератором,
    //    запрашивая у него новые значения:
    return {
        current: this.from,
        last: this.to,
    

    // 3. next() вызывается на каждой итерации цикла
    //    цикла for..of
    next() {
        // 4. он должен вернуть значение в виде объекта
        // {done:.., value:..} 
        if(this.current <= this.last) {
            return {done: false, value: this.current++};
        } else {
            return {done: true};
        }
    }
    };
};

range[Symbol.iterator]();
// nтеперь ОБЫЧНЫЙ объект стал ИТЕРИРУЕМЫМ
for(let num of range) {
    console.log(num);
}

