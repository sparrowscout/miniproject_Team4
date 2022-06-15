import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const initialState = {
    data: [],
    nickname: []
};



//(로그인체크)만약 현재 로그인 상황이면 닉네임을 뱉을거고 아니면 null을 뱉어낼꺼에요!
export const fetchNick = createAsyncThunk("post/fetchNick", async () => {
    let response = await fetch("/api/nickname");
    const data = await response.json();
    return data;
});

//API에서 포스트 데이터 가져오기
export const fetchPost = createAsyncThunk("post/fetchPost", async () => {
    let response = await fetch("/api/posting");
    const data = await response.json();
    return data;
});

//API에 포스트 저장하기
export const updatePoste = createAsyncThunk(
    "post/updatePost",
    async (newPost) => {
        let response = await fetch("/api/posting", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(newPost),
        })
        console.log(response);
        window.location.reload()
    }
);

//포스트 삭제하기
export const deletePost = createAsyncThunk(
    'post/deletePost',
    async (postIndex) => {
        await fetch(`/api/posting/${postIndex}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
            window.location.reload()
        return postIndex;
    })

//포스트 수정하기
export const modifyPost = createAsyncThunk(
    "post/updatePost",
    async (post) => {
      let response = await fetch(`/api/posting/${post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(post),
      });
  
    }
  );


// api에서 불러와 저장해둔 포스트
export const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        listLoad: (state, action) => {
            state.data = action.payload
        },
        listDelete: (state, action) => {
            const newList = state.data.filter((newPost) => newPost.id !== action.payload)
            state.data = newList
        },
        postEdit: (state, action) => {
            state.data = action.payload
        },
        nickLoad: (state, action) => {
            state.nickname = action.payload;
        },
    },
    extraReducers: {

        [fetchPost.pending.type]: (state = initialState, action) => { // 호출 전
            state.data = console.log("호출전")
        },
        [fetchPost.fulfilled.type]: (state = initialState, action) => { // 성공            
            state.data = action.payload
        },
        [fetchPost.rejected.type]: (state = initialState, action) => {  // 실패
            state.data = console.log("실패")
        },
        [fetchNick.fulfilled.type]: (state = initialState, action) => {
            // 성공
            state.nickname = action.payload;
        },
    }
})



export const postActions = postSlice.actions
export default postSlice.reducer