import { MainHeader } from '../../components/Header';

import * as S from './styles';

interface Props {
  title: string;
  align?: string;
  noHeader?: boolean;
  children: React.ReactNode;
}

const Layout = (props: Props) => {
  return (
    <S.Layout>
      {!props.noHeader && <MainHeader title={props.title} align="flex-start" />}
      <S.Main>{props.children}</S.Main>
    </S.Layout>
  );
};

export default Layout;
