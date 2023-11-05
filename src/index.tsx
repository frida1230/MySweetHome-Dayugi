import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App'; //App.js 에서 App 함수를 로딩
import Hello from './components/Hello' //App 대신 Hello import
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  //index.html에 있는 root를 아이디로 가진 요소를 지정
  document.getElementById('root') as HTMLElement
);
root.render(
  <h1>우리집 다육이</h1>
);

root.render(
  //화면에 그릴 JSX 태그를 지정한다.
  <React.StrictMode>
  {/* <App/> App은 src/App.tsx로부터 임포트한 것을 사용 
    아래는 App을  Hello로 치환한것 */} 
    <Hello />
  </React.StrictMode>,
 
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
