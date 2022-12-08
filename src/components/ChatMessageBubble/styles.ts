import styled from 'styled-components';

export const BubbleContainer = styled.div<{ me?: boolean }>`
  display: flex;
  justify-content: ${({ me }) => (me ? 'flex-end' : 'flex-start')};
  width: 100%;
`;

export const Bubble = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;
  height: 42px;
  background: #f8f8fc;
  border-radius: 10px;
  padding: 10px 15px;
`;
