import styled from "styled-components";

interface ButtonProps {
  intent?: "default" | "primary" | "secondary";
}

export const Button = styled.button<ButtonProps>`
  height: 64px;
  font-size: ${props => (props.intent === "default" ? "1.75rem" : "1rem")};
  font-weight: 700;
  color: var(--text-color-${props => props.intent});
  cursor: pointer;

  background-color: var(--key-background-${props => props.intent});
  border: 0;
  border-radius: 8px;

  box-shadow: inset 0 -4px 0 0 var(--key-shadow-${props => props.intent});

  transition: all 200ms ease;
  &:hover {
    filter: brightness(0.90);
  }

  &:active{
    box-shadow: inset 0 -2px 0 0 var(--key-shadow-${props => props.intent});
    padding-top: 3px;
    margin-top: 2px;
    height: 58px;
    filter: brightness(0.90);
  }

  @media (min-width:600px) { 
    font-size: ${props => (props.intent === "default" ? "2rem" : "1.25rem")};
  }
`;

Button.defaultProps = {
  intent: "default",
};
