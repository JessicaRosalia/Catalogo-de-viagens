import Menu from "../../components/Menu/Menu";
import { ButtonStyled, Container, ContainerInput, BackgroundLogoStyled, InputStyled, LogoStyled, CardContainer, H1Styled, DestinationCardContent } from "./style";
import BackgroundLogo from '../../assets/images/porDoSol.jpg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/images/FlowTrip.png';
import Footer from "../../components/Footer/Footer";
import axios from 'axios';
import { useEffect, useState} from "react";
import DestinationCard from "../../components/DestinationCard/DestinationCard";

function HomePage(){

    const [todosDestinos, setTodosDestinos] = useState([]);

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
        console.log(todosDestinos);
    }, [todosDestinos]);
    
    return(
        <>
        <Container>
           <BackgroundLogoStyled src={BackgroundLogo}/>
           <LogoStyled src={Logo}/>
            <Menu/>

            <ContainerInput>
                <InputStyled
                    type="text"
                    placeholder="Pesquisa de Destinos"
                />

                <FontAwesomeIcon icon={faMagnifyingGlass}/>

                <ButtonStyled>
                    Buscar
                </ButtonStyled>
            </ContainerInput>

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

        </Container>

        <Footer/>
        </>
    )
}

export default HomePage;