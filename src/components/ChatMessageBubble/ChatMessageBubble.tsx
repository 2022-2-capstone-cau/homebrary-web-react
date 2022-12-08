import * as S from './styles';
import { BubbleContainer } from './styles';

interface Props {
  message: string;
  me?: boolean;
}

const ChatMessageBubble = ({ message, me }: Props) => {
  return (
    <S.BubbleContainer me={me}>
      <S.Bubble>{message}</S.Bubble>
    </S.BubbleContainer>
  );
};

export default ChatMessageBubble;
