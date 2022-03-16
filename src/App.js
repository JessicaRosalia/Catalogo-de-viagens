import { useEffect, useState } from 'react';
import { Button } from './components/Button/Button';
import { TextFiled } from './components/TextField/TextField';
import { postDestino } from './services';

function App() {
  const [destinationList, setDestinationList] = useState([]);
  const [destination, setDestination] = useState('');
  const [country, setCountry] = useState('');
  const [description, setDescription] = useState('');
  const [clue, setClue] = useState('');

  const destino_param = { 
    nomeDestino: destination,
    pais: country,
    descricao: description,
    dica: clue,
  }

  const saveDestination = async (e) => {
    e.preventDefault();
    await postDestino(destino_param).then(()=> console.log("sucesso")).catch(()=>console.log("falha"));
  }

  return (
      <div style={{backgroundColor: "#c4c4c4", height: "100vh"}}>
      <form>
        <TextFiled onChangeValue={setDestination} type="text" label="Nome do destino" placeholder="Informe aqui o nome do destino" required={true}/>
        <TextFiled onChangeValue={setCountry} type="text" label="País" placeholder="Informe aqui o nome do país" required={true}/>
        <TextFiled onChangeValue={setDescription} type="textarea" label="Descrição" placeholder="Informe aqui uma descrição a respeito do destino" required={true}/>
        <TextFiled onChangeValue={setClue} type="text" label="Dica" placeholder="Informe aqui uma dica" required={false}/>
        <Button text="Enviar" onClick={(e) => saveDestination(e)}/>
      </form>
    </div>
  );
}

export default App;
