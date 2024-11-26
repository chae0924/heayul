import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 320px;
  border: 2px solid ${props => (props.focused ? 'red' : '#ccc')};
  border-radius: 20px;
  padding: 5px 10px;
  transition: border-color 0.3s;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding: 8px;
  border-radius: 20px;
  background: transparent;

  ::placeholder {
    color: #999;
    font-style: italic;
  }
`;

const SearchButton = styled(Link)`
  text-decoration: none;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  margin-left: 10px;
  outline: none;
  color: black;

  &:after {
    content: '🔍';
    display: inline-block;
  }
`;

const SearchBar = ({ placeholder }) => {
  const [focused, setFocused] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <SearchWrapper focused={focused}>
      <SearchInput
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <SearchButton to={`/search?query=${encodeURIComponent(query)}`} />
    </SearchWrapper>
  );
};

export default SearchBar;
