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

