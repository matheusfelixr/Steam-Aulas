import {CONFIG} from '../config/api';


export function listAll(){
    return fetch(`${CONFIG.apiUrl}category/list-all`).then(response => {
        return response.json();
    })
}

export function create( category ){

    const myHeaders = new Headers({
        "Content-Type": "application/json"
      });
    
    const config = { method: 'POST',
                   body : JSON.stringify(category) ,
                   headers : myHeaders
                };

    return fetch(`${CONFIG.apiUrl}category/create`, config).then(response => {
        return response.json();
    })
}