import { useState } from 'react';

import { ReactComponent as Prev } from '../../assets/prev.svg';
import useLocalStorage from '../../hooks/useLocalStorage';

import * as S from './styles';

interface HeaderInputProps {
  placeholder: string;
  searchHandler: (text: string) => void;
}

const InputHeader = ({ placeholder, searchHandler }: HeaderInputProps) => {
  const [text, setText] = useState('');
  const { setStorageItem } = useLocalStorage('recents-keyword');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
  };

  const handleOnSubmit = () => {
    if (!text) {
      alert('검색어를 입력해주세요!');
      return;
    }
    searchHandler(text);
    setStorageItem('#' + text);
  };

  return (
    <S.Header borderBottom className="container">
      <S.PrevButton onClick={() => console.log('뒤로가기')}>
        <Prev />
      </S.PrevButton>
      <S.Input
        type="text"
        value={text}
        onChange={(e) => handleOnChange(e)}
        placeholder={placeholder}
        autoFocus
      />
      <S.SearchButton onClick={handleOnSubmit}>검색</S.SearchButton>
    </S.Header>
  );
};

export default InputHeader;
