import React from "react";
import { MainContainer, GlobalStyle } from "./style/styles";
import MyPosts from "./Myposts";
import MyMoods from "./MyMoods";
import { Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const MyPage = () => {
    const params = useParams();

    return (
        <MainContainer>
            <h1>username님의 페이지</h1>
            <Link to="posts"> 
            my posts
            </Link>
            <Link to="moods"> 
            my moods
            </Link>
            <Routes>
                <Route path="posts" element={<MyPosts />}/>
                <Route path="moods" element={<MyMoods />}/>
            </Routes>
        </MainContainer>
    )
}

export default MyPage;