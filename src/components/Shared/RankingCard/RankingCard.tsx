import RightButton from '@assets/ranking-card-right-button.svg';
import { Link } from 'react-router-dom';
import * as S from './styles';

const RankingCard = ({
  title,
  rankerInfoClickHandler,
}: {
  title?: string;
  rankerInfoClickHandler?: () => void;
}) => {
  return (
    <S.RankingCardWrapper className="ranking-card">
      <S.InfoArea>
        <S.StampAmount>{title}</S.StampAmount>
      </S.InfoArea>
    </S.RankingCardWrapper>
  );
};

RankingCard.defaultProps = {
  ranker: {
    ranking: 0,
    nickname: '',
    stampCount: 0,
  },
};

export default RankingCard;
