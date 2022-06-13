import React,{useState, useRef} from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Detail = (props) => {
  let postList = useSelector((state) => state.post.data);
  
  let items = !postList ? [] : postList;
  let postId = useParams();

  return (
    <>
      {items.map((i, idx) => {
        return i.id == postId.id ? (
          <div key={idx}>
            {i.email}
            <div className={i.type + "Image imgArea"}></div>
            {i.text}
          </div>
        ) : null;
      })}
    </>
  );
};
export default Detail;
