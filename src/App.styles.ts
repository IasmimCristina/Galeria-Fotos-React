import styled from "styled-components";
import { devices } from "./mediaQueries";
export const Container = styled.div`
  background-color: #e6e6e6;
  color: #e6e6e6;
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
  border: 5px solid rgba(171, 138, 186, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: rgba(171, 138, 186, 0.2);
  @media ${devices.mobile} {
    max-width: 95vw;
  }
  @media ${devices.tablet} {
    max-width: 96vw;
  }
  @media ${devices.laptop} {
    max-width: 85vw;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  padding: 1.2rem;
  background-color: #8c7aa9;

  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 10px 5px 15px grey;
  @media ${devices.mobile} {
    height: 15vh;
    border-bottom: 10px solid #39393a;
    margin-bottom: 20px;
  }
  @media ${devices.tablet} {
    border-bottom: 15px solid #39393a;
    margin-bottom: 50px;
    height: 20vh;
  }
  @media ${devices.laptop} {
    border-bottom: 15px solid #39393a;
    margin-bottom: 80px;
    height: 15vh;
  }

  h1 {
    text-align: center;
    font-weight: 600;
    text-shadow: 3px 5px #39393a;

    @media ${devices.mobile} {
      background-color: #39393a;
      font-size: 2.8rem;
      text-shadow: 2px 3px #232327;
      width: 80vw;
      height: 90px;
      padding: 15px;
      border-radius: 45px;
    }
    @media ${devices.tablet} {
      background-color: #8c7aa9;
      font-size: 4.5rem;
    }
    @media ${devices.laptop} {
      background-color: #8c7aa9;
      font-size: 5rem;
    }
  }
`;

export const Warning = styled.div`
  background-color: #39393a;

  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 5px solid #e6e6e6;
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
    height: 15rem;
    width: 30rem;
    margin-top: 50px;
  }
  .message {
    color: #c6c5b9;
    font-weight: bold;
    text-align: center;

    @media ${devices.mobile} {
      font-size: 1.2rem;
      width: 150px;
    }
    @media ${devices.tablet} {
      width: 400px;
      font-size: 1.3rem;
    }
    @media ${devices.laptop} {
      width: 400px;
      font-size: 1.5rem;
    }
  }

  .emoji {
    @media ${devices.mobile} {
      font-size: 3.5rem;
    }
    @media ${devices.tablet} {
      font-size: 4.5rem;
    }
    @media ${devices.laptop} {
      font-size: 5.5rem;
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
  background-color: #e6e6e6;
  padding: 25px;
  border-radius: 35px;
  margin: 0 15px 50px;
  border: 1px solid #8c7aa9;
  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 3px 1px 5px grey;

  display: flex;
  gap: 5vw;
  align-items: center;

  span {
    font-weight: bolder;
    text-shadow: 0.5px 1px #eaddff;
    font-style: italic;
  }

  @media ${devices.mobile} {
    height: 19vh;
    flex-direction: column;
    gap: 1.5vh;
  }
  @media ${devices.tablet} {
    width: 85%;
    flex-direction: row;
    gap: 1vw;
    height: 17vh;
  }
  @media ${devices.laptop} {
    width: 75%;
    gap: 1.5vw;
    height: 15vh;
  }
  .submit-button {
    background-color: #297373;
    padding: 8px;
    height: 4.2vh;
    color: #e6e6e6;
    font-weight: bold;
    cursor: pointer;
    border-radius: 20px;
    border: 3px solid #8c7aa9;

    @media ${devices.mobile} {
      height: 5.2vh;
      font-size: large;
    }
    @media ${devices.tablet} {
      font-size: 1rem;
      height: 4vh;
      width: 6rem;
    }
    @media ${devices.laptop} {
      /* FALTA TEMRINAR ESSES DETALHES DA REPSONSIVIDADE! */
    }
    &:hover {
      transition: all 0.2s;
      border: 3px solid #297373;
      color: #297373;
      background-color: #e6e6e6;
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
    background-color: #297373;
  }

  label {
    color: #297373;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 10px;
    border-radius: 10px;
    border: 3px solid #8c7aa9;
    background-color: #eaddff;
    @media ${devices.tablet} {
      width: 85%;
      display: flex;
      justify-content: center;
      font-size: 1.2rem;
    }
    @media ${devices.laptop} {
      width:70%;
    }


    &:hover {
      background-color: #297373;
    }
    &:hover,
    &:hover .material-symbols-outlined {
      transition: all 0.2s;
      color: #e6e6e6;
    }

    .material-symbols-outlined {
      color: #297373;
      font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
    }
  }

  span {
    color: #522a27;
  }
`;
