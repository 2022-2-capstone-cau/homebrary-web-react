import Layout from '../components/Layout';
import styled from 'styled-components';

const Chat = () => {
  return (
    <Layout title={'채팅 목록'}>
      <Container className={'container'}>
        <div>채팅1</div>
        <div>채팅1</div>
        <div>채팅1</div>
      </Container>
    </Layout>
  );
};

export default Chat;

const Container = styled.div``;
