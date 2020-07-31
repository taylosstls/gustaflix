import styled from 'styled-components';

const Button = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  background-color: transparent;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all .3s;

  &:hover, &:focus {
    opacity: 1;
    border-color: var(--primary);
    background-color: var(--primary);
  }
`;

export default Button;
