let book = {title: "인사이드 자바스크립트", price: 18000};
// *** shallow comparison 데이터 변경시 렌더링 -- 중요함
// , but sallow copy 일때는 주소값을 참조해서 값이 바뀌어도 렌더링안함

// 메모리주소 복사 shallow copy
// 1. book을 카피한후에  price를 바꾸면 book과 copyBook이 같이 바뀐다. 이유가 무엇인가?
// let copyBook = book;
// copyBook.price = 20000;
// console.log(book);
// console.log(copyBook);

// 메모리값 복사 후 생성 deep copy
// 2. book을 카피하되 deep copy를 수행한 후에 price를 30000으로 바꾸고 출력하라. 두개의 값이 달라야 한다.
// 2-1 Object.assign() 사용하여 deep copy하기
let copyBook2 = Object.assign({}, book); //target 있어야 새로운 객체로 리턴, 없으면 주소값 리턴
copyBook2.price = 30000;
console.log(book);
console.log(copyBook2);
// 2-2 es6 spread 연산자를 사용하여 deep copy 하기
let copyBook3 = {...book} // a = {} 객체생성 후 ... book을 spread 펼쳐라
copyBook3.price = 40000;
console.log(book);
console.log(copyBook3);