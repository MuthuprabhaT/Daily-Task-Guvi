//1. How to compare two JSON have the same properties without order?

let obj1 = {name:"Person 1", age:5};
let keys1 = Object.keys(obj1).sort();
console.log(keys1);

let obj2 ={age:5, name:"Person 1"};
let keys2 = Object.keys(obj2).sort();
console.log(keys2);

console.log(JSON.stringify(keys1));
console.log(JSON.stringify(keys2));

if(JSON.stringify(keys1)===JSON.stringify(keys2)){
    console.log("Equal");
}
else{
    console.log("Not Equal");
}