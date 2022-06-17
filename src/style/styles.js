import { createGlobalStyle } from 'styled-components';
import { createTheme } from '@mui/material/styles';
import styled from 'styled-components';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#FFBD42',
      contrastText: '#fff'
    },
    action: {
      active: "#F59300",
      hover: "#FFBD42",
    },
  },
});


//로그인, 회원가입 style
export const Container = styled.div`
        border: 1px solid transparent;
        max-width: 480px;
        margin: 30px auto;
        background-color: white;
        border-radius: 10px;
        padding: 30px 30px 80px 30px;
        text-align: center;

        @media screen and (max-width: 480px){
                      width: 70vw;
                    }

        a{
            font-size: 12px;

            :link{
                color: #FF8A00;
            }

            :visited{
                color: #FF8A00;
            }
            :hover{
                color: #222;
            }
            :active{
                color:#FFE2BF;
            }
        }
        `;

export const LoginContainer = styled.div`
        input {
            padding: 5px;
    width: 200px;
    margin: 10px 0px 0px;
    background-color: white;
    border: 0px solid transparent;
    border-bottom: 1px #FFBD42 solid;
    padding: 10px;
        }

        button {
            background-color: #FFBD42;
            color:#222;
            padding: 10px;
            border: 1px solid transparent;
            border-radius: 5px;
            width: 214px;
            margin: 10px 0px;


            :hover {
                background-color: #FFBD42;
                color: white;
            }

            :active {
                background-color: #F59300;
            }
        }
        `;

export const ErrMsg = styled.span`
color: #e74c3c;
font-size: 12px;

`;

export const Msgbox = styled.div`
margin: 3px 0px 9px;
color: #e74c3c;
font-size: 12px;
text-align: center;
`;

//전역 style
export const MainContainer = styled.div`
border: 1px solid transparent;
max-width: 480*2px;
margin: 30px auto;
background-color: white;
border-radius: 10px;
padding: 30px;
text-align: center;
padding-bottom: 20px;
word-break: keep-all;

@media screen and (max-width: 800px){
  width: 70vw;
}
`;

export const MainBtn = styled.button`
  background-color: #FFBD42;
  color:#222; 
padding: 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  width: 214px;
  margin: 10px 0px; 


:hover {
      background-color: #FFBD42;
      color: white;
  }

  :active {
      background-color: #F59300;
  } 
`;

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;400;900&display=swap');

h1{
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 100;
  color: #222;
}

body{
  font-family: 'Noto Sans KR', sans-serif;
  width: 100%;
  margin: auto;
  background-color: #FFEEB9;
  accent-color: #FFBD42;
  color: #222;
}
a{
  text-decoration: none;
}

button{
  color: #222;
}
`;

//마이페이지>post 스타일
export const PostBox = styled.div`
display: grid;
grid-template-columns: 1fr 9fr;
padding: 20px;
`;

export const TextDivider = styled.span`
color: #d9d9d9;
`;

export const PostDivider = styled.hr`
border: solid 0.8px #eee;
max-width: 100%;
`;

export const myPostContainer = styled.div`
overflow: scroll;
`;

//마이페이지>mood 스타일
export const MoodContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

span {
  font-size: 12px;
  color: #999;
}

`;