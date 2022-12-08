import MyPageLayout from '../components/Layout/MyPageLayout';
import MyProfile from '../components/MyProfile';
import VisitedStore from '../components/VisitedStore';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { getMyData } from '../request';
import { exeDeepLink } from '../utils/deepLink';

const mockData = {
  user: {
    user_id: '1',
    name: '효진',
    profile: '',
  },
  summary: {
    popularCategory: {
      title: 'IT',
    },
    numberOfOwn: 1,
    numberOfRental: 1,
  },
  rents: [
    {
      id: '1',
      thumbnailUrl: '',
      title: '프로그래밍의 정석',
      rentedAt: '',
      returnAt: '',
    },
  ],
  owns: [
    {
      id: '1',
      thumbnailUrl: '',
      title: '프로그래밍의 정석',
      isRent: true,
    },
  ],
};

interface Props {}

const MyPage = () => {
  const { isLoading, isSuccess, data } = useQuery(['mypage'], async () => await getMyData());

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <>
      {isSuccess && (
        <MyPageLayout nickname={data?.user.name}>
          <MyProfile userValue={data?.user} summaryValue={data?.summary} />
          <MyPagePage className="container">
            <div className="store-list-title">
              <span>{data?.user.name}</span>님의 대출 목록
            </div>
            <div className="store-list-layout">
              {data?.rents &&
                data?.rents.map((value: any) => <VisitedStore value={value} key={value.book_id} />)}
            </div>
            <div className="store-list-title">
              <span>{data?.user.name}</span>님의 보관 목록
            </div>
            <div className="store-list-layout">
              {data?.owns &&
                data?.owns.map((value: any) => <VisitedStore value={value} key={value.book_id} />)}
            </div>
          </MyPagePage>
        </MyPageLayout>
      )}
    </>
  );
};

export default MyPage;

const MyPagePage = styled.div`
  .store-list-title {
    ${({ theme }) => theme.fonts.subTitle1};
    margin-bottom: 1.5rem;
  }
  .store-list-layout {
    display: grid;
    grid-auto-rows: auto;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px 15px;
  }
`;
