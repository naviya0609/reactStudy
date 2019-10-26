//CommonJs  모듈가져오는 방법 require > import
//browser가 require를 알지못함. >> webpack을 이용해 브라우저가 알수있게 컴파일하는 과정 필요
//webpack 총관리자 모듈 번들링
var _ = require('lodash');
import  './style.css';
import  './hello.scss';
//es6 import 규칙 {} 컬리브레이스 활용해서 import
import {area, circumference2} from "./js/circle";
import potato from "./js/cube";
// default로 하나만 export시 이름과 상관없이 가져올 수 있음.

function component() {
  let element = document.createElement('div');
  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!!'], ' ');
  return element;
}

document.body.appendChild(component());
console.log("area : "+area(5))
console.log("potato : "+potato(5))