import { Container } from "./styles"

interface OnImcResultProps{
  onImcResult: string;
}

export const ImcResult = ({onImcResult}: OnImcResultProps) => {
  return (
    <Container>
      <p className="result-label">{onImcResult}</p>
    </Container>
  )
}