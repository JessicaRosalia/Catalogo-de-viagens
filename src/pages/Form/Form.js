import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button/Button';
import { TextInput } from '../../components/TextInput/TextInput';
import { postDestino } from '../../services';
import { BackgroundStyled, ContainerFormStyled, MainStyled, FormStyled, HeaderStyled, TitleStyled, ContainerUploadFileStyled, FileLabelStyled } from './style';
import WarningDiv from '../../components/WarningDiv';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Form = () => {
  const [destinationList, setDestinationList] = useState([]);
  const [warningMessage, setWarningMessage] = useState({
    type: 'default',
    message: ''
  });
  const [destination, setDestination] = useState(
    {
      name: {
        value: '',
        inputClass: ''
      },
      city: {
        value: '',
        inputClass: ''
      },
      state: {
        value: '', 
        inputClass: ''
      },
      country:{
        value: '',
        inputClass: ''
      },
      continent: {
        value:'',
        inputClass: ''
      },
      description: {
        value: '',
        inputClass: ''
      },
      summary: {
        value: '',
        inputClass: ''
      }
    }
  )

  const changeDestination = (fieldName, fieldValue) => {
    setDestination({
      ...destination,
      [fieldName]: {
        value: fieldValue,
        inputClass: ''
      }
    })
  }

  const fieldValidation = () => {
    let aux;
    Object.keys(destination).forEach(information => {  
        aux = {
          ...aux,
          [information]: {
            ...destination[information],
            inputClass: !destination[information].value ? 'error' : ''
        }
      } 
    })

    setDestination(aux)
  }

  const destino_param = { 
    nomeDestino: destination.name.value,
    cidade: destination.city.value,
    estado: destination.state.value,
    pais: destination.country.value,
    continente: destination.continent.value,
    descricao: destination.description.value,
    resumo: destination.summary.value,
  }
    
    const saveDestination = async (e) => {
      
      if(destino_param.nomeDestino && destino_param.cidade && destino_param.estado && destino_param.pais && destino_param.continente && destino_param.descricao && destino_param.resumo){
        e.preventDefault();
        setWarningMessage({
          type: 'default',
          message: '',
        });
        await postDestino(destino_param)
        .then(()=> {
          setWarningMessage({
            type: 'success',
            message: 'Cadastro realizado com sucesso!',
          });
        })
        .catch(()=>{
          setWarningMessage({
            type: 'error',
            message: 'Falha no cadastro. Tente novamente!',
          });
        });
      }
      else{
        fieldValidation();
        setWarningMessage({
          type: 'error',
          message: 'É necessário que você preencha todos os campos obrigatórios.',
        });
      }
    }

    return (
      <>

        { warningMessage.message && (
            <WarningDiv type={warningMessage.type}>
              {warningMessage.message}
            </WarningDiv>
        )}     

        <Header />
        <ContainerFormStyled>
            <MainStyled>
              <TitleStyled>Cadastre um destino</TitleStyled>
              <FormStyled>
                <div>
                  <div>
                    <TextInput onChangeValue={changeDestination} fieldName='name' type="text" label="Nome do destino" required emptyInputClass={destination.name.inputClass} />
                    <TextInput onChangeValue={changeDestination} fieldName='city' type="text" label="Cidade" required emptyInputClass={destination.city.inputClass} />
                    <TextInput onChangeValue={changeDestination} fieldName='state' type="text" label="Estado" required emptyInputClass={destination.state.inputClass} />
                    <TextInput onChangeValue={changeDestination} fieldName='country' type="text" label="País" required emptyInputClass={destination.country.inputClass} />
                  </div>
                  <div>
                    <TextInput onChangeValue={changeDestination} fieldName='continent' type="text" label="Continente" required emptyInputClass={destination.continent.inputClass} />
                    <TextInput onChangeValue={changeDestination} fieldName='summary' type="text" label="Resumo" required emptyInputClass={destination.summary.inputClass} />
                    <TextInput onChangeValue={changeDestination} fieldName='description' type="textarea" label="Descrição complementar" required placeholder="Informe aqui uma descrição a respeito do destino" emptyInputClass={destination.description.inputClass} />
                  </div>
                </div>
                <ContainerUploadFileStyled>
                  <FileLabelStyled htmlFor="photos">Selecione uma foto para ser a capa<span>*</span></FileLabelStyled>
                  <input name="photo" id="photos" type="file" accept="image/png, image/jpeg" />
                </ContainerUploadFileStyled>
                <Button text="Enviar" onClick={(e) => saveDestination(e)}/>
              </FormStyled>
            </MainStyled>
        </ContainerFormStyled>
        <Footer />
      </>
    )
}

export default Form;
