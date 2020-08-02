import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1220px;
  padding: 50px 30px;
`;

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: var(--primary);
  transition: color .3s;

  &:hover {
    color: var(--white);
  }
`;
