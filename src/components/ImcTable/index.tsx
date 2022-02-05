import { Container } from "./styles"

interface OnRowResultProps {
  onRowResult: number;
}

export const ImcTable = ({onRowResult}: OnRowResultProps) => {
  return (
    <Container>
      <thead>
        <tr>
          <th>IMC</th>
          <th>Classificação</th>
        </tr>
      </thead>
      <tbody>
        <tr className={onRowResult === 1 ? 'result-row' : ''}>
          <td>16 a 16,9</td>
          <td>Muito abaixo do peso</td>
        </tr>
        <tr className={onRowResult === 2 ? 'result-row' : ''}>
          <td>17 a 18,4</td>
          <td>Abaixo do peso</td>
        </tr>
        <tr className={onRowResult === 3 ? 'result-row' : ''}>
          <td>18,5 a 24,9</td>
          <td>Peso normal</td>
        </tr>
        <tr className={onRowResult === 4 ? 'result-row' : ''}>
          <td>25 a 29,9</td>
          <td>Acima do peso</td>
        </tr>
        <tr className={onRowResult === 5 ? 'result-row' : ''}>
          <td>30 a 34,9 </td>
          <td>Obesidade Grau I</td>
        </tr>
        <tr className={onRowResult === 6 ? 'result-row' : ''}>
          <td>35 a 40</td>
          <td>Obesidade Grau II</td>
        </tr>
        <tr className={onRowResult === 7 ? 'result-row' : ''}>
          <td>maior que 40</td>
          <td>Obesidade Grau III</td>
        </tr>
      </tbody>
    </Container>
  )

}