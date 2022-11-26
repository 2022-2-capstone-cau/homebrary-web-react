import Layout from '../components/Layout';
import styled from 'styled-components';
import ChatRoomCard from '../components/ChatRoomCard';

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
  return (
    <Layout title={'채팅 목록'}>
      <Container className={'container'}>
        {mockData.map((room, idx) => (
          <ChatRoomCard
            key={idx}
            title={room.title}
            subTitle={room.subTitle}
            imageURL={room.imageURL}
          />
        ))}
      </Container>
    </Layout>
  );
};

export default Chat;

const Container = styled.div``;
