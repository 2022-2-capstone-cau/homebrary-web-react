import styled from 'styled-components';
import Button from '../../components/Shared/Button';

interface Props {
  type: 'rental' | 'return';
  okHandler: () => void;
  closeHandler: () => void;
}

const BookConfirmAlert = ({ type, okHandler, closeHandler }: Props) => {
  return (
    <Container>
      <p>
        조용수님에게 모던 자바스크립트 딥다이브 {type === 'return' ? '반납' : '대출'} 요청이
        왔습니다.
      </p>
      <ButtonContainer>
        <Button text={'거절'} clickListener={closeHandler} bgColor={'#D0D0DB'} width="100%" />
        <Button text={'수락'} clickListener={okHandler} bgColor={'#FF463B'} width="100%" />
      </ButtonContainer>
    </Container>
  );
};

export default BookConfirmAlert;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  width: clac(100% - 20px);
  padding: 20px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;