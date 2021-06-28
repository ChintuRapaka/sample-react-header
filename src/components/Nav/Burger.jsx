import React, {useState} from 'react'
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 10;
    display: none;

    @media (max-width: 760px) {
        display: flex;
    }

    div {
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? '#ccc' : '#333'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 200ms ease-in;
        &:nth-child(1) {
            transform : ${({open}) => open ? 'rotate(45deg)': 'rotate(0deg)'};
        }
        &:nth-child(3) {
            transform : ${({open}) => open ? 'rotate(-45deg)': 'rotate(0deg)'};
        }
        &:nth-child(2) {
            transform : ${({open}) => open ? 'translateX(100%)' :'translateX(0)'}; 
            opacity: ${({open}) => open ? '0' : '1'};
        }
    }
`;

const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(prev => !prev)}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open}/>
        </>
    )
}

export default Burger
