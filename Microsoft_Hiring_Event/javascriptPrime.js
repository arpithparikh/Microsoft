//create function that accept n arguments 
//Array.prototype.slice(0,n)
//spread operator (...)
//any
const ary =  (fn,n)=>(...args)=>fn(...args.slice(0,n));

const firstTwoMax = ary(Math.max, 2);

[[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x)); // [6, 8, 10]

console.log("here");


//[[2,6,'a'],[8,4,6],[10]].map(x=>firestTowMax(...x));


//call
const call = (key, ...args) => context => context[key](...args);

//Promise resolve ([1,2,3])
Promise.resolve([1, 2, 3])
  .then(call('map', x => 2 * x))
  .then(console.log); //[ 2, 4, 6 ]

const map = call.bind(null, 'map');
Promise.resolve([1, 2, 3])
  .then(map(x => 2 * x))
  .then(console.log); //[ 2, 4, 6 ]