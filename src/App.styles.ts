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
  padding: 20px;
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
    border: 2px solid #39393a;
    

    &:hover {
      transition: all 0.2s;
      border: 2px solid #297373;
      color: #297373;
      background-color: #e6e6e6;
    }
  }

  input[type="file"] {
    display: none;
  }

  label {
    color: #297373 ;
    cursor: pointer;
   
    padding: 10px;
    border-radius: 10px;
    border: 3px solid #23022e;

    &:hover {
      transition: all 0.2s;
      background-color: #23022e;
      color: #e6e6e6;
      border: 3px solid #297373;
     }
  }
`;
