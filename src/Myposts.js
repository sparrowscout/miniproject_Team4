import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const MyPosts = () => {

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
            {items.map((p, idx) => {
                return (
                  <div
                    key={idx}
                    className="itemBox"
                    onClick={() => {navigate("/detail/" + p.id , {state:items}); }}>
                    <div className={p.face + "Image imgArea"}></div>
                    <div className="textArea">
                      <div className="date">
                        {p.createdAt}| {Emoji(p.face)} | {p.nickname}
                      </div>
                      <div className="text">
                        {p.text.length < 50 ? p.text : p.text.slice(0, 35) + "..."}
                      </div>
                    </div>
                  </div>
                );
              })}
        </>
          
    )
}

export default MyPosts;