import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { updatePoste } from "./redux/modules/postSlice";
import calmnessImage from "./img/calmness.png";
import exitedImage from "./img/exited.png";
import greatImage from "./img/great.png";
import flutterImage from "./img/flutter.png";
import tiredImage from "./img/tired.png";
import stressImage from "./img/stress.png";
import worryImage from "./img/worry.png";
import blueImage from "./img/blue.png";
import sosoImage from "./img/soso.png";

const Write = () => {
  const [type, setType] = useState(null)
  console.log(type)
  const dispatch = useDispatch();
  const [test, setTest] = useState("");
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState();
  const scrollRef = useRef(null);

  const createPost = () => {
    if (test) {
      const newPost = {
        email: test,
        type: "B",
        text: test,
      };
      dispatch(updatePoste(newPost));
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
          
          <label htmlFor="a_type" onClick={()=>{setType("calmness")}}>
            <input id="a_type" type="radio" name="type"/>
            <div className="imgArea"><img src={calmnessImage} alt="" /></div>
            <p>평온해</p>
          </label>
          <label htmlFor="b_type" onClick={()=>{setType("exited")}}>
            <input id="b_type" type="radio" name="type"/>
            <img src={exitedImage} alt="" />
            <p>기분 최고</p>
          </label>
          <label htmlFor="c_type" onClick={()=>{setType("great")}}>
            <input id="c_type" type="radio" name="type"/>
            <img src={greatImage} alt="" />
            <p>기분 좋아</p>
          </label>
          <label htmlFor="d_type" onClick={()=>{setType("flutter")}}>
            <input id="d_type" type="radio" name="type"/>
            <img src={flutterImage} alt="" />
            <p>설레</p>
          </label>
          <label htmlFor="e_type" onClick={()=>{setType("tired")}}>
            <input id="e_type" type="radio" name="type"/>
            <img src={tiredImage} alt="" />
            <p>피곤해</p>
          </label>
          <label htmlFor="f_type" onClick={()=>{setType("stress")}}>
            <input id="f_type" type="radio" name="type"/>
            <img src={stressImage} alt="" />
            <p>짜증나</p>
          </label>
          <label htmlFor="g_type" onClick={()=>{setType("worry")}}>
            <input id="g_type" type="radio" name="type"/>
            <img src={worryImage} alt="" />
            <p>평온해</p>
          </label>
          <label htmlFor="h_type" onClick={()=>{setType("blue")}}>
            <input id="h_type" type="radio" name="type"/>
            <img src={blueImage} alt="" />
            <p>우울해</p>
          </label>
          <label htmlFor="i_type"onClick={()=>{setType("soso")}}>
            <input id="i_type" type="radio" name="type" />
            <img src={sosoImage} alt="" />
            <p>그저 그래</p>
          </label>
        </div>
      </div>
      </div>
      <input
        type="text"
        onChange={(e) => {
          setTest(e.target.value);
        }}
      />
      <button
        onClick={() => {
          createPost();
        }}
      >
        버튼
      </button>
    </>
  );
};

export default Write;
