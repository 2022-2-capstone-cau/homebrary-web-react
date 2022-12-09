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

// user 1
const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjI1NDkzNzg2NDMiLCJ1c2VyX2lkIjoxLCJpYXQiOjE2NzA1MTg5MTksImV4cCI6MTc3NDA5MTg5MTl9.hYzp6P7GmPeKhwZrwk2hSf4PLOt4Fq9Cixvt3AtbWKs';
// user 3
// const AUTH_TOKEN =
//   'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjI1NDkzNzg2NDMiLCJ1c2VyX2lkIjozLCJpYXQiOjE2NjkzNTYxNTgsImV4cCI6MTc3Mzk3NTYxNTh9.E5r9TTbWSUm2MLWy_bqFcSXHatqhn4IYhrvOHp9gbQM';

function App() {
  const token = new URLSearchParams(window.location.search).get('token');

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
