import NoneFoundMap from "../../assets/images/mapaNaoEncontrado.jpg"
import {NoneFoundContainer, NoneFound, ImageStyled, Subtitle, SubtitleContainer, ClickHere} from "./style"


function NoneResultFound () {

    return(

        <NoneFoundContainer>
            <NoneFound>Nenhum resultado encontrado.</NoneFound>
            
            <SubtitleContainer>
                <Subtitle> Gostaria de Cadastrar um destino?</Subtitle>
                <ClickHere href="/cadastro-de-destinos">Clique aqui.</ClickHere>
            </SubtitleContainer>
            
            <ImageStyled src={NoneFoundMap}/>
        </NoneFoundContainer>
    )
}

export default NoneResultFound;