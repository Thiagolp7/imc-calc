import { transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  max-width: 50rem;

  border-spacing: 0;

  & th:first-child {
    border-radius: .5rem 0 0 0;
  }
  
  & th:last-child {
    border-radius: 0 .5rem 0 0;
  }

  & tr:last-child td:first-child {
    border-radius: 0 0 0 .5rem ;
  }
  
  & tr:last-child  td:last-child {
    border-radius: 0 0 .5rem 0;
  }
  
  & tr:last-child td {
    border-bottom: 5px solid ${transparentize(0.5, '#F26DF9')};
  }
  
  th {
    font-size: 1.6rem;
    color: var(lave);
    background: ${transparentize(0.6, '#F26DF9')};
  }
  
  td {
    border-bottom: 1px solid var(--pink);
    font-size: 1.6rem;
    text-align: center;
    padding: .3rem;
  }

  .result-row {
    background: var(--blue);
  }

  @media screen and (min-width: 480px){
    th {
      font-size: 2rem;
    }

    td {
      font-size: 2rem;
    } 
  }
`