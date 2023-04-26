import React from 'react'
import { Input } from 'antd';

const { Search } = Input;

const Searching = ({ onWord }) => {

  function onSearch(value) {
    onWord(value);
  };

  return (
    <Search size="large" style={{ width: 740 }} onSearch={onSearch} />
  )
}

export default Searching