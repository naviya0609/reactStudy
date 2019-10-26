//3. 애로우함수
//익명함수 입력과 출력사이 => 삽입, function 생략
// 문장이 한문장이면 {}생략가능, return이 있다면 return 생략가능
const myName3 = (first, last) =>
  console.log(first + last);

//2.함수 표현식 기명함수
const myName2 = function (first, last) {
  console.log(first + last);
}

myName3("3","Yan", "Fan");
myName2("2","Yan", "Fan");
myName("1","Yan", "Fan");
// 아래는 함수 선언문(function definition)이다. 함수 표현식으로 바꾸시오.
// 함수 선언문과 함수 표현식의 차이점은 무엇인가? 표현식으로 바꾸면 에러가 나는가 안나는가?
//1.함수 선언문
function myName(first, last) {
  console.log(first + last);
}



//함수 호이스팅 위치에상관없이 function 모아서 메모리에 먼저 올림.
//but 함수 선언문 사용시 변수할당만하고 대입안함.

