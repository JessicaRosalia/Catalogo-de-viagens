import { TextFiled } from './components/TextField/TextField';

function App() {
  return (
    <div style={{backgroundColor: "#c4c4c4", height: "100vh"}}>
      <TextFiled type="text" label="Nome do destino" placeholder="Informe aqui o nome do destino" required={true}/>
      <TextFiled type="text" label="País" placeholder="Informe aqui o nome do país" required={true}/>
      <TextFiled type="textarea" label="Descrição" placeholder="Informe aqui uma descrição a respeito do destino" required={true}/>
      <TextFiled type="text" label="Dica" placeholder="Informe aqui uma dica" required={false}/>
    </div>
  );
}

export default App;
