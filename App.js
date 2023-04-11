import React, { lazy } from 'react'
import './App.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/dior.jpeg';
import { createContext, useEffect, useState, Suspense } from 'react';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import axios, { Axios } from 'axios';
import { useQuery } from 'react-query';
// import Detail from  './routes/Detail.js';
// import Cart from './routes/Cart.js';

const Detail = lazy(()=> import('./routes/Detail'));
const Cart = lazy(() => import('./routes/Cart'));

export let Context1 = createContext();



function App() {

  useEffect(()=> {
    localStorage.setItem('watched', JSON.stringify([]))
  }, [])
  // redux-persist 이런걸로 로컬스토리지 관리함


  //object를 로컬스토리지에 넣으려면 json으로 바꿔야함

  let obj = {name: 'jin'}
  
  localStorage.setItem('data', JSON.stringify(obj))
  let 꺼낸거 = localStorage.getItem('data')
  console.log(JSON.parse(꺼낸거).name);

  useEffect(() => {
    localStorage.setItem('wateched',JSON.stringify([]))
  }, [])

  let [shose, setShose] = useState(data);
  let [재고] = useState([10, 11, 12])
  let navigate = useNavigate(); //훅 페이지 이동 훅
  
  // 브라우저 새로고침하면 state도 초기값으로 돌아감 그래서 이게 싫으면 서버로 보내서 영구적을 저장함

  let reuslt = useQuery('작명', ()=>
    axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
      return a.data
    }),
    {staleTime: 2000}
  )
  
  
  // result.data
  // result.isLoding
  // result.error
  
  return (
    <div className="App">



      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">승효네 기타가게</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> { navigate('/')}}>메뉴</Nav.Link>
            <Nav.Link onClick={()=> { navigate('/detail')}}>기타</Nav.Link>
            <Nav.Link >Pricing</Nav.Link>
          </Nav>
          <Nav className="ms-auto"> 
            { reuslt.isLoding && '로딩중'}
            { reuslt.error && '에러남'}
            { reuslt.isLoding && reuslt.data.name}
          </Nav>
        </Container>
      </Navbar>

      {/* 페이지 이동 버튼 */}
      {/* <Link to = "/">홈</Link>
      <Link to = "/detail">상세페이지</Link> */}


       {/* ajax 쓰려면 옵션 3개 XMLHtppRequset, fetch(), axios 중 선택해서 사용 */}
       {/* 원래 서버와는 문자만 주고 받을 수 있는데 따옴표 치면 array, object도 주고 받을 수 있음 이런걸 json이라 함 */}
       <button onClick={() => {
        
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((결과)=>{
          console.log(결과.data);
          let copy = [...shose, ...결과.data];
          setShose(copy);
          
        })
        .catch(()=>{
          console.log('실패함');
        })

        axios.post('/', {name: 'kim'})

        Promise.all([axios.get('/url1'), axios.get('url2')]
        .then(()=>{

        }))

        // fetch는 array, object를 변환을 해줘야 함

        // 스위치 기계 만든느 방식을 잘 이용하면 수정하기 쉽다.
       }}>더 보기</button>

      <Routes>
        <Route path='/' element={
          <>
            <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div>
            {/* 리액트는 사이트발행 전에 파일을 압축함 빌딩이라 함 */}
            <div className="container">
              <div className="row">
                { shose.map((a, i) => {
                    return (
                      <Card shose={shose[i]} i={i}></Card>
                    )
                  })
                }
              </div>
            </div>
          </>
        } />
        {/* url 파라미터 :아무거나 */}
        <Route path='/detail/:id' element={
          <Suspense fallback={<div> 로딩중임</div>}>
            <Detail shose={shose}/>  

          </Suspense>
          
        } />
        {/* nested routes 사용법  여러 유사한 페이지를 사용할때 쓴다. */}
        <Route path='/about' element={<About/>} >
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<div>위치정보임</div>} />
        </Route>
        <Route path='*' element={<div>없는페이지에요</div>} /> 

        <Route path='/event' element={<Event/>}>
          <Route path='one' element={<div> 첫 주문시 양배추츱 서비스</div>} />
          <Route path='two' element={<div> 생일기념 쿠폰받기</div>} />
        </Route>

        {/* 리액트의 폴더구조 비슷한 파일끼리 폴더로 묶는게 끝 */}

      <Route path='/detail/:id' element={
        <Detail shose={shose}/>
      } />
      
      <Route path='/cart' element={<Cart/>}/>
      </Routes>


      
    </div>

  );
}
// 서버는 요청을 하면 파일을 주는 프로그램 누가 a요청하면 a보내주세요 정확히 규격에 맞춰서 요청해야함
// 어떤 방법 (get/post) 어떤자료(url) 적어서 ajax 사용해서 get 요청




// JSX에서는  import 작명 from 을 작성하고 불러와야한다. 

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}


function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}


function Card(props) {
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" />
      <h4>{props.shose.title}</h4>
      <p>{props.shose.price}</p>
    </div>
  )
}



//페이지 나누는법 (리액트 사용)
//spa라서 해서 index.html만 사용함
//컴포넌트 만들어서 상세페이지내용 채움
// 누가 /detail 접속하면 그 컴포넌트 보여줌
//npm install react-router-dom

//리액트의 단점 컴포넌트간 state 공유 어려움 부모컴포넌트 -> 자식컴포넌트로 props 전송은 가능해서 이렇게 state 공유함


export default App;
