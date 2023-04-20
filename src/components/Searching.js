import React, { useState } from 'react'
import { Input } from 'antd';

const { Search } = Input;

const Searching = () => {
  const [value, setValue]  = useState('')

  const onSearch = (value) => setValue(value);

  console.log(value)

  return (
    <Search size="large" style={{ width: 740 }} onSearch={onSearch} />
  )
}

export default Searching