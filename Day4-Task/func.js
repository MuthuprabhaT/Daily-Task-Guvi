// 1. Print odd numbers in an array.
//anonymous:
let a =[1,2,3,4,5,6,7,8,9,10];
let b = function(){
    for(var i = 0 ; i< a.length ; i++){
          if(a[i]%2!=0){
             console.log(a[i]);
     }
  }
}
b();

//IIFE:
(function(a){
    for(var i = 0 ; i< a.length ; i++){
               if(a[i]%2!=0){
                  console.log(a[i])
               } 
          }
    })([1,2,3,4,5,6,7,8,9,10]);

//arrow:
let a =[1,2,3,4,5,6,7,8,9,10];
let b = () => {
    for(var i = 0 ; i< a.length ; i++){
          if(a[i]%2!=0){
             console.log(a[i]);
     }
  }
}
b();

//2. Convert all the strings to tittle caps in a string array
//anonymous:
let str="converting string to tittle case";
let b=function () {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
   return str.join(' ');
  }
  console.log(b());

//IIFE:
(function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
   console.log(str.join(' '));
  })
  ("converting string to tittle case");

  //arrow:
  let str="converting string to tittle case";
  let b=()=> {
  str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
   return str.join(' ');
  }
  console.log(b());

//3. Sum of all numbers in an array
//anonymous:
let a = [1,2,3,4,5]
let b = a.reduce(function(x,y){
    return x+y;
},)
console.log(b);

//IIFE:
(function (a){
   let b= a.reduce(function(x,y){
   return x+y;
});
console.log(b);
})([1,2,3,4,5]);

//arrow:
let a = [1,2,3,4,5]
let b = a.reduce((x,y) => {
    return x+y;
},)
console.log(b);

//4. Return all prime numbers in an array.
//anonymous:
let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,977,975,6997]
let b=function(){
    numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
}
    return true;
});
    console.log(numArray);
}
b();

//IIFE:
(function(numArray){
    numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
        return true;
    });
       console.log(numArray);
})([1,2,3,4,5,6,7,8,9,10,11,12,13,977,975,6997])

//arrow:
let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,977,975,6997]
let b=()=>{
    numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
}
    return true;
});
    console.log(numArray);
}
b();

