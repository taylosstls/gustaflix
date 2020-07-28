import styled from 'styled-components';

export const Title = styled.div`
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px 8px;
  text-transform: uppercase;
  line-height: 16px;
  max-width: 250px;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;

  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-top: 16px;

  & + section {
    margin-bottom: 16px;
  }
`;
