export function isAuthenticated(){
    
    var token = localStorage.getItem("token");  

    return !!token;
}
