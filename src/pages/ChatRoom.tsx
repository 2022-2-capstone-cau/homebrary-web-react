import styled from 'styled-components';

import { requestError } from '../@types/shared';
import ModalLayout from '../components/Layout/ModalLayout';
import { NETWORK_ERROR, UNKNOWN_ERROR } from '../constants/error';
import { showAlertModal, showConfirmModal } from '../utils/modal';
import { useNavigate } from 'react-router-dom';
import ChatMessageBubble from '../components/ChatMessageBubble';
import BookConfirmAlert from '../components/BookConfirmAlert';
import { useQuery } from 'react-query';
import { getChatContentList, getChatRoomList, rent, requestRent, sendChat } from '../request';
import { useState } from 'react';

const mockData = [
  {
    user_id: '1',
    attn_id: '1',
    date: '2022.12.12',
    message: '안녕하세요1',
  },
  {
    user_id: '2',
    attn_id: '2',
    date: '2022.12.12',
    message: '안녕하세요2',
  },
  {
    user_id: '3',
    attn_id: '3',
    date: '2022.12.12',
    message: '안녕하세요3',
  },
  {
    user_id: '3',
    attn_id: '1',
    date: '2022.12.12',
    message: '안녕하세요4',
  },
];

const ChatRoom = () => {
  const navigate = useNavigate();
  const { data, isSuccess } = useQuery(['chatRoom'], async () => await getChatContentList(1, 1));

  const [text, setText] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
  };

  const handleSubmit = async () => {
    await sendChat(1, text, 1);
  };

  return (
    <ModalLayout title="효진 도서관">
      <Container className={'container'}>
        <BookConfirmAlert
          type={'rental'}
          okHandler={async () => {
            await rent(1, 1, true);
            alert('대출을 수락했습니다.');
          }}
          closeHandler={async () => {
            await rent(1, 1, false);
            alert('대출을 거절했습니다.');
          }}
        />
        {/*<BookConfirmAlert*/}
        {/*  type={'return'}*/}
        {/*  okHandler={async () => {*/}
        {/*    alert('수락');*/}
        {/*    await requestRent(1, 1);*/}
        {/*  }}*/}
        {/*  closeHandler={async () => {*/}
        {/*    alert('거절');*/}
        {/*    await requestRent(1, 1);*/}
        {/*  }}*/}
        {/*/>*/}
        <BubbleContainer>
          {isSuccess &&
            data?.map((chat: any) => (
              <ChatMessageBubble key={`${chat.date}-${chat.message}`} message={chat.message} />
            ))}
        </BubbleContainer>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={text}
            onChange={(e) => handleOnChange(e)}
            placeholder={'메세지를 입력하세요'}
          />
          {/*<button>입력</button>*/}
        </Form>
      </Container>
    </ModalLayout>
  );
};

export default ChatRoom;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  height: 70%;
`;

export const Form = styled.form`
  position: absolute;
  bottom: 10px;
  left: 0px;
  width: 100%;
`;

export const Input = styled.input`
  width: calc(100% - 60px);
  height: 42px;
  border: solid 1px black;
  border-radius: 10px;
  background: #f8f8fc;
  outline: none;
  padding: 0 10px;
  margin: 0 20px;
`;
