import React, { useEffect } from "react";
import { MainContainer, GlobalStyle } from "./style/styles";
import MyPosts from "./Myposts";
import MyMoods from "./MyMoods";
import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const MyPage = () => {
let nickname = useSelector((state) => state.post.nickname);
const params = useParams();
const userNickname = nickname.nickname;

    return (
        <MainContainer>
            <h1>{userNickname}'s page</h1>
            <Tabs>
                <Tab>
                    <Link to="posts"> my posts</Link>
                </Tab>
                <Tab>
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
background-color: #FFEEB9 ;
padding: 10px 0px;
border-radius: 10px 10px 0px 0px;

/* a{
    padding: 10px 110px;
} */
:hover {
    background-color: #FFBD42;
    
    a{
        color: white;
        
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