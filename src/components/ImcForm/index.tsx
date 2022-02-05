import { FormEvent, ReactEventHandler, ReactNode } from "react"
import { Container } from "./styles"


interface OnTypingProps {
  onTyping: IOnTyping;
  onCalculateImc: IOnCalculateImc;
}

interface IOnTyping {
  userWeight: number;
  setUserWeight: (value: number) => void;
  userHeight: number;
  setUserHeight: (value: number) => void;
}

interface IOnCalculateImc {
  handleCalculateImc: (event: FormEvent) => void;
}

export const ImcForm = ({ onTyping, onCalculateImc }: OnTypingProps) => {
  return (
    <Container onSubmit={(e) => {onCalculateImc.handleCalculateImc(e)}}>
      <label htmlFor="user-weigth" className="sr-only">Digite seu peso em kilos. Ex: 60</label>
      <label htmlFor="user-height" className="sr-only">Digite sua altura em metros. Ex: 1,80</label>
      <input 
        type="text" 
        id="user-weigth" 
        placeholder="Digite o peso em kilos. Ex: 60"
        maxLength={5} minLength={1} pattern="\d\d[,|\.]?\d?\d?"
        onChange={(e) => onTyping.setUserWeight(Number(e.target.value.replace(',', '.')))}
      />
      <input 
        type="text" 
        id="user-height" 
        placeholder="Digite a altura em metros. Ex: 1,80"
        maxLength={20} minLength={1} pattern="\d[,|\.]\d\d?"
        onChange={(e) => onTyping.setUserHeight(Number(e.target.value.replace(',', '.')))}
       />
      <button type="submit">Calcular</button>
    </Container>
  )
} 