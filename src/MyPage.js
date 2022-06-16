import React, { useEffect } from "react";
import { MainContainer, GlobalStyle } from "./style/styles";
import MyPosts from "./Myposts";
import MyMoods from "./MyMoods";
import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useMatch } from "react-router-dom";

const MyPage = () => {
let nickname = useSelector((state) => state.post.nickname);
const params = useParams();
const userNickname = nickname.nickname;

const matchPost = useMatch('/mypage/posts') 
const matchMood = useMatch('/mypage/moods')


    return (
        <MainContainer>
            <h1>{userNickname}'s page</h1>
            <Tabs>
                <Tab isActive={matchPost != null}>
                    <Link to="posts"> my posts</Link>
                </Tab>
                <Tab isActive={matchMood != null}>
                    <Link to="moods"> my moods</Link>
                </Tab>
            </Tabs>

            <Routes>
                <Route path="posts" element={<MyPosts nickname={nickname}/>} />
                <Route path="moods" element={<MyMoods nickname={nickname}/>}/>
            </Routes>
        </MainContainer>
    )
}

const Tabs = styled.div`
margin-top: 40px;
display: grid;
grid-template-columns: repeat(2, 1fr);

gap: 10px;



`;


const Tab = styled.span`
text-align: center;
text-transform: uppercase;
background-color: ${(props) =>
    props.isActive ? '#FFBD42' : '#FFEEB9'};
padding: 10px 0px;
border-radius: 10px 10px 0px 0px;



:hover {
    background-color: #FFBD42;
    
    a{
    color: ${(props) =>
    props.isActive ? '#222' : 'white'};
        
        
    }
}

:active {
    background-color: #F59300;
    a{
        color: white;
    }
}



a{
text-decoration: none;
color: #222;
}
`;


export default MyPage;