import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { MainContainer } from "./style/styles";
import styled from "styled-components";
import { deletePost } from "./redux/modules/postSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./style/board.css";



const Detail = () => {
  let postList = useSelector((state) => state.post.data);
  let nickname = useSelector((state) => state.post.nickname);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let items = !postList ? [] : postList;
  const postId = useParams();
  const post_index = Number(postId.id)

  const [isMine, setIsMine] = useState(false);

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

  //포스트 삭제하기
  const deletePostDB = (e) => {
    e.preventDefault();
    dispatch(deletePost(postId.id))
    navigate("/")
  }

  //내 포스트인지 아닌지 체크하는 함수
  async function myPostCheck(){

    let user_nickname  = "";

    let post_author = "";

      const responseUser = await fetch('/api/nickname',
      {
        method: 'GET',
      });
      const dataUser = await responseUser.json()
      user_nickname = dataUser.nickname

      const responsePost = await fetch(`/api/posting/${post_index}`,
      {
        method: 'GET',
      });
      const dataPost = await responsePost.json()
      post_author = dataPost.nickname


    if(post_author === user_nickname){
      return setIsMine(true);
    } else{
      return setIsMine(false);
    }
  }

  //렌더링 시 내 포스트인지 체크하게 
  useEffect(() => {
    myPostCheck();
  })


  return (
    <div className="detailContent">
      {items.map((i, idx) => {
        return i.id == postId.id ? (
          <div key={idx}>
            <div className="modeArea">
              <h3>{Emoji(i.face)}</h3>
              <p className={i.face + "Image imgArea"}></p>
            </div>
            <div className="conBox">
              <div className="subContent">
                <div className="dateArea">
                  <p>{i.nickname}</p>
                  <p>|</p>
                  <p>{i.createdAt}</p>
                </div>
                <div>
                  {i.nickname === nickname.nickname ? (
                    <div className="btnArea">
                      <button
                        onClick={() => {
                          navigate("/write/modify", {
                            state: {
                              face: i.face,
                              text: i.text,
                              postId: i.id,
                              nickname: i.nickname,
                            },
                          });
                        }}
                      >
                        수정
                      </button>
                      <button onClick={deletePostDB}>삭제</button>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="teaxArea">{i.text}</div>
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
};


export default Detail;
