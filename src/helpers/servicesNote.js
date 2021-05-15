const headerAuthorization = new Headers({
    'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImZyYW5rIiwiZW1haWwiOiJmcmFua0BnbWFpbC5jb20ifSwiZXhwIjoxNjIxODY5OTQ0fQ.39czgWOe2wLcxOCQuS6LuWAAEquti20RjPx4yaM4XlI'
})

export const getNotesByUserId = async () => {

    try {
        const myInit = {
            method: 'GET',
            headers: headerAuthorization,
            mode: 'cors',
            cache: 'default'
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