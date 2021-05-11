import React, {useState} from 'react';
import  NoteHome  from './components/Note/NoteHome';
// import { getNotesByUserId,  } from './helpers/servicesNote';

const NoteApp = () => {


    // getNotesByUserId()
    //     .then( resp => {
    //         console.log(resp);
    //     });

    

    return (
        <>
            <NoteHome />
        </>
    )
}

export default NoteApp;