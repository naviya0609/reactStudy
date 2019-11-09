
/*var arrow3 = function(a) {
  return function(b){
    return function(c){
      return a+b+c
    }
  }
}*/

//동일한 로직 끼워넣음
var arrow3 = a => b => c => console.log(a, b, c);

arrow3(1)(2)(3)

