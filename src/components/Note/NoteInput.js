import React from 'react';

//Material UI
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const NoteInput = () => {
    
    // const [inputValue, setInputValue] = useState({
    //     title: '',
    //     content: ''
    // });



    return (
        <form className="formInputNote">

            <div className="divInputNote">
                <TextField 
                    className="titleTextField"
                    label="Titulo" 
                    variant="outlined"
                />
            </div>
            <div className="divInputNote">
                <TextField
                    className="ContentTextField"
                    label="Contenido"
                    multiline
                    rows={4}
                    variant="outlined"
                />
            </div>
            <div className="divInputNote">
                <Button
                    className="btn-save"
                    variant="contained"     
                    color="primary">
                    Guardar
                </Button>
            </div>
        </form>
    )
}

export default NoteInput;