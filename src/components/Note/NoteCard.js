import React, { useState } from 'react';

//helpers
import { deleteNoteById } from '../../helpers/servicesNote';

//Material UI
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import NoteUpdate from './NoteUpdate';

const NoteCard = ( { id, title, content, Counter, setCounter }) => {

    const [ UpdateNoteBtn, setUpdateNoteBtn ] = useState( false );

    const handleButtomUpdate = () => {
        if ( UpdateNoteBtn ){
            setUpdateNoteBtn(false);
        }
        else{
            setUpdateNoteBtn(true);
        }
    }

    const handleButtonDelete = () => {
        deleteNoteById( id );
        setCounter(Counter - 1);
    }


    return (
        <>
            <Card className="CardItem">
                <Grid className="GridCard">
                    <h3>{ title }</h3>
                    <p>{ content }</p>
                </Grid>
                <Grid className="GridCardButton">
                    <Button
                        onClick={ handleButtomUpdate }
                        className="btnCardUpdDel"
                        variant="contained"     
                        color="primary">
                        Actualizar
                    </Button>
                    <Button
                        className="btnCardUpdDel"
                        variant="contained"     
                        color="secondary"
                        onClick={ handleButtonDelete }
                        >
                        Eliminar
                    </Button>
                </Grid>
            </Card>

            {
                    UpdateNoteBtn === true ? (
                        <NoteUpdate
                            id={ id }
                            title={ title }
                            content={ content }
                        />
                    )
                    :
                    ''
            }

        </>
    )
}

export default NoteCard;