// bad
var a = 1, b = 2, c = 3;

// good
const a = 1;
const b = 2;
const c = 3;

// best
const [a, b, c] = [1, 2, 3];





// bad
const a = "foobar";
const b = 'foo' + a + 'bar';

// acceptable
const c = `foobar`;

// good
const a = 'foobar';
const b = `foo${a}bar`;




const arr = [1, 2, 3, 4];

// bad
const first1 = arr[0];
const second2 = arr[1];

// good
const [first, second] = arr;




// bad
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;
  }
  
  // good
  function getFullName(obj) {
    const { firstName, lastName } = obj;
  }
  
  // best
  function getFullName({ firstName, lastName }) {
  }




  // bad
function processInput(input) {
    return [left, right, top, bottom];
  }
  
  // good
  function processInput(input) {
    return { left, right, top, bottom };
  }
  
  const { left, right } = processInput(input);



  // bad
const a = { k1: v1, k2: v2, };
const b = {
  k1: v1,
  k2: v2
};

// good
const a = { k1: v1, k2: v2 };
const b = {
  k1: v1,
  k2: v2,
};





// bad
const a = {};
a.x = 3;

// if reshape unavoidable
const a = {};
Object.assign(a, { x: 3 });

// good
const a = { x: null };
a.x = 3;






// bad
const obj = {
    id: 5,
    name: 'San Francisco',
  };
  obj[getKey('enabled')] = true;
  
  // good
  const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
  };








var ref = 'some value';

// bad
const atom1 = {
  ref: ref,

  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};

// good
const atom2 = {
  ref,

  value: 1,

  addValue(value) {
    return atom.value + value;
  },
};





// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy1 = [...items];






// bad
[1, 2, 3].map(function (x) {
    return x * x;
  });
  
  // good
  [1, 2, 3].map((x) => {
    return x * x;
  });
  
  // best
  [1, 2, 3].map(x => x * x);





  // bad
const self = this;
const boundMethod = function(...params) {
  return method.apply(self, params);
}

// acceptable
const boundMethod1 = method.bind(this);

// best
const boundMethod2 = (...params) => method.apply(this, params);





// bad
function divide(a, b, option = false ) {
}

// good
function divide(a, b, { option = false } = {}) {
}






// bad
function concatenateAll() {
    const args = Array.prototype.slice.call(arguments);
    return args.join('');
  }
  
  // good
  function concatenateAll(...args) {
    return args.join('');
  }





  // bad
function handleThings(opts) {
    opts = opts || {};
  }
  
  // good
  function handleThings(opts = {}) {
    // ...
  }





  // bad
function Queue(contents = []) {
    this._queue = [...contents];
  }
  Queue.prototype.pop = function() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
  
  // good
  class Queue1 {
    constructor(contents = []) {
      this._queue = [...contents];
    }
    pop() {
      const value = this._queue[0];
      this._queue.splice(0, 1);
      return value;
    }
  }





  // bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this._queue[0];
}

// good
class PeekableQueue1 extends Queue {
  peek() {
    return this._queue[0];
  }
}







// CommonJS ?????????
const moduleA = require('moduleA');
const func1 = moduleA.func1;
const func2 = moduleA.func2;

// ES6 ?????????
import { func1, func2 } from 'moduleA';




// ???????????????????????????????????? ESLint???

// $ npm install --save-dev eslint
// ??????????????? Airbnb ????????????????????? import???a11y???react ?????????

// $ npm install --save-dev eslint-config-airbnb
// $ npm install --save-dev eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
// ?????????????????????????????????????????????.eslintrc??????????????? ESLint???

// {
//   "extends": "eslint-config-airbnb"
// }
// ???????????????????????????????????????????????????????????????????????????

// index.js????????????????????????

var unused = 'I have no purpose!';

function greet() {
    var message = 'Hello, World!';
    console.log(message);
}

greet();

