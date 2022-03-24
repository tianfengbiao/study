

// 实现extend

function Parent(name) {
    this.name = name;
}

Parent.prototype.sayHi = function() {
    console.log('parent this===', this);
    return this.name;
}

function Son(age, parentName) {
    Parent.call(this, parentName);
    this.age = age;
}

Son.prototype = Parent.prototype;
Son.prototype.constructor = Son;

Son.prototype.sayHello = function() {
    console.log('son this===', this);
    return this.age;
}


var sonP = new Son(22, 'parent');
debugger
console.log('sonP====',sonP)

