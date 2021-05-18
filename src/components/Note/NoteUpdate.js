import React, { useState, useEffect } from 'react';

//helpers
import { updateNoteById } from '../../helpers/servicesNote';

//Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const NoteUpdate = ( { id, title, content } ) => {

    const [ InputTitle, setInputTitle ] = useState(title);
    const [ InputContent, setInputContent ] = useState(content);
    const [ Message, setMessage ] = useState('');

    //objeto note
    const noteObject = {
        title: InputTitle,
        content: InputContent
    }

    const handleInputTitleChange = ( e ) => {
        setInputTitle( e.target.value );
    }

    const handleInputContentChange = ( e ) => {
        setInputContent( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //evita que la pagina se recargue al presionar enter en un formulario

        if( InputTitle === '' && InputContent === '' ){
            return;
        }

        updateNoteById(id, noteObject);
        setMessage('Nota actualizada');
    }

    useEffect(() => {
        setTimeout(() => {
            setMessage('')
        }, 2000);
    }, [Message])

    return (
        <form className="formInputNote" onSubmit={ handleSubmit }>

            {
                Message ? <Box className="SpanUpdateNote" component="span" display="block" p={1} m={1} bgcolor="success.main" color="success.contrastText"> { Message } </Box> : ''
            }
            
            <div className="divInputNote">
                <TextField 
                    className="titleTextField"
                    label="Titulo"
                    value={ InputTitle }
                    variant="outlined"
                    onChange={ handleInputTitleChange }
                />
            </div>
            <div className="divInputNote">
                <TextField
                    className="ContentTextField"
                    label="Contenido"
                    value={ InputContent }
                    multiline
                    rows={4}
                    variant="outlined"
                    onChange={ handleInputContentChange }
                />
            </div>
            <div className="divInputNote">
                <Button
                    onClick={ handleSubmit }
                    className="btn-save"
                    variant="contained"     
                    color="primary">
                    Actualizar
                </Button>
            </div>
        </form>
    )
}

export default NoteUpdate;