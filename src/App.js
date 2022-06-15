import Register from './Register';
import Login from './Login';
import Write from './Write';
import Detail from './Detail';
import MyPage from './MyPage';
import { Route, Routes } from "react-router-dom"
import { GlobalStyle } from './style/styles';
import Home from './Home';
import { useDispatch } from 'react-redux';
import { fetchNick, fetchPost } from './redux/modules/postSlice';
import AppLayout from "./style/AppLayout"
import React from 'react';


function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPost());
    dispatch(fetchNick());
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <AppLayout>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/write" exact element={<Write />} />
          <Route path="/write/:id" exact element={<Write />} />
          <Route path="/detail/:id" exact element={<Detail />} />
          <Route path="/mypage/*" exact element={<MyPage />} />
        </Routes>
      </AppLayout>

    </div>
  );
}

export default App;
