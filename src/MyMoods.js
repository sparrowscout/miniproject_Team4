import { style } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MyMoods = () => {

    let postList = useSelector((state) => state.post.data);
    let items = !postList ? [] : postList;

    const navigate = useNavigate();
    
    const Emoji = (face) => {
      return (
        (face === "calmness" && "평온해") ||
        (face === "exited" && "기분 최고!") ||
        (face === "great" && "완전 좋아") ||
        (face === "flutter" && "설레") ||
        (face === "tired" && "피곤해") ||
        (face === "stress" && "짜증나") ||
        (face === "worry" && "걱정돼") ||
        (face === "blue" && "우울해") ||
        (face === "soso" && "그저 그래")
      );
    };

    return (
        <>
{/* {postList.filter((mypost) => {
    return ( 
        <MoodContainer>


        </MoodContainer>
    )
})} */}

            {items.map((p, idx) => {
                return (
                  <MoodContainer key={idx}
                    onClick={() => {navigate("/detail/" + p.id , {state:items}); }}>
                    <div className={p.face + "Image imgArea"}/>
                    </MoodContainer>
                );
              })}
        </>
    )
}

const MoodContainer = styled.div`
display: grid;
grid-template-columns: repeat(5, 1fr);

`;

export default MyMoods;