import axios from 'axios';
import * as queryString from 'query-string';
import { useParams } from 'react-router-dom';

const { access_token } = useParams();

const queryObj = queryString.parse(String(access_token));

const { token } = queryObj;

const instance = axios.create({ baseURL: process.env.REACT_APP_API_ENDPOINT });

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjI1NDkzNzg2NDMiLCJ1c2VyX2lkIjozLCJpYXQiOjE2NjkzNTYxNTgsImV4cCI6MTc3Mzk3NTYxNTh9.E5r9TTbWSUm2MLWy_bqFcSXHatqhn4IYhrvOHp9gbQM';

axios.defaults.baseURL = 'http://3.34.67.144:3000/';
instance.defaults.headers.common['Authorization'] = String(token) ?? AUTH_TOKEN;

export const getHomeData = () => instance.get(`/api/v1/home`).then((res) => res.data.body);
export const getMyData = () => instance.get(`/api/v1/user/me/mypage`).then((res) => res.data.body);
export const getChatContentList = (attn_id: number, book_id: number) =>
  instance
    .get(`/api/v1/post/chat?attn_id=${attn_id}&book_id=${book_id}`)
    .then((res) => res.data.body);
export const getChatRoomList = () => instance.get(`/api/v1/post/room`).then((res) => res.data.body);
export const sendChat = (attn_id: number, message: string, book_id: number) =>
  instance.post(`/api/v1/post/chat`, {
    attn_id,
    message,
    book_id,
  });

export const changeNickname = (nickname: string) =>
  instance.put(`/api/v1/user/me/nickname`, { nickname });
export const checkDuplicateName = (nickname: string) =>
  instance
    .post(`/api/v1/user/me/nickname/validate`, { nickname: nickname })
    .then((res) => res.data.body);
export const changeProfilePhotoImage = (image: File) => {
  const formData = new FormData();
  formData.append('image', image);
  return instance.put(`/api/v1/user/me/image`, formData);
};

// 책 주인이 빌려줌 (채팅창 모달에서)
export const rent = (attn_id: number, book_id: number, allow: boolean) => {
  instance.put(`api/v1/post/rent`, { attn_id, book_id, allow });
};

// 대출 신청
export const requestRent = (attn_id: number, book_id: number) => {
  instance.post(`api/v1/post/rent`, { attn_id, book_id });
};

// 반납
export const requestReturn = (book_id: number) => {
  instance.post(`/api/v1/post/return`, { book_id });
};
