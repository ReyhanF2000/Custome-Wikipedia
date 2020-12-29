import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.ul`
color:red;
font-size:24px;
border:2px solid teal;
margin:20px;
border-radius:5px;
font-weight:700;
`
const LI = styled.li`
padding-left:${(prop) => `${prop.level * 10}px`};
font-size:18px;
color:black;
margin:3px 0;
`
export default function TableOfContents({ Table }) {
  return (
    <Wrapper>
      Category:
      {Table.map(item =>
        <LI level={item.toclevel} key={item.index}>{item.number}.{item.line}</LI>)}
    </Wrapper>
  )
}