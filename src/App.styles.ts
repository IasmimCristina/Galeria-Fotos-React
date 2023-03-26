import styled from "styled-components";

export const Container = styled.div`
  background-color: #e6e6e6;
  color: #e6e6e6;
  min-height: 100vh;
  min-width: 100vw;
`;

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;  
`;

export const UploadAreaPhotos = styled.div`
  padding: 10px;
  max-width: 80vw;
  border-radius: 10px;
  border: 5px solid rgba(171, 138, 186, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background-color: rgba(171, 138, 186, 0.2);
`;

export const Header = styled.div`
  height: 15vh;
  width: 100vw;
  padding: 1.2rem;
  background-color: #8c7aa9;
  border-bottom: 15px solid #39393a;
  margin-bottom: 80px;
  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 10px 5px 15px grey;
  h1 {
    text-align: center;
    font-size: 5rem;
    font-weight: 600;
    text-shadow: 3px 5px #39393a;
  }
`;

export const Warning = styled.div`
  background-color: #39393a;
  height: 15rem;
  width: 30rem;

  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 5px solid #e6e6e6;
  /* offset-x | offset-y | blur-radius | color */
  box-shadow: 10px 5px 25px grey;
  margin: 0 auto;
  margin-top: 50px;

  .message {
    color: #c6c5b9;
    font-size: 1.5rem;
    font-weight: bold;
    width: 400px;

    text-align: center;
  }

  .emoji {
    font-size: 5.5rem;
  }
`;

export const PhotosList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
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

  .submit-button {
    background-color: #297373;
    padding: 8px;
    height: 4.2vh;
    color: #e6e6e6;
    font-weight: bold;
    cursor: pointer;
    border-radius: 20px;
    border: 3px solid #8c7aa9;

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
