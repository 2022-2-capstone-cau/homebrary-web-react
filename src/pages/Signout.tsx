import styled from 'styled-components';

import { requestError } from '../@types/shared';
import ModalLayout from '../components/Layout/ModalLayout';
import { NETWORK_ERROR, UNKNOWN_ERROR } from '../constants/error';
import { showAlertModal, showConfirmModal } from '../utils/modal';
import { useNavigate } from 'react-router-dom';

const Signout = () => {
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
    <ModalLayout title="회원탈퇴" buttonContent="탈퇴하기" clickHandler={handleSignOut}>
      <SignOutPage>탈퇴시 모든 정보가 초기화됩니다.</SignOutPage>
    </ModalLayout>
  );
};

export default Signout;

const SignOutPage = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  font-size: 23px;
  padding: 1rem;
  line-height: 140%;
`;
