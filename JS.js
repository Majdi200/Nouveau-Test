console.log("ready to raock");

function a() {}

const b = function() {};

const fatArrowed = () => {
  // this bindng is different for a fat arrow function.
  // and the return value can be handle in a short syntax way
  return "hey! I'm new scholl ";
};
const msg = fatArrowed();
// you call the fat arrow functions exactly the same way as regular functions.

const add = (a, b) => {
  return Number(a) + Number(b);
};
console.log(add(10, 20));

const sub = (a, b) => a - b;
// if there's only one expression to return keyword.
console.log(sub(1, 1));

// this !!

// Array Prototype
//Array.prototype is the shema defining all the rule that apply
// to the array "type" array are object dont webkitConvertPointFromPageToNode.

const instruments = [
  { type: "piano", price: 4000 },
  { type: "drum", price: 450 },
  { type: "sampler", price: 1200 },
  { type: "trumpet", price: 40 }
];

// array forEach ..loop through an array, the  functional way !

instruments.forEach((instrument, index, FullArray) => {
  console.log(instrument, instrument.type, instrument.price);
  console.log(index);
  console.log(FullArray);
});

// this for
for (let i = 0; i < instruments.length; i += 1) {
  console.log(instruments[i]);
}
// the same
instruments.forEach(instrument => console.log(instrument));

const filtredList = instruments.filter(instr => {
  return instr.price > 1000;
});

console.log(filtredList);

// Array . map

const sales = o => {
  const new0 = Object.assign({};o);// creating a copy of the curent obj 
  new0.price = o.price *0.9; // change the price  of the  copy
  return new0;// return the copy (it s pushed insied the target way)
    
};

const discountInstruments = instruments.map(sales);

// Reduce

const totalTvPrice = tvs.reduce((acc, cuurVlue, i) => {
  // the callback is the reducer

  acc += currTV.price;
  return acc;
}, 0);
//  zero here is the accumalator for the reducer
console.log(`the sum all the tvs prices: ${totalTvPrice}`);


const expensiveTv = tvs.reduce((acc, cuurVlue, i) => {
   
    if(currTV.price >= 1000) acc.push(currTV)  
    return acc;
  }, []);
  //  zero here is the accumalator for the reducer
  console.log(`expensive TV: ${expensiveTv}`);


  //Array Sort 

const Numbers= [100, 500, 200 , 8410];
const words= ["a","gff","dqsd","dsf","sdf"]; 

Numbers.sort((a,b)=> 

); 
console.log("sorted numbers ? =>"); 
console.log(Numbers); 

  