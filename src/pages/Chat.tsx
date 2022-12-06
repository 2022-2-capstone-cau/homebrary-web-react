import Layout from '../components/Layout';
import styled from 'styled-components';
import ChatRoomCard from '../components/ChatRoomCard';
import { useQuery } from 'react-query';
import { getChatRoomList } from '../request';
import { useNavigate } from 'react-router-dom';

const mockData = [
  {
    attn_id: '1',
    name: '효진 도서관',
    bookName: '스위프트 프로그래밍',
    bookURL: '/homebrary-logo.png',
  },
  {
    attn_id: '2',
    name: '효진 도서관',
    bookName: '스위프트 프로그래밍',
    bookURL: '/homebrary-logo.png',
  },
  {
    attn_id: '3',
    name: '효진 도서관',
    bookName: '스위프트 프로그래밍',
    bookURL: '/homebrary-logo.png',
  },
];

const Chat = () => {
  const { isLoading, isSuccess, data } = useQuery(
    ['chatRoom'],
    async () => await getChatRoomList(),
  );

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  // const data = mockData;
  const navigate = useNavigate();

  return (
    <Layout title={'채팅 목록'}>
      <Container className={'container'}>
        {isSuccess &&
          data?.map((room: any) => (
            <ChatRoomCard
              key={room.attn_id}
              title={room.bookName}
              subTitle={room.name}
              imageURL={room?.bookURL ?? '/homebrary-logo.png'}
              user_id={room?.attn_id}
              rankerInfoClickHandler={() => navigate(`/chat/${room.attn_id}`)}
            />
          ))}
      </Container>
    </Layout>
  );
};

export default Chat;

const Container = styled.div``;
