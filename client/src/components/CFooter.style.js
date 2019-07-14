import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  height:4rem;
  position: absolute;
  bottom:${props => props.positionDistance || "-10rem"};
  left:0;
  right:0;
  width:100%;
`;
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1.5rem 7rem;
`;
export const Line = styled.div`
align-self: flex-start;
  display: block;
  margin: 0 auto;
  width: 90%;
  border: 0.12rem solid var(--black);
  border-radius: 1rem;
`;
export const H3 = styled.h3`
text-transform:capitalize;
  font-size: 1rem;
  color: var(--black);
  float: right;
`;
