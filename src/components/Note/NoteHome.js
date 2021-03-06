import React, { useState, useEffect } from 'react';
import NoteInput from './NoteInput';
import NoteCard from './NoteCard';

//material UI
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

//useFetchNotes
import {useFetchNotes} from '../../hooks/useFetchNotes';

const NoteHome = () => {
    //useState
    const [stateButton, setStateButtom] = useState(false);
    const [ Counter, setCounter ] = useState( 0 );
    
    const { data, loading } = useFetchNotes( Counter );  



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
            <h2 className="titleApp">Note-App</h2>

            <Container maxWidth="md">
                <Button className="ButtonAddNoteHome" onClick={handleButtom} variant="contained" color="default">Agregar nota</Button>
                
                {
                    stateButton === true ? (
                        <NoteInput Counter={ Counter } setCounter={ setCounter }/>
                    )
                    :
                    ''
                }

                {
                    loading ? <CircularProgress color="primary" /> : ''
                }

                {   
                    typeof data !== 'undefined' ? (
                        data.map( nt => (
                            <NoteCard 
                                key={ nt.id }
                                id={ nt.id }
                                title={ nt.title }
                                content={ nt.content }
                                Counter={ Counter }
                                setCounter={ setCounter }
                            />
                        ))
                    )
                    :
                    <p>No hay notas existentes</p>
                }

            </Container>
        </>
    )
}

export default NoteHome;