function person() {
  this.arms = 2; //this global
  this.legs = 2;
}

// arms의 출력 결과는 무엇인가?
// console.log(arms);
// Person() 실행결과는 무엇인가? 그 이유는?
// function 호출시 window 객체 생성.
console.log(person()); //return 없음? undefined function 실행문 //window 객체에 arms,legs 생성 this로 키값 저장
// arms의 출력 결과는 무엇인가?  여기서 사용된 this는 무엇인가?
console.log(arms); //2
