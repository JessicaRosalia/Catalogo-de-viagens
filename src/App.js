import { TextFiled } from './components/TextField/TextField';

function App() {
  return (
    <div style={{backgroundColor: "#c4c4c4", height: "100vh"}}>
      <TextFiled label="Nome do destino" placeholder="Informe aqui o nome do destino" required={true}/>
      <TextFiled label="País" placeholder="Informe aqui o nome do país" required={true}/>
      <TextFiled label="Dica" placeholder="Informe aqui uma dica" required={false}/>
    </div>
  );
}

export default App;
