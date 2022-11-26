import Layout from '../components/Layout';
import styled from 'styled-components';
import InfoCard from '../components/InfoCard';

import { ReactComponent as HorizontalLogo } from '../assets/horizontal-logo.svg';
import RankingCard from '../components/Shared/RankingCard';

interface Props {
  homeDataResponse?: any;
}

const mockData = {
  rent: {
    fastestRemainingReturnDay: 1,
    numberOfRental: 1,
  },
  recommend: {
    category: {
      id: '1',
      title: 'IT',
    },
    list: [
      {
        id: '1',
        title: '책 이름',
      },
      {
        id: '1',
        title: '책 이름',
      },
      {
        id: '1',
        title: '책 이름',
      },
      {
        id: '1',
        title: '책 이름',
      },
      {
        id: '1',
        title: '책 이름',
      },
      {
        id: '1',
        title: '책 이름',
      },
      {
        id: '1',
        title: '책 이름',
      },
    ],
  },
};

const Home = () => {
  const data = mockData;

  return (
    <Layout title="홈" noHeader>
      <HomePage>
        <MyInfoSection>
          <LogoArea>
            <HorizontalLogo />
          </LogoArea>
          <CatchPhraseArea>{'오늘은\n책 빌리는 날!'}</CatchPhraseArea>
          <InfoCardArea>
            <InfoCard type="visited" value={data.rent.fastestRemainingReturnDay} />
            <InfoCard type="ranking" value={data.rent.numberOfRental} />
          </InfoCardArea>
        </MyInfoSection>
        <RankingSection>
          <RankingSectionTitle>
            내가 읽지 않은 {data.recommend.category.title} 분야 책 엿보기 👀
          </RankingSectionTitle>
          <RankingCardArea>
            {data.recommend.list.map((item: any) => (
              <RankingCard key={item.id} title={item.title} />
            ))}
          </RankingCardArea>
        </RankingSection>
      </HomePage>
    </Layout>
  );
};

export default Home;

const HomePage = styled.main`
  height: 100%;
  background-color: #f8f8fc;
  letter-spacing: -0.02em;
`;

const MyInfoSection = styled.section`
  padding: 0 20px 20px 20px;
  background-color: #fff;
`;

const LogoArea = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
`;

const CatchPhraseArea = styled.h1`
  line-height: 44.8px;
  font-size: 32px;
  margin-bottom: 20px;
  white-space: pre-wrap;
`;

const InfoCardArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const RankingSection = styled(MyInfoSection)`
  padding-top: 20px;
  margin-top: 10px;
  font-size: 14px;
  line-height: 32px;
  color: #54545a;
`;

const RankingSectionTitle = styled.h2`
  ${({ theme }) => theme.fonts.subTitle1};
  line-height: 32px;
  color: #000;
`;

const RankingCardArea = styled.div`
  margin-top: 20px;
`;
