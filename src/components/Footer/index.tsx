import { FaGithub } from "react-icons/fa"
import { Container } from "./styles"

export const Footer = () => {
  return (
    <Container>
      <h3>Criado por <em>Thiago Luiz</em>
      </h3>
      <a href="https://github.com/thiagolp7" target="_blank"
        title="Github">
      <FaGithub/>  
      </a>
    </Container>
  )
}