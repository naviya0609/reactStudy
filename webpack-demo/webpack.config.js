const path = require('path'); //node 내장 library
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html-webpack-plugin

//import / export
//CommonJs 전체를 모듈로 배포하는 방법 json 설정 통째 모듈 배포
module.exports = {
  entry: './src/index.js', //default 값
  output: {
    filename: "out.js", //default main.js
    path: path.resolve(__dirname, 'build')// 출력폴더 __dirname node 내장 예약어 // __double under (dunder)
  },//json 객체
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // /\.css로 끝나는 애들에게 use 를 사용해라 import  './style.css'; js에 추가
        //뒤에서부터 실행 css-loader는 string변환 style-loader는 스타일태그 변환
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader','sass-loader'] // /\.scss sass-loader 추가
        //뒤에서부터 실행 css-loader는 string변환 style-loader는 스타일태그 변환
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin() //plugin 이 html 자동 생성.
  ]
}

