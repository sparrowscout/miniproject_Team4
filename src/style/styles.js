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


export const MainContainer = styled.div`
border: 1px solid transparent;
max-width: 480*2px;
margin: 30px auto;
background-color: white;
border-radius: 10px;
padding: 30px;
text-align: center;
padding-bottom: 20px;
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
  width: 100vw;
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