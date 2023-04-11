/* eslint-disalbe */ //원인 메시지 끄는거

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// app도 컴포넌트임
function App() {

  let post = '강남 우동 맛집'; // 중요한 자료를 저장할때 변수를 쓰는데 react는 state를 씀
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']); //이것도 destructuring 문법을 적용해서 ['남자코트추천', 함수] 이다.
  let [따봉, 따봉변경] = useState([0, 0, 0]); //따봉변경은 state 변경용 함수임 이걸써야 재렌더링함
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');



  [1, 2, 3].map(function (a) {
    return '1233211'
  })
  //map(콜백함수) 사용법  1.array 자료 갯수만큼 함수안의 코드 실행해줌
  // 2.  함수의 파라미터는 array안에 있던 자료임 3. returen에 뭐 적으면 array로 담아줌 [1,2,3] 3번 담겨질거임 3개니까

  // let [우동,c] = useState('강남 우동 맛집');
  // let [파이썬,d] = useState('파이썬 독학');
  //let [파이썬,d] = useState(['파이썬 독학', '맛집추천']); 배열로 만들어도 됨

  // usestate(보괄할 자료)
  // let [작명, 작명] a는 state에 보관했던 자료 b는 state 변경 도와주는 함수
  //Destructuring 문법 
  // let num = [1, 2]; //여기를 변수로 빼고 싶어서

  // let [a,c] = [1,2]; 

  // let a = num[0];
  // let c = num[1];

  // 변수가 변경시 자동으로 안 바뀜
  // state를 쓰면 재렌더링이 됨
  // state는 변동시 자동으로 html에 반영되게 만들고 싶을때
  // 자주변경될거 같은 html부분은 state로 만들어 놓기 전부다
  // html 요소를 클릭했을때 onClick 씀 주의 사항이 있는데 onClikck = {함수} 함수이름 또는 함수 그자체를 넣어도 됨
  //함수는 긴코드를 간단하게 해주는 문법
  // 함수 문법으로 () => {이 안에 자바스크립트 코드를 넣음}
  // state는 등호로 안바뀜 변경은 setState르ㅗ 해야함
  //state 변경하는법 state변경함수 (새로운 state)
  //참고 array/object 다룰때 원본은 보존하는게 좋음
  //state 변경함수 특징 1. 기존 state랑 신규 state랑 같을 경우 변경안해줌 ==
  // [array/object 특징]
  // let arr = [1,2,3]; //123 array를 미지의 공간(램)에 저장하고 이걸 가리키는 화살표만 저장
  // array, object가 이러한 이유는 reference data type이라서 그럼
  // [...~~~] 화살표도 달라지고 새로운 state로 인식
  // state가 array/objext면 독립적으로 카피본으로 만들어서 수정해야함 shallow copy
  function 함수() {

  }
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy)
      }}>가나다순정렬</button>

      <button onClick={() => {




        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>
        글수정</button>


      {/* <div className='list'>
        <h4>{글제목[0]} <span onClick={() => {따봉변경(따봉+1)}}>👍</span> {따봉}</h4>
        
        <p>7월 18일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>7월 18일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => { setModal(!modal);}}>{글제목[2]}</h4>
        <p>7월 18일 발행</p>
      </div> */}
      {/* 클릭이벤트는 상위 html로 퍼짐 그래서 제목을 눌러도 3번 눌러진거임 이벤트버블링이라함
          이걸 막기 위해서는 e.stopPropagation();을 사용하면됨
      */}
      {
        글제목.map(function (a, i) {
          return (<div className='list' key={i}>
            <h4 onClick={() => { setModal(!modal); setTitle(i) }}>{글제목[i]}
              <span onClick={(e) => { e.stopPropagation();
                let copy = [...따봉]
                copy[i] = copy[i] + 1;
                따봉변경(copy)
              }}>👍</span> {따봉[i]}
            </h4>
            <p>7월 18일 발행</p>
            <button onClick={()=> {
              let copy = [...글제목];
              copy.splice(i, 1);
              글제목변경(copy);
            }}>삭제</button>
          </div>
          )
        })
      }
      {/* map으로 같은 html 반복 생성하는 방법 
      반복문으로 html 생성하면 key={html마다 다른 숫자} 추가해야함*/}

      <button onClick={() => { setTitle(0) }}>글제목0</button>
      <button onClick={() => { setTitle(1) }}>글제목1</button>
      <button onClick={() => { setTitle(2) }}>글제목2</button>

      {/* 이벤트 핸들러는 매우 많음
        onMouse onScroll onClick onChang onInput 이벤트는 찾아서 사용
      */}
      <input onChange={(e) => {
        입력값변경(e.target.value);
        console.log(입력값);
        }}></input>
        <button onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy)
        }}>
          글발행
        </button>
      {/* input에 입력한 값을 가져오는 법은 e를 넣는거 지금 발생하는 이벤트에 관련한 여러 기능이 담겨져 있음
        e.target은 이벤트 발생한 html 태그를 가리킴 value는 값을 가르킴
      */}
      {/* state 변경함수는 늦게 처리됨 그래서 state가 변경전에 다음줄이 실행됨 그래서 */}


      {
        modal == true
         ? <Modal title={title} 글제목변경={글제목변경} color={'skyblue'} 글제목={글제목} /> : null
      }
      {/* 제목 클릭시 모달창 띄우기? -> 클릭시 state만 조절하면 됨 
      즉 state는 스위치고 밑에 함수는 움직이는 기계임*/}
    </div>
  );
}

// 동적인 ui 만드는 step
//1. html css로 미리 디자인 완성
//2. ui 현재 상태를 state로 저장
//3. state에 따라 ui가 어떻게 보일지 작성




// 컴포넌트 만드는법 
//       1. fuction 만들고
//       2. return() 안에 ㅎhtml 담기
//       3. <함수명></함수명> 쓰기 
//  의미 없는 <div> 대신</div> <>만 사용
// 어떤걸 컴포넌트로 만들면 좋은가
// 1.반복적인 html 축약할때
// 2. 큰페이지 
// 3. 자주변경되는 것들
// 컴포넌트의 단점: state 가져다쓸 때 문제가 생김 state 변수명들을 가져가 쓸수 없음
// 즉 a 함수에 있던 변수는 b함수에서 못 씀

// 컴포넌트 만드는 문법2
// let Modal = () => {
//   retrun (
//     <div/>
//   )
// }  let 말고 const 만들면 에러 메세지가 떠서 실수 방지

//props 사용법 1. 자식컴포넌트 작명 = {state 이름}

function Modal(props) {
  // let [title, setTitle] = useState(0);  state가 modal, app에서 필요하면 app에서 만들어야함
  return (
    <>
      <div className='modal' style={{ background: props.color }}>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={() => { props.글제목변경(['여자 코트 추천', '강남 우동맛집', '파이썬독학']) }} >글수정</button>
      </div>
    </>
  )
  // props는 파라미터 문법이랑 비슷 다양한 기능을 하는 함수를 만들때 사용함
}
// 데이터바인딩은 {} 중괄호안에 변수를 넣는거 일반적으로 프론트엔드가 하는 거
// style = {{스타일명:'값'}}
// 중요한 데이터는 변수말고 state에 담는다.
// return() 안에는 병렬로 태그 2개 이상 기입 금지
export default App;
