function Prince(name, age) {
    this.gender = "male";
    this.kind = true;
    this.rich = true;
    this.name = name;
    this.age = age;

    console.log('this===>', this);
}
// Prince.prototype.toFrog=function(){
//   console.log("Prince "+this.name+" turned into a frog.");
// }

var ss = new Prince('nameaa', 222);
console.log(ss.age);

console.log('-------------------------------------------');

function Person(name) {
    this.name = name;
    //return 1;
    console.log('this===>', this);
    return { name: "cherry" }
}
var person = new Person("sheila");
console.log('person.name', person.name); //cherry
console.log('person', person); //Object {name: "cherry"}
console.log('-------------------------------------------');


//closure
{
    function foo() {
        console.log(a);
    }

    function bar() {
        let a = 3;
        foo();
    }
    let a = 2;
    foo()
}

{


    function bar2() {
        let a = 3;
        return function foo2() {
            console.log(a);
        }
    }
    let a = 2;
    var aa = new bar2();
    aa();
}
console.log('-------------------------------------------'); {
    class Point {

        constructor(x, y) {
            //this.x = x;
            this.y = y;
        }

        toString2() {
            return '(' + this.x + ', ' + this.y + ')';
        }

    }
    var point = new Point('a1', 'a22');
    console.log(point.toString2());
    console.log(point.hasOwnProperty('x'));
}

{
    var cat = {};
    Object.getPrototypeOf(cat).sex = "Male";
    cat.__proto__.age = 3;
    cat.name = 'MiMi';
    cat['master'] = 'RK';

    console.log('cat-->', cat.name, cat.age, cat.master, cat.sex);
}

{
    const myClass = class Me {
        getMyName() {
            return Me.name;
        }
    }
    let init = new myClass();
    console.log(init.getMyName());
}

