// 명령형 for(var i; i<items.length; i++)

// 아래 실행결과를 예측하고 map과 forEach의 차이점을 설명하시오.
var items = ['1', '2', '3', '4', '5'];

// 선언형
// immutable 함수 (불가변) //원본배열 그대로
// map 배열개수만큼 loof 돈후에 return되는 아이템을 모아서 **새로운** 배열을 리턴.
var newItems = items.map(item => parseInt(item)*2); //원본배열 그대로하고 새로운 배열로 리턴
console.log(items);
console.log(newItems);

// mutable 함수
// forEach 루프를 돌아 원본배열 수정됨.
var newItems2 = items.forEach(item => parseInt(item));
console.log(newItems2);