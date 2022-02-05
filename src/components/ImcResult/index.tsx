import { Container } from "./styles"

interface OnResultProps{
  onResult: string;
}

export const ImcResult = ({onResult}: OnResultProps) => {
  return (
    <Container onResult={onResult}>
      <p className="result-label">{onResult}</p>
    </Container>
  )
}