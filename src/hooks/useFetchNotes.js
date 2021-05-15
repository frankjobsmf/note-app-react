import {useState, useEffect} from 'react';
import { getNotesByUserId } from '../helpers/servicesNote';

export const useFetchNotes = () => {
    const [value, setValue] = useState({
        data:[]
    });

    useEffect(() => {
        getNotesByUserId().then( resp => {
            setTimeout( () => {
                setValue({
                    data: resp
                });
            }, 2000);
        });
    },[])

    return value;
}
