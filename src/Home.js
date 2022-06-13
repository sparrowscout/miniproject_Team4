import React, { useEffect, useState } from "react";
import { useNavigate, useParams  } from "react-router-dom";
import "./style/board.css";
import "./style/btn.css"
import { useSelector } from "react-redux";

const Home = () => {
  const navigate = useNavigate();
  

  // api에서 리덕스로 옮겨와 가져온 포스트들
  let postList = useSelector((state) => state.post.data);
  let items = !postList ? [] : postList;


  const Emoji = (type) => {
    return (
      (type === "A" && "우울해") ||
      (type === "B" && "완전 좋아") ||
      (type === "C" && "설레") ||
      (type === "D" && "그저 그래") ||
      (type === "E" && "피곤해") ||
      (type === "F" && "기분 최고!") ||
      (type === "G" && "평온해") ||
      (type === "H" && "짜증나") ||
      (type === "I" && "걱정돼")
    );
  };

  return (
    <>
      {items.map((p, idx) => {
        return (
          <div
            key={idx}
            className="itemBox"
            onClick={() => {navigate("/detail/" + p.id , {state:items}); }}>
            <div className={p.type + "Image imgArea"}></div>
            <div className="textArea">
              <div className="date">
                2022-06-12 | {Emoji(p.type)} | {p.email}
              </div>
              <div className="text">
                {p.text.length < 50 ? p.text : p.text.slice(0, 35) + "..."}
              </div>
            </div>
          </div>
        );
      })}
      <button className="write" onClick={()=>{
        navigate('/write')
      }}>+</button>
     
    </>
  );
};

export default Home;
