import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { TextField } from '../TextField/TextField';
import { postDestino } from '../../services';
import { BackgroundStyled, ContainerForm, Title } from './style';
import WarningDiv from '../WarningDiv';

export const Form = () => {
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
                <TextField onChangeValue={setDestination} type="text" label="Nome do destino" placeholder="Informe aqui o nome do destino" required/>
                <TextField onChangeValue={setCountry} type="text" label="País" placeholder="Informe aqui o nome do país" required/>
                <TextField onChangeValue={setDescription} type="textarea" label="Descrição" placeholder="Informe aqui uma descrição a respeito do destino" required/>
                <TextField onChangeValue={setClue} type="text" label="Dica" placeholder="Informe aqui uma dica" required={false}/>
                <Button text="Enviar" onClick={(e) => saveDestination(e)}/>
            </form>
        </ContainerForm>
      </>
    )
}
