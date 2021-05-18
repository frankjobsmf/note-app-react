import {useState, useEffect} from 'react';
import { getNotesByUserId } from '../helpers/servicesNote';

export const useFetchNotes = () => {
    const [value, setValue] = useState({
        data:[],
        loading: true
    });

    useEffect(() => {
        getNotesByUserId().then( resp => {
            setTimeout( () => {
                setValue({
                    data: resp,
                    loading: false
                });
            }, 2000);
        });
    },[])

    return value;
}