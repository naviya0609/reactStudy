/*setting > language& framework javascript library react, dom check 다운로드 < 자동완성( IDE type정보나옴)*/
/*view를 직접다루는 것이 아니라 // (Virtual DOM)view와 매핑되는 javascript 객체로 component 이용 재활용성 타입설정 도움말 ctrl+q*/
const title = React.createElement(
  "h1",
  { id: "main-title", title: "This is a title"},
  "My First React Element") /*return - react componenet */
console.log(title)
/*caniuse.com ecma6 문법 사용가능 호환 검색사이트*/

const strong = React.createElement(
  'strong',
  null,
  'Description'
)

const desc =React.createElement(
  'p',
  null,
  'This is ', strong
)

const header = React.createElement(
  "header",
  null,
  title,desc)


/*jsx 브라우저 인식> babel((html view가아닌 html문법)> react component element로 변환됨(babeljs.io/) ()권장사항*/
const titleStr = "main-title" //jsx expression {변수} react// 뷰,앵귤러 {{}}
const header2 = (
  <header>
    <h1 id={titleStr} title="This is a title">My First React Element</h1>
    <p>This is {strong}</p>
  </header>
)


ReactDOM.render(header2,document.getElementById("root"))


