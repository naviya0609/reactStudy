// Student 라는 이름의 클래스를 생성하시오.
// json 객체 생성
// function Student(){} 생성자함수
// class
class Student {
  constructor(name) { //생성자 속성값 초기화
    this.name = name
  }
  //기존 changeName : function () {}
  changeName (newName) {
    this.name = newName
  }
}

const student = new Student("Jane");
console.log(student.name)

//student 생성된 객체
student.changeName("Tom")
console.log(student.name)
// 생성자를 추가하시오.

// 생성자에 name 파라메터를 받아서 name 속성에 할당하는 코드를 쓰시오

// "Jane" 이라는 이름을 파라메터로 넘겨서 user1 변수명을 가진 인스턴스를 생성하시오

// changeName이라는 이름의 메서드를 추가하시오.
// 이 메서드는 userName이라는 파라메터를 받아서 name 속성을 userName 값으로 업데이트해야한다.

// user1 인스턴스의 name 이 "Tom" 이 되도록 함수를 호출해서 변경해보자.
// 값이 바뀌었는지 출력해서 확인해보자

// 생성자의 역할은 무엇인가?
// 객체 초기화 및 객체 생성
// 생성자에 사용된 this는 무엇을 가르키는가?
// this 자기자신

//class 생성자, 행위함수 선언 가능