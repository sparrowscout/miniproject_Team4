import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { MoodContainer } from "./style/styles";
const MyMoods = (props) => {
  const user_nickname = props.nickname.nickname
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
    <MoodContainer>
      {items.map((p) => {
        if(p.nickname === user_nickname){
          return (
          <div>
            <div className={p.face + "Image imgArea"}
              onClick={() => { navigate("/detail/" + p.id, { state: items }); }}
              style={{ width: "68%", height: "100px", margin: "5px auto", backgroundSize: "100%", backgroundPosition: "center center" }} />
            <span> {p.createdAt}</span>
          </div>
        );
        } else {
          return (
            null
          );
          
          
        }
        
      })}
    </MoodContainer>
  )
}



export default MyMoods;