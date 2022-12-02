import styled from 'styled-components';

import { requestError } from '../@types/shared';
import ModalLayout from '../components/Layout/ModalLayout';
import { NETWORK_ERROR, UNKNOWN_ERROR } from '../constants/error';
import { showAlertModal, showConfirmModal } from '../utils/modal';
import { useNavigate } from 'react-router-dom';
import ChatMessageBubble from '../components/ChatMessageBubble';

const mockData = [
  {
    user_id: '1',
    attn_id: '1',
    date: '2022.12.12',
    message: '안녕하세요',
  },
  {
    user_id: '1',
    attn_id: '1',
    date: '2022.12.12',
    message: '안녕하세요',
  },
  {
    user_id: '1',
    attn_id: '1',
    date: '2022.12.12',
    message: '안녕하세요',
  },
  {
    user_id: '1',
    attn_id: '1',
    date: '2022.12.12',
    message: '안녕하세요',
  },
];

const ChatRoom = () => {
  const navigate = useNavigate();

  return (
    <ModalLayout title="효진 도서관">
      <Cointainer className={'container'}>
        <BubbleContainer>
          {mockData.map((message, idx) => (
            <ChatMessageBubble key={idx} message={message.message} />
          ))}
        </BubbleContainer>
      </Cointainer>
    </ModalLayout>
  );
};

export default ChatRoom;

const Cointainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
