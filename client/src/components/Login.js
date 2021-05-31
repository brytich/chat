//Import
import React, { useRef} from 'react'
import { Container, Form ,Button } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

//function
//1-> A chaque click sur le button login , on appelle la function(handlesubmit) paramettré pour envoyer le form vers.... 
export default function Login({onIdSubmit}) {
    const idRef = useRef()

    function handleSubmit(hand) {
        hand.preventDefault()

        onIdSubmit(idRef.current.value)

    }
//2-> A chaque click sur le button New ID on appelle la function createNewId , qui creera un id perso a l user grace a UUIV4 (nmp i uuid)
    function createNewId(clickb) {
        onIdSubmit(uuidV4())
    }


//Jsx
    return (
        <Container className="align-items-center d-flex" style= {{ height: '100vh'}}>
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group>
                    <Form.Label>Entre l'Id</Form.Label>
                    <Form.Control placeholder="tape un truc" type="text" ref={idRef} required/>
                </Form.Group>
                <Button type="submit" className="mr-2">Login</Button>
                <Button onClick={createNewId} variant="secondary" >New Id</Button>
            </Form>
        </Container>
        
    )
}
