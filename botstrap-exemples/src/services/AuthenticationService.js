export function isAuthenticated(){
    
    var token = localStorage.getItem("token");  

    return !!token;
}

export function authenticate(data){
    let ret = false;
    if(data.username === "admin" && data.password === "1234"){
        localStorage.setItem("token", data.username);
        ret = true;
    }

    return ret;
}