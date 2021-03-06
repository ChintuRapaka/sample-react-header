import React from 'react'
import styled from 'styled-components';
import RightNav from './RightNav';
import Burger from './Burger';

const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    .logo {
        padding: 15px 0;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <div className="logo">
               Logo 
            </div>
            <Burger />
        </Nav>
    )
}

export default Navbar
