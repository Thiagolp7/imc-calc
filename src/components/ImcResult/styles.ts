import styled from "styled-components";
import { transparentize } from "polished";

interface OnResultProps {
  onResult: string;
}

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2rem 0;

  .result-label {
    font-weight: 700;
    color: var(--primary);
  }

`