import React, { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { TextField } from '../../components/TextField/TextField';
import { postDestino } from '../../services';
import { BackgroundStyled, ContainerForm, Title } from './style';
import WarningDiv from '../../components/WarningDiv';

const Form = () => {
    const [destinationList, setDestinationList] = useState([]);
    const [destination, setDestination] = useState('');
    const [country, setCountry] = useState('');
    const [description, setDescription] = useState('');
    const [clue, setClue] = useState('');
    const [message, setMessage] = useState("");
  
    const destino_param = { 
      nomeDestino: destination,
      pais: country,
      descricao: description,
      dica: clue,
    }
  
    const saveDestination = async (e) => {
      if(destino_param.nomeDestino && destino_param.pais && destino_param.descricao){
        e.preventDefault();
        setMessage("");
        await postDestino(destino_param)
        .then(()=> {
        setMessage("Cadastro feito com sucesso!");
      })
        .catch(()=>{
        setMessage("Falha no cadastro!");
      });
      }
    }
    return (
      <>

        <BackgroundStyled/>

        { message && (
            <WarningDiv>
              {message}
            </WarningDiv>
        )}     

        <ContainerForm>
            <Title>Cadastre um destino</Title>
            <form>
                <TextField onChangeValue={setDestination} type="text" label="Cidade" required/>
                <TextField onChangeValue={setCountry} type="text" label="Estado" required/>
                <TextField onChangeValue={setCountry} type="text" label="País" required/>
                <TextField onChangeValue={setCountry} type="text" label="Continente" required/>
                <TextField onChangeValue={setCountry} type="text" label="Resumo" required/>
                <TextField onChangeValue={setDescription} type="textarea" label="Descrição complementar" placeholder="Informe aqui uma descrição a respeito do destino" required/>
                <input type="file" required/>
                <Button text="Enviar" onClick={(e) => saveDestination(e)}/>
            </form>
        </ContainerForm>
      </>
    )
}

export default Form;
