//객체 해체 할당 : 동일한 키로 매핑
//default
const {b, a, c= 30} ={a: 10, b: 20}
console.log(a,b,c)

//...f 나머지연산자 묶어서 새로운객체로 만듦
const {d, e, ...f} = {d: 10, e: 20, f:30, g:40, h:50}
console.log(d,e,f)
