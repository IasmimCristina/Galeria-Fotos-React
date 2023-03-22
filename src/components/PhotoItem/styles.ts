import styled from "styled-components";

export const Container = styled.div`

display:flex;
flex-direction:column;
justify-content: space-around;
background-color: #8c7aa9;

border-radius: 15px;
padding: 5px;
text-align: center;
border: 4px solid #e6e6e6;
/* offset-x | offset-y | blur-radius | color */
box-shadow: 2px 2px 15px grey;
img {
  max-width: 100%;
  bisplay: block;
  border-radius:15px;
}

span {
  color: #e6e6e6;
  font-weight: 600;
  text-shadow: 1px 2px #39393a;
  
  
}

`;