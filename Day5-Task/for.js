let a = [{
    "name" : "Yazhan", 
    "age"   : "21",
    "degree" : "B.E(EEE)",
    "state": "Kerala"
},
{
    "name" : "Yazhini", 
    "age"   : "22",
    "degree" : "M.Sc",
    "state": "Karnataka"
}];
for(let i = 0; i < a.length; i++) {
    let obj = a[i];

    console.log(obj.name);
    console.log(obj.degree);
    console.log(obj.state);
}