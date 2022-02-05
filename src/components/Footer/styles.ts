import styled from "styled-components";

export const Container = styled.footer`
  color: var(--text-title);
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  h3 {
    font-size: 1.6rem;
    color: var(--blue);
  }
  
  em{
    color: var(--text-title);
  }
  
  a {
    margin-left: 1rem;
    font-size: 2rem;
    color: var(--text-paragraph);
    
    &:hover{
      transform: scale(1.1);
    }
  }

`