import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``
const Ul = styled.ul`
color:red;
font-size:24px;
border:2px solid teal;
margin:20px;
border-radius:5px;
font-weight:700;
`
const LI = styled.li`
font-size:20px;
color:black;
margin:3px 0;
`

export default function Category({ categories }) {
    let showCategories = categories.filter(item => !item.hidden);
    let filterCategory = showCategories.map((item) => item.category.replaceAll('_', ' '));
    return (
        <>
            <Ul>
                Table Of Contacts:
                {
                    filterCategory.map((item, index) =>
                        <LI key={index}>{item}</LI>)
                }
            </Ul>
        </>
    )
}