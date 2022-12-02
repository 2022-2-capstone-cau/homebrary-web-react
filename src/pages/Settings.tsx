import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { requestError } from '../@types/shared';
import Header from '../components/Header';
import { NETWORK_ERROR, UNKNOWN_ERROR } from '../constants/error';
import { showAlertModal } from '../utils/modal';

const Settings = () => {
  const handleLogout = async () => {
    try {
      // await requestLogout();
      showAlertModal('로그아웃 되었습니다.');
      location.href = '/';
    } catch (error) {
      const { response } = error as requestError;
      if (!response) return showAlertModal(NETWORK_ERROR);

      return showAlertModal(UNKNOWN_ERROR);
    }
  };

  return (
    <>
      <Header title="개인정보 설정" />
      <SettingSection onClick={handleLogout} className="setting-link">
        로그아웃
      </SettingSection>
      <SettingSection>
        <Link to="/mypage/signout" className="setting-link">
          회원 탈퇴
        </Link>
      </SettingSection>
      <SettingSection>
        <Link to="/mypage/change-nickname" className="setting-link">
          닉네임 변경
        </Link>
      </SettingSection>
      <SettingSection>
        <Link to="/mypage/change-photo" className="setting-link">
          프로필사진 변경
        </Link>
      </SettingSection>
    </>
  );
};

export default Settings;

const SettingSection = styled.section`
  display: flex;
  align-items: center;
  font-size: 18px;
  height: 55px;
  padding: 0 21px;
  border-bottom: 1px solid rgba(196, 196, 196, 0.2);
  text-decoration: none;

  .setting-link {
    text-decoration: none;
    color: #000;
  }
`;
