//배열 해체 할당 (destructing assignment) : 순서대로 할당
//default param - undefined 일때 30 할당
const [a,b,c = 30] = [10,20]
console.log(a,b,c)
// 10 20 30

const [d, e, ...f] = [10,20,30,40,50,60]
console.log(d,e,f)
// 10 20 [ 30, 40, 50, 60 ]
//...f 나머지연산자 묶어서 배열로 만듦