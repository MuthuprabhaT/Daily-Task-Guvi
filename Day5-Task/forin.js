var a = [ {"name":"Vikram", "profession": "Actor"}, {"name":"Sid Sriram", "profession": "singer"}];
for (var i = 0; i < a.length; i++){
  var b = a[i];
  for (var key in b){
    var value = b[key];
    console.log(key + ": " + value);
  }
};