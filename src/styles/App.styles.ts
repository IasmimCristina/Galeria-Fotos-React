import styled from "styled-components";
import { devices } from "../mediaQueries";
export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.secondary};
  min-height: 100vh;
`;

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UploadAreaPhotos = styled.div`
  padding: 10px;

  border-radius: 10px;
  border: 5px solid ${(props) => props.theme.colors.transparentBckgSec};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.transparentBckg};
  @media ${devices.mobile} {
    max-width: 95vw;
  }
  @media ${devices.tablet} {
    max-width: 96vw;
  }
  @media ${devices.laptop} {
    width: 85vw;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};

  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 10px 5px 15px grey;
  @media ${devices.mobile} {
    height: 12vh;
    border-bottom: 10px solid ${(props) => props.theme.colors.shadow};
    margin-bottom: 20px;
  }
  @media ${devices.tablet} {
    border-bottom: 15px solid ${(props) => props.theme.colors.shadow};
    margin-bottom: 50px;
    height: 15vh;
  }
  @media ${devices.laptop} {
    border-bottom: 15px solid ${(props) => props.theme.colors.shadow};
    margin-bottom: 80px;
    height: 12vh;
  }

  h1 {
    text-align: center;
    font-weight: 600;
    text-shadow: 3px 5px ${(props) => props.theme.colors.shadow};

    @media ${devices.mobile} {
      background-color: ${(props) => props.theme.colors.shadow};
      font-size: 1.2rem;
      text-shadow: 2px 3px ${(props) => props.theme.colors.textShadow};
      width: 70vw;
      height: 50px;
      padding: 15px;
      border-radius: 45px;
    }
    @media ${devices.tablet} {
      background-color: ${(props) => props.theme.colors.primary};
      font-size: 3.5rem;
      width: auto;
      height: auto;
    }
    @media ${devices.laptop} {
      background-color: ${(props) => props.theme.colors.primary};
      font-size: 4rem;
    }
  }
`;

export const Warning = styled.div`
  background-color: ${(props) => props.theme.colors.shadow};

  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 5px solid ${(props) => props.theme.colors.secondary};
  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 10px 5px 25px grey;
  margin: 0 auto;

  @media ${devices.mobile} {
    height: 12rem;
    width: 15rem;
    margin-top: 0px;
    justify-content: space-evenly;
  }

  @media ${devices.tablet} {
    height: 15rem;
    width: 30rem;
    margin-bottom: 20px;
  }
  @media ${devices.laptop} {
    height: 18rem;
    width: 40rem;
    margin-top: 50px;
  }
  .message {
    color: ${(props) => props.theme.colors.warning};
    font-weight: bold;
    text-align: center;

    @media ${devices.mobile} {
      font-size: 1rem;
      width: 150px;
    }
    @media ${devices.tablet} {
      width: 400px;
      font-size: 1.3rem;
    }
    @media ${devices.laptop} {
      width: 400px;
      font-size: 1.8rem;
    }
  }

  .emoji {
    @media ${devices.mobile} {
      font-size: 2.5rem;
    }
    @media ${devices.tablet} {
      font-size: 4.5rem;
    }
    @media ${devices.laptop} {
      font-size: 9rem;
    }
  }
`;

export const PhotosList = styled.div`
  display: grid;

  @media ${devices.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
  }
  @media ${devices.tablet} {
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
  }
  @media ${devices.laptop} {
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
  }
`;

export const UploadForm = styled.form`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 25px;
  border-radius: 35px;
  margin: 0 15px 50px;
  border: 1px solid ${(props) => props.theme.colors.primary};
  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 3px 1px 5px grey;
  font-size: smaller;
  display: flex;
  gap: 5vw;
  align-items: center;

  span {
    font-weight: bolder;
    text-shadow: 0.5px 1px ${(props) => props.theme.colors.primarySecond};
    font-style: italic;
  }

  @media ${devices.mobile} {
    padding: 15px;
    height: 20vh;
    flex-direction: column;
    gap: 2vh;
  }
  @media ${devices.tablet} {
    width: 85%;
    flex-direction: row;
    gap: 1vw;
    height: 10vh;
  }
  @media ${devices.laptop} {
    width: 85%;
    gap: 1.5vw;
    height: 15vh;
  }
  .submit-button {
    background-color: ${(props) => props.theme.colors.submit};

    height: 4.2vh;
    color: ${(props) => props.theme.colors.secondary};
    font-weight: bold;
    cursor: pointer;
    border-radius: 20px;
    border: 3px solid ${(props) => props.theme.colors.primary};

    @media ${devices.mobile} {
      height: 5vh;
      font-size: small;
    }
    @media ${devices.tablet} {
      font-size: 1rem;
      height: 3.5vh;
      width: 6rem;
    }
    @media ${devices.laptop} {
      font-size: 1.2rem;
      height: 5vh;
      width: 7rem;
    }
    &:hover {
      transition: all 0.2s;
      border: 3px solid ${(props) => props.theme.colors.submit};
      color: ${(props) => props.theme.colors.submit};
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
  /* Estilização da área de arquivos */

  input[type="file"] {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  input[type="file"]:focus + label {
    background-color: ${(props) => props.theme.colors.submit};
  }

  label {
    color: ${(props) => props.theme.colors.submit};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px;
    border-radius: 10px;
    border: 3px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.primarySecond};
    @media ${devices.tablet} {
      width: 85%;
      display: flex;
      justify-content: center;
      font-size: 1.2rem;
    }
    @media ${devices.laptop} {
      width: 70%;
    }

    &:hover {
      background-color: ${(props) => props.theme.colors.submit};
    }
    &:hover,
    &:hover .material-symbols-outlined {
      transition: all 0.2s;
      color: ${(props) => props.theme.colors.secondary};
    }

    .material-symbols-outlined {
      color: ${(props) => props.theme.colors.submit};
      font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
    }
  }

  span {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;
