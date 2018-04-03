/**
 * javascript原型模式(prototype)
 * 1.原型是一个对象,气他的对象可以通过他实现属性的继承
 * 所有的对象在默认的情况下都有一个原型,因为原型本身也是对象所以一个类的真正
 * 原型是被类的内部的[Prototype]属性所指出.
 * 2.什么可以称之为对象
 * 在javascript一个对象就是任何的无序的键值对的集合 function var a = {}
 * 如果它不是一个主数据类型(undefined,null,boolean,number,String)
 * 其他的通通叫做对象
 */
(function () {
    function Shape(){
        this.x = 1;
        this.y = 2
    }
    var aShape = new Shape();
    console.log('aShad-->',aShape.x,aShape.y);
})()

{
    var aa = {

    };
    aa['name'] = 'Rotorua';
    console.log(aa.name);
}

{
    function person(){};
    person.prototype.name = 'Roche';
    person.prototype.showName = function () {
        console.log('showName-->',this.name);
    }
    //person.name = "xxx";
    new person().showName();
    console.log('person name--', person)
}

{
    var cat = {};
    Object.getPrototypeOf(cat).sex = "Male";
    cat.__proto__.age = 3;
    cat.name = 'MiMi';
    cat['master'] = 'RK';

    console.log('cat-->',cat.name,cat.age,cat.master,cat.sex);
}