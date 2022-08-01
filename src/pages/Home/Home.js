import { 
    ButtonStyled, 
    Container, 
    ContainerInput, 
    InputStyled, 
    CardContainer, 
    H1Styled} from "./style";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from 'axios';
import { useEffect, useState} from "react";
import DestinationCard from "../../components/DestinationCard/DestinationCard";
import NoneResultFound from "../NoneFound/NoneFound";

function HomePage(){

    const [todosDestinos, setTodosDestinos] = useState([]);
    const [destinosPesquisados, setDestinosPesquisados] = useState([]);
    const [palavraPesquisada, setPalavraPesquisada] = useState("");

    if(!localStorage.getItem('token')){
        window.location.href="/login";
    }

    async function listaDestinos() {

        const res = await axios.get('http://localhost:8080/cadastrar/listar/destinos');

        return res.data;
    }

    useEffect(()=>{
        const listarDestinos = async ()=>{

            try{
                const res = await listaDestinos();
                setTodosDestinos(res);
            }
            catch{
                alert("Deu ruim");
            }
        }
        listarDestinos();
    }, []);

    useEffect(()=>{
        console.log(palavraPesquisada);
    }, [palavraPesquisada]);

    function pesquisarDestinos(dadosParaPesquisa) {
        let fon;
        if(dadosParaPesquisa ===""){
            setDestinosPesquisados([]);
        }
        else{
            fon = todosDestinos.filter((destino) => {
                if(destino.nomeDestino.includes(dadosParaPesquisa) || destino.pais.includes(dadosParaPesquisa)){
                    return destino;
                }
            })
            setDestinosPesquisados(fon);
        }
    }
    
    return(
        <>
        <Header/>

        <Container>
            <ContainerInput>
                <InputStyled
                    type="text"
                    placeholder="Pesquisa de Destinos"
                    onChange={(evento) => {
                        pesquisarDestinos(evento.target.value);
                        setPalavraPesquisada(evento.target.value);
                    }}
                />

                <FontAwesomeIcon icon={faMagnifyingGlass}/>

                <ButtonStyled>
                    Buscar
                </ButtonStyled>
            </ContainerInput>
            
            {(todosDestinos?.length && palavraPesquisada==="") ? <>
                <H1Styled> Últimos Cadastrados </H1Styled> 
                    <CardContainer>
                        {todosDestinos?.map( destino => {
                            return (
                                <DestinationCard key={destino.id}>
                                    {destino.nomeDestino}
                                    {destino.pais}
                                </DestinationCard>
                            )
                        })}
                    </CardContainer>
                
            </> : (destinosPesquisados?.length && palavraPesquisada!=="") ? <>
                <H1Styled> Últimos Cadastrados </H1Styled> 
                    <CardContainer>
                        {destinosPesquisados?.map( destino => {
                            return (
                                <DestinationCard key={destino.id}>
                                    {destino.nomeDestino}
                                    {destino.pais}
                                </DestinationCard>
                            )
                        })}
                    </CardContainer>
            </> : <NoneResultFound/>}
        </Container>

        <Footer/>
        </>
    )
}

export default HomePage;