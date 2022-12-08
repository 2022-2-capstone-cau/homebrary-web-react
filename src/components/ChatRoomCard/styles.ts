import styled from 'styled-components';

import { RANKING_CARD_BG_COLOR } from '../../constants/shared';

export const RankingCardWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: 10px;
  height: 96px;
  background-color: #f8f8fc;

  & + & {
    margin-top: 10px;
  }
`;

export const ProfileArea = styled.div<{ rank?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;

  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
`;

export const ProfileImage = styled.img.attrs({
  alt: '',
})`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
  object-position: center center;
`;

export const RankIndicator = styled.div`
  width: 52px;
  height: 32px;
  background-color: #aaacbe;
  border-radius: 24px;
  color: #fff;
  text-align: center;
  ${({ theme }) => theme.fonts.subTitle3};
  line-height: 32px;
`;

export const ProfileBubble = styled.div`
  position: absolute;
  right: -10px;
  top: -8px;
  z-index: 1;

  span {
    position: absolute;
    left: 11px;
    top: 3px;
    ${({ theme }) => theme.fonts.subTitle3};
    color: #fff;
  }
`;

export const RightButton = styled.button`
  all: unset;
  position: absolute;
  height: 24px;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);

  & > svg {
    width: 20px;

    path {
      fill: #747b81;
    }
  }
`;

export const InfoArea = styled.div`
  position: absolute;
  top: 50%;
  left: 86px;
  width: 80%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
`;

export const Nickname = styled.p`
  ${({ theme }) => theme.fonts.subTitle2};
  line-height: 22.4px;
  color: #1b1b1d;

  span {
    margin-left: 3px;
    font-size: 14px;
    ${({ theme }) => theme.fonts.contents2};
    color: ${({ theme }) => theme.colors.black400};
  }
`;

export const StampAmount = styled.p`
  ${({ theme }) => theme.fonts.contents2};
  line-height: 27px;
  color: black;
  width: 80%;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: break-word;
`;

export const SubTitle = styled(StampAmount)`
  color: #707077;
`;
