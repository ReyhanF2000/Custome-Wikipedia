import React, { useReducer, useState } from 'react'
import styled from 'styled-components'
import { reducer, ACTIONS } from './Components/Reducer'
import SearchPanel from './Components/SearchPanel'
import TableOfContents from './Components/TableOfContents'
import Category from './Components/Category'

const Wrapper = styled.div`
text-align:center;
`
const Header = styled.h1``

const Title = styled.h4``

const Load = styled.p`
color:black;
font-size: 24px;
font-weight:700;
margin:10px 15px;
`
const Warnning = styled.p`
color:red;
font-size: 24px;
font-weight:700;
margin:10px 15px;
`
export default function App() {
  const [{ keyword, data, loading }, dispatch] = useReducer(reducer, {
    keyword: '',
    data: '',
    loading: false
  })

  const handleSearch = async () => {
    dispatch({
      type: ACTIONS.LOADING,
    })
    fetch(`https://en.wikipedia.org/w/api.php?action=parse&format=json&formatversion=2&page=${keyword}`)
      .then(resp => resp.json())
      .then(res => {
        dispatch({
          type: ACTIONS.RECEIVED_DATA,
          payload: res.parse
        })
      })
      .catch((error) => {
        dispatch({
          type: ACTIONS.NOTRECEIVED_DATA,
        })
      })
  }
  return (
    <>
      <Wrapper>
        <Header>Hello Wikipedia!</Header>
        <Title>Please Enter the name of the car!</Title>
        <SearchPanel
          keyword={keyword}
          onSearch={handleSearch}
          dispatch={dispatch}
        />
      </Wrapper>
      {loading && <Load> Please Wait ...!  </Load>}
      {!loading && data === undefined && <Warnning> Not Found Result :)  </Warnning>}
      {!loading && data && <Category categories={data.categories} />}
      {!loading && data && <TableOfContents Table={data.sections} />}
    </>
  )
}

