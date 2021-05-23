import React, {useState} from 'react';

//helpers
import {addNote } from '../../helpers/servicesNote';

//Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const NoteInput = ( { Counter,  setCounter } ) => {

    const [ InputTitle, setInputTitle ] = useState('');
    const [ InputContent, setInputContent ] = useState('');

    const handleInputTitleChange = ( e ) => {
        setInputTitle( e.target.value );
    }

    const handleInputContentChange = ( e ) => {
        setInputContent( e.target.value );
    }

    const NoteObject = {
        title: InputTitle,
        content: InputContent
    }

    const handleButtonAdd = ( e ) => {
        e.preventDefault();

        if( InputTitle === '' && InputContent === '' ){
            return;
        }

        addNote( NoteObject );
        setCounter(Counter + 1);
    }

    return (
        <form className="formInputNote" onSubmit={ handleButtonAdd }>

            <div className="divInputNote">
                <TextField 
                    className="titleTextField"
                    label="Titulo" 
                    variant="outlined"
                    value={ InputTitle }
                    onChange={ handleInputTitleChange }
                />
            </div>
            <div className="divInputNote">
                <TextField
                    className="ContentTextField"
                    label="Contenido"
                    multiline
                    rows={4}
                    variant="outlined"
                    value={ InputContent }
                    onChange={ handleInputContentChange }
                />
            </div>
            <div className="divInputNote">
                <Button
                    className="btn-save"
                    variant="contained"     
                    color="primary"
                    onClick={ handleButtonAdd }
                    >
                    Guardar
                </Button>
            </div>
        </form>
    )
}

export default NoteInput;