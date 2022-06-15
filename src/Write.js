import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePoste,modifyPost,listUpdate } from "./redux/modules/postSlice";
import calmnessImage from "./img/calmness.png";
import exitedImage from "./img/exited.png";
import greatImage from "./img/great.png";
import flutterImage from "./img/flutter.png";
import tiredImage from "./img/tired.png";
import stressImage from "./img/stress.png";
import worryImage from "./img/worry.png";
import blueImage from "./img/blue.png";
import sosoImage from "./img/soso.png";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Write = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const scrollRef = useRef(null);
  const [face, setFace] = useState(null);  
  const [text, setText] = useState("");
  const [email, setEmail] = useState("")
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();

  const params = useParams ();
  let nickname = useSelector((state) => state.post.nickname); 

  let postText = "";
  let postList = useSelector((state) => state.post.data);




  React.useEffect(() => {
    if (params.id === "modify") {
      setText(location.state.text);
      
    }
  }, []);

  const modiFy =() => {   
    if(!text) {
      alert("오늘을 기록해주세요! :)");
    }else if (!face){
      alert("표정을 선택해주세요! :)");
    }else {
      dispatch(
        modifyPost ({
          id: location.state.postId,
          email: email,
          face: face,
          text: text,
          userId: nickname.nickname
        })
      );
      navigate("/");

    }
    
  };


  //보류??
  const createPost = () => {
    if(!text){
      alert("오늘을 기록해주세요! :)")
    } else {
    const newPost = {
      face: face,
      text: text,
    };
    dispatch(updatePoste(newPost));
    navigate("/");
  }
  };

  //드래그 스크롤 함수
  const onDragStart = (e) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };
  const onDragMove = (e) => {
    if (isDrag) {
      scrollRef.current.scrollLeft = startX - e.pageX;
    }
  };


  return (
    <>
      <div className="selectTypeBox">
        <h4>지금 내 표정을 알려주세요!</h4>

        <div
          className="selectType"
          onMouseDown={onDragStart}
          onMouseMove={onDragMove}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          ref={scrollRef}
        >
          <div className="contentBox">
            <label
              htmlFor="a_type"
              onClick={() => {
                setFace("calmness");
              }}
            >
              <input id="a_type" type="radio" name="face" />
              <div className="imgArea">
                <img src={calmnessImage} alt="" />
              </div>
              <p>평온해</p>
            </label>
            <label
              htmlFor="b_type"
              onClick={() => {
                setFace("exited");
              }}
            >
              <input id="b_type" type="radio" name="face" />
              <div className="imgArea">
                <img src={exitedImage} alt="" />
              </div>
              <p>기분 최고</p>
            </label>
            <label
              htmlFor="c_type"
              onClick={() => {
                setFace("great");
              }}
            >
              <input id="c_type" type="radio" name="face" />
              <div className="imgArea">
                <img src={greatImage} alt="" />
              </div>
              <p>기분 좋아</p>
            </label>
            <label
              htmlFor="d_type"
              onClick={() => {
                setFace("flutter");
              }}
            >
              <input id="d_type" type="radio" name="face" />
              <div className="imgArea">
                <img src={flutterImage} alt="" />
              </div>
              <p>설레</p>
            </label>
            <label
              htmlFor="e_type"
              onClick={() => {
                setFace("tired");
              }}
            >
              <input id="e_type" type="radio" name="face" />
              <div className="imgArea">
                <img src={tiredImage} alt="" />
              </div>
              <p>피곤해</p>
            </label>
            <label
              htmlFor="f_type"
              onClick={() => {
                setFace("stress");
              }}
            >
              <input id="f_type" type="radio" name="face" />
              <div className="imgArea">
                <img src={stressImage} alt="" />
              </div>
              <p>짜증나</p>
            </label>
            <label
              htmlFor="g_type"
              onClick={() => {
                setFace("worry");
              }}
            >
              <input id="g_type" type="radio" name="face" />
              <div className="imgArea">
                <img src={worryImage} alt="" />
              </div>
              <p>평온해</p>
            </label>
            <label
              htmlFor="h_type"
              onClick={() => {
                setFace("blue");
              }}
            >
              <input id="h_type" type="radio" name="face" />
              <div className="imgArea">
                <img src={blueImage} alt="" />
              </div>
              <p>우울해</p>
            </label>
            <label
              htmlFor="i_type"
              onClick={() => {
                setFace("soso");
              }}
            >
              <input id="i_type" type="radio" name="face" />
              <div className="imgArea">
                <img src={sosoImage} alt="" />
              </div>
              <p>그저 그래</p>
            </label>
          </div>
        </div>
      </div>
      <div className="bottom">
        <textarea
          placeholder="오늘 하루는 어땠나요?"
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></textarea>
        {
          params.id === "modify"
          ? <button onClick={()=>{modiFy()}}>수정 완료!</button> 
          : <button onClick={() => {createPost();}}>작성하기</button>
        }
        
      </div>
      
    </>
  );
};

export default Write;