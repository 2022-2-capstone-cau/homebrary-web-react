import { useState } from 'react';
import styled from 'styled-components';

import { NicknameInputErrorType, requestError } from '../@types/shared';
import ModalLayout from '../components/Layout/ModalLayout';
import NicknameInput from '../components/NicknameInput';
import { NETWORK_ERROR, NICKNAME_ERROR, UNKNOWN_ERROR } from '../constants/error';
import { showAlertModal, showConfirmModal } from '../utils/modal';
import { useNavigate } from 'react-router-dom';

const ChangeNickName = () => {
  const [nickname, setNickname] = useState<string>('');
  const [errorStatus, setErrorStatus] = useState<NicknameInputErrorType>('default');
  const navigate = useNavigate();

  const handleChangeNickname = async () => {
    try {
      showAlertModal('닉네임이 변경되었습니다.');
    } catch (error) {
      const { response } = error as requestError;
      if (!response) return showAlertModal(NETWORK_ERROR);

      const { status } = response;
      if (NICKNAME_ERROR[status]) return showAlertModal(NICKNAME_ERROR[status]);
      return showAlertModal(UNKNOWN_ERROR);
    }
  };

  return (
    <ModalLayout
      title="계좌 정보"
      buttonContent="확인"
      clickHandler={handleChangeNickname}
      disabled={errorStatus !== 'usable'}
    >
      <ChangeNickNamePage>
        <Title>계좌 정보를 입력해주세요.</Title>
        <NicknameInput
          errorStatus={errorStatus}
          setNickname={setNickname}
          setErrorStatus={setErrorStatus}
        />
      </ChangeNickNamePage>
    </ModalLayout>
  );
};

export default ChangeNickName;

const ChangeNickNamePage = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;
  border-top: 1px solid #eff0f6;

  h1 {
    margin-bottom: 40px;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.subTitle3};
  margin-top: 30px;
`;
