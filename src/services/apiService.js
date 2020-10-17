const urlBase = 'https://api.joonik.com';
// Ejemplo implementando el metodo POST:
export const getTokenByEmail = async (data) => {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(`${urlBase}/login/email`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    return response.json(); // parses JSON response into native JavaScript objects
};

export const getTokenByPassword = async(data) => {
    console.log(JSON.parse(localStorage.getItem('token'))?.result);
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(`${urlBase}/login/password`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))?.result}`
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    return response.json(); // parses JSON response into native JavaScript objects
}

export const getPost = async() => {
    console.log(JSON.parse(localStorage.getItem('token'))?.result);
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(`${urlBase}/posts`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))?.token}`
        },
        //body: JSON.stringify(data) // body data type must match "Content-Type" header
    });

    return response.json(); // parses JSON response into native JavaScript objects
}