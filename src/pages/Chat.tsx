import Layout from '../components/Layout';
import styled from 'styled-components';
import ChatRoomCard from '../components/ChatRoomCard';
import { useQuery } from 'react-query';
import { getChatRoomList } from '../request';

const mockData = [
  {
    title: '스위프트 프로그래밍',
    subTitle: '효진 도서관',
    imageURL: '/homebrary-logo.png',
  },
  {
    title: '스위프트 프로그래밍',
    subTitle: '효진 도서관',
    imageURL: '/homebrary-logo.png',
  },
  {
    title: '스위프트 프로그래밍',
    subTitle: '효진 도서관',
    imageURL: '/homebrary-logo.png',
  },
];

const Chat = () => {
  // const { isLoading, isSuccess, data } = useQuery(
  //   ['chatRoom'],
  //   async () => await getChatRoomList(),
  // );
  //
  // if (isLoading) {
  //   return <div>로딩중...</div>;
  // }
  //
  // if (!isSuccess) {
  //   return null;
  // }

  const data = mockData;

  return (
    <Layout title={'채팅 목록'}>
      <Container className={'container'}>
        {data?.map((room: any) => (
          <ChatRoomCard
            key={room.user_id}
            title={room.last_message}
            subTitle={room.name}
            imageURL={room?.imageURL ?? '/homebrary-logo.png'}
          />
        ))}
      </Container>
    </Layout>
  );
};

export default Chat;

const Container = styled.div``;
