import * as S from './styles';

interface Props {
  message: string;
}

const ChatMessageBubble = ({ message }: Props) => {
  return <S.Bubble>{message}</S.Bubble>;
};

export default ChatMessageBubble;
