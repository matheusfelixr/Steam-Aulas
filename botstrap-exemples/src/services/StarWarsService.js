export function findById(id){
    
    return fetch("https://swapi.dev/api/people/"+id+"/");

}
