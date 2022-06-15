import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from '../img/logo.svg'
import "./btn.css"
import { useLocation } from "react-router-dom";

const AppLayout = (props) => {
  // const {state} = useLocation();
  // console.log(state)
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  async function isLoginDB() {
    const response = await fetch('/api/nickname',
    {
      method: 'GET',
    });
    const data = await response.json()
    const user = data.nickname
    if (user !== null) { 
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }
  useEffect(()=>{
    isLoginDB();
  },[])

  async function logout() {
    const response = await fetch('/api/users/logout',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
    },
    body:JSON.stringify()
    })
    const data = await response.json();
    console.log(data);
    document.cookie = "JSESSIONID=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    window.location.reload()
  }
 
  return (
    <Wrap>
      <Header>
        <div className="conBox">
          <div className="logoBox" onClick={() => { navigate('/') }}><img src={logo} alt="" /></div>

          <div className="btnArea">
            {isLogin ? <span className="borderBtn" onClick={() => { navigate('/mypage/posts') }}>마이페이지</span> :
              <span className="borderBtn" onClick={() => { navigate('/register')}}>회원가입</span>}

            {isLogin ? <span className="fillBtn" onClick={logout}> 로그아웃 </span> :
              <span className="fillBtn" onClick={() => { navigate("/login") }}>로그인</span>}


          </div>
        </div>
      </Header>
      <Container>{props.children}</Container>
    </Wrap>
  );
};

const Wrap = styled.div``;

const Header = styled.div`
  position: fixed;
  z-index:1;
  top: 0;
  width: 100%;
  background-color: #ffeeb9cc;

  .conBox {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 80px;
    max-width: 750px;
    margin: auto;
    text-align: center;
    padding: 15px 0;
    .logoBox{
        width:15%;
        height:100%;
        min-width:160px;
        margin:auto;
        display:flex;
        img {
            width:100%;
        }
    }
    .btnArea {
      position: absolute;
      right: 0;
      top: 0;
      span {
        display:inline-block;
        margin-left:10px;
        font-size:15px;
        padding:5px;
        cursor:pointer;

      }
    }
  }
`;

const Container = styled.div`
  padding-top: 120px;
  width:100%;
  max-width:750px;
  margin:auto;
  box-sizing:border-box;
`;

const FillBtn = styled.button`
  padding: 5px;
`;

export default AppLayout;
