import styled from "styled-components";

export const ButtonGroup = styled.div`
  display: flex;
  align-items: flex-end;
  border-radius: var(--border-radius);

  gap: 0.813rem;
  padding: 0.4065rem;

  button {
    flex: 1;
  }

  @media (min-width: 600px) {
    gap: 1.5rem;
    padding: 0.75rem;
  }
`;
