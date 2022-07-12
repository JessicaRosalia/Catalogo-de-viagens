import React from 'react';
import { Card, CardContent, DestinationCardContent } from './style';

function DestinationCard (props){

    return(
        <Card> 
            {props.children.map((child)=> {
                return(
                    <DestinationCardContent>
                        {child}
                    </DestinationCardContent>
                )
            })}
        </Card>
    )
}

export default DestinationCard;