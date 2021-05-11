const headerAuthorization = new Headers({
    'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VybmFtZSI6ImZyYW5rIiwiZW1haWwiOiJmcmFua0BnbWFpbC5jb20ifSwiZXhwIjoxNjIwODYwOTY4fQ.hROa6eMO2wtpE5ElEociG9imk8WsruGFPnI38LHCTo8'
})

export const getNotesByUserId = async () => {

    const myInit = {
        method: 'GET',
        headers: headerAuthorization,
        mode: 'cors',
        cache: 'default'
    };

    const url = new Request('http://127.0.0.1:8000/api/notes-userid', myInit);
    const resp = await fetch(url);
    const data = await resp.json();

    const notes_list = data['notes'];

    let notes = [];

    notes_list.forEach( nt => {

        notes.push({
            id: nt['id'],
            title: nt['title'],
            content: nt['content']
        });
    });

    console.log(notes);

    return notes;
}

