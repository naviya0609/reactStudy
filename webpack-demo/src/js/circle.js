export var area = function(r) {
  return Math.PI * r * r;
};

//module.exports 모듈전체배포
//exports. 개별함수 배포
/*exports.circumference = function (r) {
  return 2 * Math.PI * r;
};*/

//ex6 배포 (named export)
export var circumference2 = function (r) {
  return 2 * Math.PI * r;
};