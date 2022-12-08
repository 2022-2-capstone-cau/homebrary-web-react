import { DEFAULT_IMAGE_URL } from '../../constants/omakase';
import { Link } from 'react-router-dom';

import * as S from './styles';
import { exeDeepLink } from '../../utils/deepLink';

export interface VisitedStoreProps {
  value: {
    book_id?: string;
    thumbnailUrl?: string;
    title?: string;
    rentedAt?: string;
    returnAt?: string;
    isRent?: boolean;
  };
}

const VisitedStore = ({
  value: { book_id, thumbnailUrl, title, rentedAt, returnAt, isRent },
}: VisitedStoreProps) => {
  return (
    <S.StoreDisplay
      onClick={() => {
        exeDeepLink(`post/${book_id}`);
      }}
    >
      <S.StoreImageWrapper>
        <img src={thumbnailUrl ? thumbnailUrl : DEFAULT_IMAGE_URL} alt="매장 이미지 미리보기" />
      </S.StoreImageWrapper>
      <S.StoreDescriptionWrapper>
        <h1 className="store-title">{title}</h1>
        {rentedAt && returnAt && <pre className="store-desc">{`${rentedAt} ~ ${returnAt}`}</pre>}
        {isRent && <span className="store-desc">대여중</span>}
      </S.StoreDescriptionWrapper>
    </S.StoreDisplay>
  );
};

export default VisitedStore;
