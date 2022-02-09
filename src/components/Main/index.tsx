import { FormEvent, useState } from "react"
import { ImcForm } from "../ImcForm"
import { ImcResult } from "../ImcResult"
import { ImcTable } from "../ImcTable"
import { Container } from "./styles"

export const Main = () => {
  const [userWeight, setUserWeight] = useState(0);
  const [userHeight, setUserHeight] = useState(0);
  const [imcResult, setImcResult] = useState(' ');
  const [rowResult, setRowResult] = useState(0);

  function handleCalculateImc(e: FormEvent){
    e.preventDefault()
    
    if(userWeight !== 0 && userHeight !== 0){
      //Peso ÷ (altura x altura)
      const imc = userWeight / (userHeight * userHeight)
      const result = `Seu IMC é ${imc.toFixed(2)}`

      switch(imc > 0){
        case imc <= 16.9:
          setImcResult(`${result} - Muito abaixo do peso`);
          setRowResult(1);
          return
        case imc >= 17 && imc <= 18.4:
          setImcResult(`${result} - Abaixo do peso`);
          setRowResult(2);
          return
        case imc >= 18.5 && imc <= 24.9:
          setImcResult(`${result} - Peso normal`);
          setRowResult(3);
          return
        case imc >= 25 && imc <= 29.9:
          setImcResult(`${result} - Acima do peso`);
          setRowResult(4);
          return
        case imc >= 30 && imc <= 34.9:
          setImcResult(`${result} - Obesidade Grau I`);
          setRowResult(5);
          return
        case imc >= 35 && imc <= 40:
          setImcResult(`${result} - Obesidade Grau II`);
          setRowResult(6);
          return
        case imc > 40:
          setImcResult(`${result} - Obesidade Grau III`);
          setRowResult(7);
          return
        default:
          console.log(imc, result)
          alert('Ops, algo deu errado! Confira os dados e tente novamente.')
          return
      }
    } else {
      alert('Preencha todos os campos corretamente.')
    }
  }

  return (
    <Container>
      <h1>Calcule seu IMC </h1>
      <p>Índice de massa corporal</p>
      <ImcForm onTyping={{userWeight, setUserWeight, userHeight, setUserHeight}} 
        onCalculateImc={{handleCalculateImc}}
      />
      <ImcResult onImcResult={imcResult}/>
      <ImcTable onRowResult={rowResult}/>
    </Container>
  )
}