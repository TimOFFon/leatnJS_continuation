{ //=========== Global контекст =============

    // console.log(this === window); // true  
}




{ //=========== Function контекст ============

    function f1() {
        return this;
    }

    // console.log(f1() === window); // true

    function f2() {
        'use strict'; //<----- !!!!
        return this;
    }

    // console.log(f2() === undefined); // true  
}



{//=========== Function контекст (call, apply)
    // ПРИМЕР 1

    const obj = {a: 'Custom'};

    var a = 'Global';

    function whatsThis() {
        return this.a;
    }

    // console.log(whatsThis()); // Global
    // console.log(whatsThis.call(obj)); // Custom
    // console.log(whatsThis.apply(obj)); // Custom

}

{   // ПРИМЕР 2

    function add(c, d) {
        return this.a + this.b + c + d;
    }

    let obj = {a: 5, b: 5};

    // console.log(add.call(obj, 5, 5)); // 20

    // console.log(add.apply(obj, [5,5])); // 20

    // console.log(add.call(5)); // NaN
    // в не строгом [object Number]

    // console.log(add.apply('foo')); // NaN
    // в не строгом [object String]
}



{// ================ Метод bind ================

    function f() {
        return this.a;
    }

    let obj1 = {a: 'obj-1'};
    let obj2 = {a: 'obj-2'};

    let func1 = f.bind(obj1);
    let func2 = func1.bind(obj2);// only once!!

    // console.log(func1()); //obj-1
    
    // console.log(func2()); //obj-1

}



{// =========== Стрелочные функции ===========

    var globalObj = this;

    let foo = (() => this);

    // console.log(foo() === globalObj);// true


    let obj = {method: foo};

    // console.log(obj.method() === globalObj); //true

    // console.log(foo.call(obj) === globalObj); // true

    // console.log(foo.bind(obj) === globalObj);// true

    let obj2 = {
        bar: function() {
            var x = (() => this);
            return x;
        }
    };

    let fn = obj2.bar(); // зап. вызов
    // console.log(fn()); // {bar: ƒ}
    // console.log(fn() === obj2); // true

    let fn2 = obj2.bar; // зап. функ. bar
    // console.log(fn2()());// window
}




{// ============ в методе объекта ===========

    let obj = {
        value: 55,
        f: function() {
            return this.value;
        }
    };

    // console.log(obj.f()); // 55---------------

    let obj2 = {value: 77};

    function freeFunc() {
        return this.value;
    }

    obj2.f = freeFunc;
    // console.log(obj2.f()); // 77--------------

    let obj3 = {
        value: 99,//<-----------дальше
        sss: {
            f: freeFunc,//<---- близкие
            value: 100//<------ близкие
        }
    };
    console.log(obj3.sss.f());// 100 -----------
}