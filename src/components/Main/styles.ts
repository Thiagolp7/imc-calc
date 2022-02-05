import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-width: 28.2rem;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  h1 {
    font-size: 3.5rem;
  }
  
  p {
    font-size: 1.8rem;
    color: var(--text-paragraph) ;
  } 
  
  @media screen and (min-width: 480px){
    h1 {
      font-size: 4.5rem;
    }
    
    p {
      font-size: 2rem;
      color: var(--text-paragraph) ;
      margin-bottom: 1rem;
    } 
  }

  

`