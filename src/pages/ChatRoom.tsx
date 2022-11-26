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

  const handleSignOut = async () => {
    if (!showConfirmModal('정말 탈퇴하시겠습니까?')) return;

    try {
      //await requestDeleteUser();
      showAlertModal('탈퇴가 완료되었습니다.');
      navigate('/');
    } catch (error) {
      const { response } = error as requestError;
      if (!response) return showAlertModal(NETWORK_ERROR);

      return showAlertModal(UNKNOWN_ERROR);
    }
  };

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
