import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import MyPage from './pages/MyPage';
import Home from './pages/Home';
import Chat from './pages/Chat';
import Settings from './pages/Settings';
import ChangeNickName from './pages/ChangeNickName';
import ChangePhoto from './pages/ChangePhoto';
import Account from './pages/Account';
import Signout from './pages/Signout';
import ChatRoom from './pages/ChatRoom';
import * as queryString from 'query-string';
import { useParams } from 'react-router-dom';
import { instance } from './request';

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjI1NDkzNzg2NDMiLCJ1c2VyX2lkIjozLCJpYXQiOjE2NjkzNTYxNTgsImV4cCI6MTc3Mzk3NTYxNTh9.E5r9TTbWSUm2MLWy_bqFcSXHatqhn4IYhrvOHp9gbQM';

function App() {
  const { token } = useParams();

  console.log(token);

  // const queryObj = queryString.parse(String(access_token));
  //const { token } = queryObj;
  instance.defaults.headers.common['Authorization'] = token ? String(token) : AUTH_TOKEN;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chats" element={<Chat />} />
        <Route path="/chats/:id" element={<ChatRoom />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/settings" element={<Settings />} />
        <Route path="/mypage/change-nickname" element={<ChangeNickName />} />
        <Route path="/mypage/change-photo" element={<ChangePhoto />} />
        <Route path="/mypage/signout" element={<Signout />} />
        <Route path="/mypage/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
