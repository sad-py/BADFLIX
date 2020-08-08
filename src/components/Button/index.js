import styled from "styled-components";

const Button = styled.button`
color: var(--white);
    border: 1px solid var(--white);
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    padding: 16px 24px;
    text-decoration: none;
    transition: opacity .3s;
   
    &:hover,
    &:focus {
    opacity: .5;
`;


export default Button