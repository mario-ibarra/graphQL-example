import React from 'react'
import Card from '../Card/Card'
import {Container} from "react-bootstrap"
import { v4 } from 'uuid'

function CardDisplay({animals}) {

    return (
        <div className="card-display">
            <Container className="card-display-container">
                {animals.map(animal => {
                    return <Card key={v4()} animal={animal} />
                })}
            </Container>
        </div>
    )
}

export default CardDisplay
