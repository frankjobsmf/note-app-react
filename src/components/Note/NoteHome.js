import React, { useState } from 'react';
import NoteInput from './NoteInput';
import NoteCard from './NoteCard';

//material UI
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

//useFetchNotes
import {useFetchNotes} from '../../hooks/useFetchNotes';

const NoteHome = () => {
    //useState
    const [stateButton, setStateButtom] = useState(false);

    const {data} = useFetchNotes();

    console.log(data);

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
            <hr/>
            <Container maxWidth="md">
                <Button onClick={handleButtom} variant="contained" color="default">Agregar nota</Button>
                
                {
                    stateButton === true ? (
                        <NoteInput />
                    )
                    :
                    ''
                }

                {
                    data.length > 0 ? (
                        data.map( nt => (
                            <NoteCard 
                                key={ nt.id }
                                title={ nt.title }
                                content={ nt.content }
                            />
                        ))
                    )
                    :
                    ''
                }

            </Container>
        </>
    )
}

export default NoteHome;