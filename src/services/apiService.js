const urlBase = 'https://api.joonik.com';

export const getTokenByEmail = async (data) => {
    const response = await fetch(`${urlBase}/login/email`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    return response.json();
};

export const getTokenByPassword = async(data) => {
    const response = await fetch(`${urlBase}/login/password`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))?.result}`
        },
        body: JSON.stringify(data)
    });

    return response.json();
}

export const getPost = async() => {
    const response = await fetch(`${urlBase}/posts`, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))?.token}`
        },
    });

    return response.json(); 
}