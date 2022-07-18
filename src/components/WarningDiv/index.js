import React from "react";
import {WarningStyled, WrapperStyled} from "./style"

function WarningDiv({children, type}){
   
    return(
        <WrapperStyled>
          <WarningStyled className={type}>
              {children}
          </WarningStyled>
        </WrapperStyled>   
    )
}

export default WarningDiv ;