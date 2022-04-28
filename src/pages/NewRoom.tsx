import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'


import '../styles/auth.scss';
import '../styles/button.scss';
import { Button } from '../components/Button';


export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie Salas de Q&amp;A ao-vivo</strong>
        <p>Tire suas duvidas em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask logotipo" />
          <h2>Crie sua Sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da Sala"
            />
            <Button className="button" type="submit">
              Criar Sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <a href="#">Clique aqui!</a>
          </p>
        </div>
      </main>
    </div>
  );
}