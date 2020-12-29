import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { ACTIONS } from './Reducer'
const Wrapper = styled.div`
display:flex;
flex-direction:row;
text-align:center;
margin:0px auto;
width:60%;
`
const Input = styled.input`
width:80%;
height:35px;
border:1px solid black;
font-size:16px;
`
const Button = styled.button`
width:20%;
height:38px;
background:teal;
color:white;
font-size:16px;
border:1px solid black;
`
export default function SearchPanel({ onSearch, keyword, dispatch }) {
  const inputRef = useRef();
  useEffect(
    () => {
      inputRef.current.focus();
    },
    []
  );
  function onKeywordChange(e) {
    inputRef.current.focus();

    dispatch({
      type: ACTIONS.KEYWORD_CHANGE,
      payload: e.target.value
    })
  }
  return (
    <Wrapper>
      <Input ref={inputRef} value={keyword} onChange={onKeywordChange} />
      <Button onClick={onSearch}>Search</Button>
    </Wrapper>
  )
}