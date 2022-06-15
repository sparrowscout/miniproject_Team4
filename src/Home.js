import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style/board.css";
import "./style/btn.css"
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchNick, fetchPost } from "./redux/modules/postSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { state } = useLocation();
  console.log(state)

  // api에서 리덕스로 옮겨와 가져온 포스트 목록 & 닉네임
  let postList = useSelector((state) => state.post.data);
  let items = !postList ? [] : postList;
  let nickname = useSelector((state) => state.post.nickname);

  React.useEffect(() => {
    dispatch(fetchPost()); // 게시물 다시 목록을 불러옵니다   
    dispatch(fetchNick()) // 닉네임여부로 로그인을 체크하고 있는데 로그인 후에도 바로 불러오지 못해서 다시 함수를 실행했습니다
  }, []);

  const userCheck = () => {
    if (nickname.nickname !== null) {
      navigate('/write')
    } else if (nickname.nickname === null) {
      alert('로그인이 필요해요!');
      navigate('/login')
    }
  }

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
            onClick={() => { navigate("/detail/" + p.id); }}>
            <div className={p.face + "Image imgArea"}></div>
            <div className="textArea">
              <div className="date">
                {p.createdAt} | {Emoji(p.face)} | {p.nickname}
              </div>
              <div className="text">
                {p.text}
              </div>
            </div>
          </div>
        );
      })}
      <button className="write" onClick={() => {
        userCheck()
      }}>+</button>

    </>
  );
};

export default Home;
