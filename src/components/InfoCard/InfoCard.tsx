import { InfoCardType } from '../../@types/home';
import { ReactComponent as PatternOne } from '../../assets/pattern-one.svg';
import { ReactComponent as PatternTwo } from '../../assets/pattern-two.svg';
import * as S from './styles';
import dayjs from 'dayjs';

interface IInfoCard {
  type: InfoCardType;
  onClick?: () => Promise<boolean>;
  value?: any;
}

const InfoCard = ({ type, onClick, value }: IInfoCard) => {
  const title = type === 'visited' ? `내가 빌린 책\n반납까지` : `내가 빌리는\n중인 책`;
  const suffix = type === 'visited' ? '일' : '권';

  // const today = dayjs();
  // const expired_at = type === 'visited' ? dayjs(value) : today;
  // const result = expired_at.diff(today, 'day', true);
  // const d_day = Math.floor(result);
  //
  // const _value = type === 'visited' ? d_day : value;
  // console.log(_value);

  return (
    <S.InfoCardWrapper type={type} onClick={onClick}>
      {type === 'visited' ? <PatternOne /> : <PatternTwo />}
      <S.Title>{title}</S.Title>
      <S.ValueArea>
        <S.Value>{value ?? '-'}</S.Value>
        <S.Suffix>{suffix}</S.Suffix>
      </S.ValueArea>
      {/*<S.Notification>자세히 보기 &gt;</S.Notification>*/}
    </S.InfoCardWrapper>
  );
};

export default InfoCard;
