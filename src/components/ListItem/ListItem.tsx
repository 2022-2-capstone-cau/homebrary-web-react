import { ReactComponent as RightButton } from '../../assets/ranking-card-right-button.svg';
import * as S from './styles';

interface Props {
  title?: string;
  onClickHandler?: () => void;
}

const ListItem = ({ title, onClickHandler }: Props) => {
  return (
    <S.RankingCardWrapper className="ranking-card">
      <S.InfoArea>
        <S.StampAmount>{title}</S.StampAmount>
      </S.InfoArea>
      <S.RightButton>
        <RightButton onClick={onClickHandler} />
      </S.RightButton>
    </S.RankingCardWrapper>
  );
};

export default ListItem;
