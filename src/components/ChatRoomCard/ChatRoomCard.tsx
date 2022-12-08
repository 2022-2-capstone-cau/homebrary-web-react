import { ReactComponent as RightButton } from '../../assets/ranking-card-right-button.svg';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

interface Props {
  title?: string;
  subTitle?: string;
  rankerInfoClickHandler?: () => void;
  imageURL?: string;
  user_id?: any;
}

const ChatRoomCard = ({ title, subTitle, rankerInfoClickHandler, imageURL, user_id }: Props) => {
  const navigate = useNavigate();

  return (
    <S.RankingCardWrapper className="ranking-card">
      <S.ProfileArea>
        <S.ProfileImage src={imageURL?.slice(22) === '' ? '/homebrary-logo.png' : imageURL} />
      </S.ProfileArea>
      <S.InfoArea>
        <S.StampAmount className={'title'}>{title}</S.StampAmount>
        <S.SubTitle>{subTitle}</S.SubTitle>
      </S.InfoArea>
      <S.RightButton>
        <RightButton onClick={rankerInfoClickHandler} />
      </S.RightButton>
    </S.RankingCardWrapper>
  );
};

export default ChatRoomCard;
