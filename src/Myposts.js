import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TextDivider, PostBox, myPostContainer, PostDivider } from "./style/styles";

const MyPosts = (props) => {
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
       
           <myPostContainer>
            {items.map((p, idx) => {
              if(p.nickname === user_nickname){
                return (
               <>
                  <PostBox
                    key={idx}
                    onClick={() => {navigate("/detail/" + p.id , {state:items}); }}>
                    <div className={p.face + "Image imgArea"}></div>
                    <div className="textArea" style={{textAlign:"left", marginLeft:"15px"}}>
                      <div className="date" >
                        {p.createdAt}<TextDivider> | </TextDivider> {Emoji(p.face)}<TextDivider> | </TextDivider> {p.nickname}
                      </div>
                      <div className="text">
                        {p.text.length < 50 ? p.text : p.text.slice(0, 35) + "..."}
                      </div>
                     
                    </div>
                    
                  </PostBox>
                   <PostDivider/>
                  </>
                )} else {
                  return (null)
                }
              })}
               </myPostContainer>
    
          
    )
}



export default MyPosts;