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

function App() {
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
