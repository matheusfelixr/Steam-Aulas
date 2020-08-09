import styled from 'styled-components'

export const NavStyle = styled.div`
    .bg-light {
        background-color: #171a21!important;
        display: grid;
    }
    .btn {
        color: #b8b6b4;
        font-size: 14px;
    }
    .navbar-nav{
        padding: 21px 0px 20px 289px;
    }
    .dropdown{
        display:flex;
    }
    .dropdown-menu{
        background-color: #171a21;
    }
    .dropdown-item{
        color: #b8b6b4;   
    }
    a:hover {
        color: white;
        background-color: #171a21;
    }
    .btn:focus {
    outline: 0;
     box-shadow: 0 0 0 0; 
    }
    a{
        color: #b8b6b4;
        text-decoration: none;
    }
    .btn:hover{
        color: white;
    }
    .dropdown-toggle::after{
        border-top: 0;
    }
`
export const GlobalActionMenu = styled.div`
    position: absolute; 
    right: 180px;
`

export const Img = styled.img`
   width: 196px;
    height: 50px;
`

