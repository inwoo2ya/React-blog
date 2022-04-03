/*eslint-disable */
import React,{useState} from 'react';
import './App.css';

//얘도 컴포넌트
function App() {
  
  var mainpost = {color:'skyblue',fontSize:"30px" }
  //state 변수 대신 쓰는 데이터 저장공간
  // javascript destructing 문법 [a,b] a= '변수', b='변수를 변경하는 함수'
  //function 제목바꾸기(){
    //var newArray = [...글제목];
    //newArray[0] ='밥 만드는법';
    //newArray[2] ='배부르다!';
    //글제목변경(newArray);
  //}

  return (
    <div className="App">
      <div className="black-nav">
        <div style={mainpost}> Blog </div>
      </div>
      <Post/>
      <Modal/>
      
    </div>
  );
}
//Modal 컴포넌트
function Modal(){
  return(
  <div className="modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
);
}

function Post(){

  let[글제목,글제목변경] = useState(['집 가는 방법','집에 가고싶다ㅠㅠ','배고프다...']);
  let [좋아요0,좋아요변경0] = useState(0);
  let [좋아요1,좋아요변경1] = useState(0);
  let [좋아요2,좋아요변경2] = useState(0);
  return(   
    <>
      <div className="list">
      <h3>{글제목[1]} <br/><span onClick={()=>{좋아요변경1(좋아요1+1)}}>👍</span> {좋아요1} </h3>
      <p>4월 2일 발행</p>
        <hr/>
      </div>
      
      <div className="list">
      <h3>{글제목[0]}</h3><br/><span onClick={()=>{좋아요변경0(좋아요0+1)}}>👍</span> {좋아요0}
      <p>4월 3일 발행</p>
        <hr/>
      </div>
      
      <div className="list">
      <h3>{글제목[2]}</h3><br/><span onClick={()=>{좋아요변경2(좋아요2+1)}}>👍</span> {좋아요2}
      <p>4월 4일 발행</p>
        <hr/>
      </div>
      </>
  );
}

export default App;
