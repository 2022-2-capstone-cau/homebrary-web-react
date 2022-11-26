import MyPageHeader from '../../components/Header/MyPageHeader';

import * as S from './styles';

interface Props {
  children: React.ReactNode;
  nickname: string;
}

const MyPageLayout = (props: Props) => {
  return (
    <S.Layout>
      <MyPageHeader nickname={props.nickname} />
      <S.Main>{props.children}</S.Main>
    </S.Layout>
  );
};

export default MyPageLayout;
