const headerAuthorization = new Headers({
    'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImZyYW5rIiwiZW1haWwiOiJmcmFua0BnbWFpbC5jb20ifSwiZXhwIjoxNjIxODY5OTQ0fQ.39czgWOe2wLcxOCQuS6LuWAAEquti20RjPx4yaM4XlI',
    'Content-Type': 'application/json'
})

export const getNotesByUserId = async () => {

    try {
        const myInit = {
            method: 'GET',
            headers: headerAuthorization,
            mode: 'cors',
            cache: 'default',
        };
    
        const url = new Request('http://127.0.0.1:8000/api/notes-userid', myInit);
        const resp = await fetch(url);
        const data = await resp.json();
    
        const list_note = data.notes.map( nt => {
            return {
                id: nt.id,
                title: nt.title,
                content: nt.content
            }
        });
    
        return list_note;

    } catch (error) {
        console.log(error);
    }
}

export const addNote = async ( data_note ) => {
    try{

        const myInit = {
            method: 'POST',
            headers: headerAuthorization,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(data_note)
        };



        const url = new Request(`http://127.0.0.1:8000/api/add`, myInit);
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data);
            
    } catch (error) {
        console.log(error);
    }
}


export const updateNoteById = async (id, data_note) => {
    try{

        const myInit = {
            method: 'PUT',
            headers: headerAuthorization,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(data_note)
        };



        const url = new Request(`http://127.0.0.1:8000/api/update/id=${id}`, myInit);
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data);
            
    } catch (error) {
        console.log(error);
    }
}

export const deleteNoteById = async ( id ) => {
    try{

        const myInit = {
            method: 'DELETE',
            headers: headerAuthorization,
            mode: 'cors',
            cache: 'default'
        };



        const url = new Request(`http://127.0.0.1:8000/api/delete/id=${id}`, myInit);
        const resp = await fetch(url);
        const data = await resp.json();

        console.log(data);
            
    } catch (error) {
        console.log(error);
    }


}