import Cabecalho from './components/Cabecalho';
import Conteudo from './components/Conteudo';
import Rodape from './components/Rodape';
import Mensagem from './components/Mensagem';
import Topo from './components/Topo';
import Meio from './components/Meio';
import Base from './components/Base';
import reactImg from './assets/react.png';

function executarAcao() {
  console.log("Função chamada com sucesso.");
}

function renderizarMensagem() {
  return <p>Texto gerado por uma função de renderização.</p>;
}

function App() {
  const nome = "Ana";
  const anoNascimento = 2005;

  return (
    <div className="app-container">
      {/* Exercício 8: Topo da página */}
      <Topo />

      {/* Exercício 1 e 2 */}
      <h1>Meu primeiro app React</h1>
      <p>Olá, meu nome é {nome} e nasci em {anoNascimento}.</p>

    <img
      src={reactImg}
      alt="Logo do React"
      className="react-image"
    />

      {/* Exercício 3 */}
      <Mensagem />

      {/* Exercício 4 */}
      <Cabecalho />
      <Conteudo />
      <Rodape />

      {/* Exercício 5 */}
      <div className="botoes-container">

      <button className="btn-alert" onClick={() => alert("Você clicou no botão!")}>
        Mostrar Alerta
      </button>

      {/* Exercício 6 */}
      <button className="btn-action" onClick={executarAcao}>
        Executar Ação
      </button>

      </div>

      {/* Exercício 7 */}
      {renderizarMensagem()}

      {/* Exercício 8: Outros componentes de layout */}
      <Meio />
      <Base />
    </div>
  );
}

export default App;
