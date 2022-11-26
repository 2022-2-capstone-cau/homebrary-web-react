import { Link } from 'react-router-dom';

import { ReactComponent as Setting } from '../../assets/setting.svg';

import * as S from './styles';

interface Props {
  nickname: string;
}

const MyPageHeader = ({ nickname }: Props) => {
  return (
    <S.MyPageHeader className="container">
      <S.TitleSection>
        <span>{nickname}</span>님의 도서관
      </S.TitleSection>
      <S.SettingSection>
        <Link to="/mypage/settings">
          <Setting />
        </Link>
      </S.SettingSection>
    </S.MyPageHeader>
  );
};

export default MyPageHeader;
