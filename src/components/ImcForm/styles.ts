import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  max-width: 50rem;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 3rem;
  
  input {
    width: 100%;
    height: 4rem;
    padding: 0 2rem ;

    color: var(--input-color);
    background: var(--bg-input);
    font-size: 1.6rem;
    text-align: center;

    border: 0;
    border-radius: 5px;

    & + input {
      margin-top: 1rem;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    } 

    &[type=number] {
      -moz-appearance: textfield;
    }
  }

  button {
    width: 100%;
    height: 4rem;
    color: var(--lavender);
    background: var(--blue);
    margin-top: 1.5rem;

    font-size: 1.6rem;
    border: 0;
    border-radius: 5px;

    &:hover{
      filter: brightness(.9) ;
    }
  }

  @media screen and (min-width: 480px){
    input,
    button {
      height: 4.5rem;
      font-size: 1.8rem;
    }
  }
`