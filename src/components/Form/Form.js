import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { TextField } from '../TextField/TextField';
import { postDestino } from '../../services';
import { ContainerForm, Merda, Title } from './style';

export const Form = () => {
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
        <ContainerForm>
            <Title>Cadastre um destino</Title>
            <form>
                <TextField onChangeValue={setDestination} type="text" label="Nome do destino" placeholder="Informe aqui o nome do destino" required={true}/>
                <TextField onChangeValue={setCountry} type="text" label="País" placeholder="Informe aqui o nome do país" required={true}/>
                <TextField onChangeValue={setDescription} type="textarea" label="Descrição" placeholder="Informe aqui uma descrição a respeito do destino" required={true}/>
                <TextField onChangeValue={setClue} type="text" label="Dica" placeholder="Informe aqui uma dica" required={false}/>
                <Button text="Enviar" onClick={(e) => saveDestination(e)}/>
            </form>
        </ContainerForm>
    )
}
