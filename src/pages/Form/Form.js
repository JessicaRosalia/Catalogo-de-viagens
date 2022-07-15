import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button/Button';
import { TextField } from '../../components/TextField/TextField';
import { postDestino } from '../../services';
import { BackgroundStyled, ContainerFormStyled, MainStyled, FormStyled, HeaderStyled, TitleStyled, ContainerUploadFileStyled, ContainerFilesStyled, FileInputStyled, ContainerFileInputStyled, FileLabelStyled } from './style';
import WarningDiv from '../../components/WarningDiv';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';

const Form = () => {
  const [destinationList, setDestinationList] = useState([]);
  const [warningMessage, setWarningMessage] = useState('');
  const [emptyInputClass, setEmptyInputClass] = useState('');
  const [destination, setDestination] = useState({
    name: '',
    city: '',
    state: '', 
    country: '',
    continent:'',
    description: '',
    summary: '',
  })

  const changeDestination = (fieldName, value) => {
    setDestination({
      ...destination,
      [fieldName]: value,
    })
  }

  const fieldValidation = () => {
    Object.keys(destination).forEach(information => {
      if(!destination[information]) {
        setEmptyInputClass('error');
      }
    })
  }

  const destino_param = { 
    nomeDestino: destination.name,
    cidade: destination.city,
    estado: destination.state,
    pais: destination.country,
    continente: destination.continent,
    descricao: destination.description,
    resumo: destination.summary,
  }
    
    const saveDestination = async (e) => {

      if(destino_param.nomeDestino && destino_param.cidade && destino_param.estado && destino_param.pais && destino_param.continente && destino_param.descricao && destino_param.resumo){
        e.preventDefault();
        setWarningMessage("");
        await postDestino(destino_param)
        .then(()=> {
          setWarningMessage("Cadastro realizado com sucesso!");
        })
        .catch(()=>{
          setWarningMessage("Falha no cadastro. Tente novamente!");
        });
      }
      else{
        fieldValidation();
        setWarningMessage("É necessário que você preencha todos os campos obrigatórios.");
      }
    }

    return (
      <>

        { warningMessage && (
            <WarningDiv>
              {warningMessage}
            </WarningDiv>
        )}     

        <ContainerFormStyled>
            <Menu />
            <TitleStyled>Cadastre um destino</TitleStyled>
            <MainStyled>
              <FormStyled>
                <div>
                  <div>
                  <TextField onChangeValue={changeDestination} fieldName='name' type="text" label="Nome do destino" required emptyInputClass={emptyInputClass} />
                  <TextField onChangeValue={changeDestination} fieldName='city' type="text" label="Cidade" required emptyInputClass={emptyInputClass} />
                  <TextField onChangeValue={changeDestination} fieldName='state' type="text" label="Estado" required emptyInputClass={emptyInputClass} />
                  <TextField onChangeValue={changeDestination} fieldName='country' type="text" label="País" required emptyInputClass={emptyInputClass} />
                  </div>
                  <div>
                  <TextField onChangeValue={changeDestination} fieldName='continent' type="text" label="Continente" required emptyInputClass={emptyInputClass} />
                  <TextField onChangeValue={changeDestination} fieldName='summary' type="text" label="Resumo" required emptyInputClass={emptyInputClass} />
                  <TextField onChangeValue={changeDestination} fieldName='description' type="textarea" label="Descrição complementar" placeholder="Informe aqui uma descrição a respeito do destino" required emptyInputClass={emptyInputClass} />
                  </div>
                </div>
                <ContainerUploadFileStyled>
                  <ContainerFilesStyled>
                  <p>Carregue suas fotos aqui</p>
                  <span>+</span>
                  </ContainerFilesStyled>
                  <ContainerFileInputStyled>
                    <FileLabelStyled htmlFor="photos">Enviar foto</FileLabelStyled>
                    <FileInputStyled name="photos" id="photos" type="file" accept="image/png, image/jpeg"/>
                    </ContainerFileInputStyled>
                </ContainerUploadFileStyled>
                <Button text="Enviar" onClick={(e) => saveDestination(e)}/>
              </FormStyled>
            </MainStyled>
            <Footer />
        </ContainerFormStyled>
      </>
    )
}

export default Form;
