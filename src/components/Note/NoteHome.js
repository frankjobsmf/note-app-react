import React, {useState} from 'react';
import NoteInput from './NoteInput';

//material UI
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const NoteHome = () => {

    const [stateButton, setStateButtom] = useState(false);

    const handleButtom = () => {
        if ( stateButton ){
            setStateButtom(false);
        }
        else{
            setStateButtom(true);
        }
    }

    return (
        <>
            <h2>Note-App</h2>
            
            <Container maxWidth="md">
                <Button onClick={handleButtom} variant="contained" color="default">Agregar nota</Button>
                
                {
                    stateButton === true ? (

                    <Container maxWidth="md">
                        <NoteInput />
                    </Container>
                    )
                    :
                    ''
                }
                
                

            </Container>
        </>
    )
}

export default NoteHome;