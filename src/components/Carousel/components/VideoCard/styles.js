import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
  transition: opacity .3s;

  &:hover a,
  &:focus a {
    opacity: .6;
  }

  &:hover span {
    opacity: 1;
  }
`;

export const VideoCardContainer = styled.a`
  border: 2px solid;
  background-color: var(--black);
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  border-top-left-radius: 0;
  border-bottom-right-radius: 0;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  z-index: 5;
  transition: opacity .3s;

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const VideoCardContainerText = styled.span`
  position: absolute;
  z-index: 9;
  bottom: 15px;
  left: 15px;
  right: 30px;
  opacity: 0;
  pointer-events: none;
  text-transform: uppercase;
  transition: opacity .3s;
`;
