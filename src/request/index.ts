import axios from 'axios';

const instance = axios.create({ baseURL: process.env.REACT_APP_API_ENDPOINT });

const AUTH_TOKEN =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjI1NDkzNzg2NDMiLCJ1c2VyX2lkIjozLCJpYXQiOjE2NjkzNTYxNTgsImV4cCI6MTc3Mzk3NTYxNTh9.E5r9TTbWSUm2MLWy_bqFcSXHatqhn4IYhrvOHp9gbQM';

axios.defaults.baseURL = 'http://3.34.67.144:3000/';
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export const getHomeData = () => instance.get(`/api/v1/home`).then((res) => res.data.body);
export const getMyData = () => instance.get(`/api/v1/user/me/mypage`).then((res) => res.data.body);
export const getChatRoomList = () => instance.get(`/api/v1/post/room`).then((res) => res.data.body);
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
