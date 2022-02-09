import styled from "styled-components";

export const Container = styled.footer`
  color: var(--primary);
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  h3 {
    font-size: 1.6rem;
    color: var(--tertiary);
  }
  
  em{
    color: var(--primary);
  }
  
  a {
    margin-left: 1rem;
    font-size: 2rem;
    color: var(--secondary);
    
    &:hover{
      transform: scale(1.1);
    }
  }

`