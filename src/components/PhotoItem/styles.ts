import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.primary};

  border-radius: 15px;
  padding: 5px;
  text-align: center;
  border: 4px solid ${(props) => props.theme.colors.secondary};
  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 2px 2px 15px grey;

  img {
    max-width: 100%;
    display: block;
    border-radius: 15px;
  }

  span {
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 600;
    text-shadow: 1px 2px ${(props) => props.theme.colors.shadow};
    font-size: smaller;
  }
`;
