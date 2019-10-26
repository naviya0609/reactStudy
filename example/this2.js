// function 호출시 window 객체 생성.
// 생성자 함수 호출시 javascript(json) 객체 생성.

// 대문자 P function호출이 아니라 javascript 객체로 쓴다는 약속
// 생성자함수 규칙 new 키워드를 통해 json 객체생성
// 자기자신을 가르키는 this = {} 가 내부적으로 생성됨
// return 문이 없거나 json 객체가 아니면 this가 리턴
function Person() {
  this.arms = 2; //this 자기자신
  this.legs = 2;
}

// 자바스크립트에서 객체를 생성하는 2가지 방법은 무엇인가? 아래는 어떤 방법인가?
var person = new Person();
// 실행 결과는 무엇인가? 실행결과에 대해서 설명하시오.
// 생성자 global 변수 생성
console.log(person); // json 객체생성
// literal 객체로  person 객체를 생성하시오.

// 실행 결과는 무엇인가? 여기서 사용된 this는 무엇인가?
console.log(this.arms); //this.arms 가 되야함
// 만일 this.arms, this.legs가 없다면 new Person()의 결과는 무엇인가?