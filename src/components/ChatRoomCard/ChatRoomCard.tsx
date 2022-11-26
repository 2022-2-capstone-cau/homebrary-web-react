import { ReactComponent as RightButton } from '../../assets/ranking-card-right-button.svg';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

interface Props {
  title?: string;
  subTitle?: string;
  rankerInfoClickHandler?: () => void;
  imageURL?: string;
}

const ChatRoomCard = ({ title, subTitle, rankerInfoClickHandler, imageURL }: Props) => {
  const navigate = useNavigate();

  return (
    <S.RankingCardWrapper className="ranking-card">
      <S.ProfileArea>
        <S.ProfileImage src={imageURL || '/images/default-profile.png'} />
      </S.ProfileArea>
      <S.InfoArea>
        <S.StampAmount className={'title'}>{title}</S.StampAmount>
        <S.StampAmount>{subTitle}</S.StampAmount>
      </S.InfoArea>
      <S.RightButton>
        <RightButton
          onClick={rankerInfoClickHandler ? rankerInfoClickHandler : () => navigate('/chat/1')}
        />
      </S.RightButton>
    </S.RankingCardWrapper>
  );
};

export default ChatRoomCard;
