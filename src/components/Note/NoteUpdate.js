import React, { useState } from 'react';

//Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const NoteUpdate = ( { id, title, content } ) => {

    const [ InputTitle, setInputTitle ] = useState(title);
    const [ InputContent, setInputContent ] = useState(content);


    const handleInputTitleChange = ( e ) => {
        setInputTitle( e.target.value );
    }

    const handleInputContentChange = ( e ) => {
        setInputContent( e.target.value );
    }

    return (
        <form className="formInputNote">

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