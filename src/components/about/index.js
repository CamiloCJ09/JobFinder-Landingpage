import {
  Links,
  Container,
  Chrome,
  Firefox,
  ColunaImagem,
  Paragrafo,
  Titulo,
  Linha,
  Textos,
  Rota,
} from "./styled";
import imagem from "./../../assets/images/jobfinder.png";
import { i18n } from "./../../translate/i18n";
import * as Scroll from 'react-scroll'
export default function About() {
  function scrollToBotton(){
    var scroll    = Scroll.animateScroll;
    scroll.scrollToBottom();
  }
 
  return (
    <Container>
      <Linha>
        <Textos>
          <Titulo>{i18n.t("about.titulo")}</Titulo>
          <Paragrafo>{i18n.t("about.paragrafo")}</Paragrafo>
          <Chrome
              path="/"
              target="_blank"
            >
              <a onClick={scrollToBotton}>{i18n.t("about.buttons.chrome")}</a>
            </Chrome>
        </Textos>
        <ColunaImagem>
          <img src={imagem} alt="bookmark" />
        </ColunaImagem>
      </Linha>
    </Container>
  );
}
