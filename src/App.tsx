import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import MyPage from './pages/MyPage';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
