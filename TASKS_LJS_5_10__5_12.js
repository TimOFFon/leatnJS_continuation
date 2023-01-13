
//=====================================================

//   LJS 5.10    Деструктурирующее присваивание

//=====================================================

// Задача №1 ---------------  3min  --------------------
// У нас есть объект:
let user = {
    name: "John",
    years: 30
  };
  /**
   * Напишите деструктурирующее присваивание, которое:
   * свойство name присвоит в переменную name.
   * свойство years присвоит в переменную age.
   * свойство isAdmin присвоит в 
   * переменную isAdmin (false, если нет такого свойства)
   */
  //Решение:
  let {name = name, years: age = years, isAdmin = false} = user;

//   console.log(name); // John
//   console.log(age); // 30
//   console.log(isAdmin); // false



// Задача №2 --------------  8min  ---------------
// "Минимальная зарплата"
// У нас есть объект salaries с зарплатами:
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  /**
   * Создайте функцию topSalary(salaries), которая
   * возвращает имя самого высокооплачиваемого сотрудника.
   * 
   * Если объект salaries пустой, то нужно вернуть null.
   * Если несколько высокооплачиваемых сотрудников, можно
   * вернуть любого из них.
   * P.S. Используйте Object.entries и деструктурирование,
   * чтобы перебрать пары ключ/значение.
   */

  // Решение:
let emptyObj = {};

  function topSalary(obj) {
    let maxName = null;
    let maxValue = null;
    for(let [name, value] of Object.entries(obj)) {
        if(value > maxValue) {
            maxValue = value;
            maxName = name;
        }
    }
    return console.log(maxName); 
  }

//   topSalary(salaries); // Pete
//   topSalary(emptyObj); // null