import styled from 'styled-components';

import { requestError } from '../@types/shared';
import ModalLayout from '../components/Layout/ModalLayout';
import { NETWORK_ERROR, UNKNOWN_ERROR } from '../constants/error';
import { showAlertModal, showConfirmModal } from '../utils/modal';
import { useNavigate, useParams } from 'react-router-dom';
import ChatMessageBubble from '../components/ChatMessageBubble';
import BookConfirmAlert from '../components/BookConfirmAlert';
import { useQuery } from 'react-query';
import {
  getChatContentList,
  getChatRoomList,
  rent,
  requestRent,
  requestReturn,
  sendChat,
} from '../request';
import { useState } from 'react';
import Button from '../components/Shared/Button';
import * as queryString from 'query-string';

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
  const { id } = useParams();

  const queryObj = queryString.parse(String(id));

  const { attn_id, book_id, name, bookName } = queryObj;

  const { data, isSuccess } = useQuery(
    ['chatRoom'],
    async () => await getChatContentList(Number(attn_id), Number(book_id)),
  );
  const [text, setText] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    e.stopPropagation();
  };

  const handleSubmit = async () => {
    await sendChat(Number(attn_id), text, Number(book_id));
  };

  return (
    <ModalLayout title={`${name} 도서관`}>
      <Container className={'container'}>
        <BookConfirmAlert
          type={'rental'}
          name={name}
          bookName={bookName}
          okHandler={async () => {
            await rent(Number(attn_id), Number(book_id), true);
            alert('대출을 수락했습니다.');
          }}
          closeHandler={async () => {
            await rent(Number(attn_id), Number(book_id), false);
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
        <Button
          text={'반납 요청하기'}
          width={'calc(100% - 40px)'}
          clickListener={async () => await requestReturn(Number(book_id))}
          bgColor={'#FF463B'}
        />
        <BubbleContainer>
          {isSuccess &&
            data
              ?.filter((chat: any) => chat.attn_id !== Number(attn_id))
              .map((chat: any) => (
                <ChatMessageBubble key={`${chat.chat_id}`} message={chat.message} />
              ))}
        </BubbleContainer>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            value={text}
            onChange={(e) => handleOnChange(e)}
            placeholder={'메세지를 입력하세요'}
          />
          <Button
            text={'입력'}
            clickListener={() => console.log('df')}
            bgColor={'#FF463B'}
            width="40px"
            fontSize={'16px'}
            padding={'10px'}
          />
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
  margin-bottom: 70px;
`;

export const Form = styled.form`
  position: absolute;
  bottom: 10px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  width: calc(100% - 40px);
`;

export const Input = styled.input`
  width: 250px;
  height: 42px;
  border: solid 1px black;
  border-radius: 10px;
  background: #f8f8fc;
  outline: none;
`;

const StyledButton = styled(Button)`
  font-size: 12px;
`;
