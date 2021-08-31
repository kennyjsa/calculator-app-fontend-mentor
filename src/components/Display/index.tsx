import styled from "styled-components";

export const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--screen-background);

  height: 88px;
  font-size: 2rem;
  padding: 0 1.5rem;

  border-radius: var(--border-radius);
  overflow: hidden;

  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 2.5rem;
    box-shadow: inset 55px 0px 20px -25px var(--screen-background);
  }

  @media (min-width: 600px) {
    height: 128px;
    font-size: 3rem;
    padding: 0 2.25rem;
  }
`;
