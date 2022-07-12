import React, { useState } from 'react';
import { Button } from '../../components/Button/Button';
import { TextField } from '../../components/TextField/TextField';
import { postDestino } from '../../services';
import { BackgroundStyled, ContainerFormStyled, MainStyled, FormStyled, HeaderStyled, TitleStyled, ContainerUploadFileStyled, ContainerFilesStyled, FileInputStyled, ContainerFileInputStyled, FileLabelStyled } from './style';
import WarningDiv from '../../components/WarningDiv';
import Footer from '../../components/Footer/Footer';

const Form = () => {
    const [destinationList, setDestinationList] = useState([]);
    const [destination, setDestination] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [continent, setContinent] = useState('');
    const [description, setDescription] = useState('');
    const [summary, setSummary] = useState('');
    const [message, setMessage] = useState("");
  
    const destino_param = { 
      nomeDestino: destination,
      cidade: city,
      estado: state,
      pais: country,
      continente: continent,
      descricao: description,
      resumo: summary,
    }
  
    const saveDestination = async (e) => {
      if(destino_param.nomeDestino && destino_param.pais && destino_param.descricao){
        e.preventDefault();
        setMessage("");
        await postDestino(destino_param)
        .then(()=> {
        setMessage("Cadastro realizado com sucesso!");
      })
        .catch(()=>{
        setMessage("Falha no cadastro. Tente novamente!");
      });
      }
    }

    return (
      <>

        {/* <BackgroundStyled/> */}

        { message && (
            <WarningDiv>
              {message}
            </WarningDiv>
        )}     

        <ContainerFormStyled>
          <HeaderStyled />
            <TitleStyled>Cadastre um destino</TitleStyled>
            <MainStyled>
              <FormStyled>
                <div>
                  <div>
                  <TextField onChangeValue={setDestination} type="text" label="Nome do destino" required/>
                  <TextField onChangeValue={setCity} type="text" label="Cidade" required/>
                  <TextField onChangeValue={setState} type="text" label="Estado" required/>
                  <TextField onChangeValue={setCountry} type="text" label="País" required/>
                  </div>
                  <div>
                  <TextField onChangeValue={setContinent} type="text" label="Continente" required/>
                  <TextField onChangeValue={setSummary} type="text" label="Resumo" required/>
                  <TextField onChangeValue={setDescription} type="textarea" label="Descrição complementar" placeholder="Informe aqui uma descrição a respeito do destino" required/>
                  </div>
                </div>
                <ContainerUploadFileStyled>
                  <ContainerFilesStyled>
                  <p>Carregue suas fotos aqui</p>
                  <span>+</span>
                  </ContainerFilesStyled>
                  <ContainerFileInputStyled>
                    <FileLabelStyled for="photos">Enviar foto</FileLabelStyled>
                    <FileInputStyled name="photos" id="photos" type="file" required accept="image/png, image/jpeg"/>
                    </ContainerFileInputStyled>
                </ContainerUploadFileStyled>
              </FormStyled>
                <Button text="Enviar" onClick={(e) => saveDestination(e)}/>
            </MainStyled>
            <Footer />
        </ContainerFormStyled>
      </>
    )
}

export default Form;
