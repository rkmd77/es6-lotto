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
console.log(person.name); //cherry
console.log(person); //Object {name: "cherry"}