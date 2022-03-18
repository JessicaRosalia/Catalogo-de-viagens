import React from "react";
import {WarningStyled, WrapperStyled} from "./style"

function WarningDiv(aviso){
   
    return(
        <WrapperStyled>
          <WarningStyled>
              {aviso.children}
          </WarningStyled>
        </WrapperStyled>   
    )
}

export default WarningDiv ;