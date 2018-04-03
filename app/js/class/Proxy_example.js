// const targetA = {
//     name: 'Billy Bob',
//     age: 15
// };

// const handlerB = {
//     get(target, key, receiver) {
//         console.log('target--', target);
//         console.log('key--', key);
//         console.log('receiver--', receiver);

//         return Reflect.get(target, key, receiver);
//     }
// };

// const pro = new Proxy(targetA, handlerB);

// console.log('targetA--', targetA.name);
// console.log('pro--', pro.name);


// 1. [抽离校验模块]		使用 Proxy 保障数据类型的准确性

// {
//     let numericDataStore = {
//         count: 0,
//         amount: 1234,
//         total: 14
//     };

//     const nds = new Proxy(numericDataStore, {
//         set(target, key, value, receiver) {
//             // console.log('target', target);
//             // console.log('key', key);
//             // console.log('value', value);
//             // console.log('receiver', receiver);
//             if (typeof value !== 'number') {
//                 throw Error(`Properties "${key}" can only be numbers`);
//             }
//             return Reflect.set(target, key, value, receiver);
//         }
//     });

//     //nds.total = '3';	//Properties "total" can only be numbers
//     nds.count = 73;
//     console.info(nds);
// }

// 如果要直接为对象的所有属性开发一个校验器可能很快就会让代码结构变得臃肿，使用 Proxy 则可以将校验器从核心逻辑分离出来自成一体：
// 如果要直接为对象的所有属性开发一个校验器可能很快就会让代码结构变得臃肿，使用 Proxy 则可以将校验器从核心逻辑分离出来自成一体：
// 如果要直接为对象的所有属性开发一个校验器可能很快就会让代码结构变得臃肿，使用 Proxy 则可以将校验器从核心逻辑分离出来自成一体：

function createValidator(target, validator) {
    return new Proxy(target, {
        _validator: validator,
        set(target, key, value, proxy) {
            if (target.hasOwnProperty(key)) {
                console.log('validator--', this._validator[key]);
                let validator = this._validator[key];
                if (!!validator(value)) {
                    return Reflect.set(target, key, value, proxy);
                } else {
                    throw Error(`Cannot set ${key} to ${value}. Invalid.`);
                }
            } else {
                throw Error(`${key} is not a valid property`)
            }
        }
    });
}

const personValidators = {
    name(val) {
        return typeof val === 'string';
    },
    age(val) {
        return typeof val === 'number' && val > 18;
    },
    sex(val) {
        return typeof val === 'number';
    }
}
//console.log('personValidators',personValidators);
class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        console.log('this--', this);
        return createValidator(this, personValidators);
    }
}

const bill = new Person('Bill', 25, 'female');
bill.name = '22';