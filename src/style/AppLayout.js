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
  useEffect(() => {
    isLoginDB();
  }, [])

  async function logout() {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify()
    })
    const data = await response.json();
    console.log(data);
    document.cookie = "JSESSIONID=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    window.location.replace("/");
  }

  return (
    <Wrap>
      <Header>
        <div className="conBox">
          <div className="logoBox" onClick={() => { navigate('/') }}><img src={logo} alt="" /></div>

          <div className="btnArea">
            {isLogin ? <HeaderLink className="borderBtn" onClick={() => { navigate('/mypage/posts') }}>마이페이지</HeaderLink> :
              <HeaderLink className="borderBtn" onClick={() => { navigate('/register') }}>회원가입</HeaderLink>}

            {isLogin ? <HeaderLink className="fillBtn" onClick={logout}> 로그아웃 </HeaderLink> :
              <HeaderLink className="fillBtn" onClick={() => { navigate("/login") }}>로그인</HeaderLink>}
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
    @media screen and (max-width: 480px){
          margin:30px auto 7px;
    }
  
    
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
      position: fixed;
      right: 0;
      top: 0;
      margin: 5px 10px;
      
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
  @media screen and (max-width: 480px){
    padding-top: 150px;
  }
  
`;

const FillBtn = styled.button`
  padding: 5px;

`;

const HeaderLink = styled.span`
color:#FF8A00;
padding: 10px;



:hover{
                color: #222;
            }
            :active{
                color:#FFE2BF;
            }
`;

export default AppLayout;
