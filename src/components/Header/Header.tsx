import { ReactComponent as Prev } from '../../assets/prev.svg';

import * as S from './styles';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title?: string;
  backHandler?: () => void;
}

const Header = ({ title, backHandler }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <S.Header className="container">
      <S.PrevButton onClick={backHandler ? backHandler : () => navigate(-1)}>
        <Prev />
      </S.PrevButton>
      {title && <S.Title>{title}</S.Title>}
    </S.Header>
  );
};

export default Header;
