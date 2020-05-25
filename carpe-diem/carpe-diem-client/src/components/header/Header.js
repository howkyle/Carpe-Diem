import React from 'react';
import styled from '@emotion/styled';
// import './Header.css';



const Header = (props) => {
    const Container = styled.div`
    height:100px;
`
    const HeaderTitle = styled.span`
font-family: "Segoe Script";
  font-size: 48px;
  color: #f1faee;
`

    return <Container><HeaderTitle>{props.title}</HeaderTitle></Container>
}

export default Header;