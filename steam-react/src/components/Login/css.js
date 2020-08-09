import styled from 'styled-components'

export const Login = styled.div`
    background-color: #16202d;
    padding: 20px;

    h2{
        color: #ffffff;
        font-size: 23px;
        font-weight: normal;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding-bottom: 5px;
    }

    p{
        font-size: 16px;
    }

    .form-label{
        font-size: 16px;
    }
    .form-check-label{
        font-size: 16px;
    }
    .btn{
        border-radius: 2px;
        border: none;
        padding: 1px;
        display: inline-block;
        cursor: pointer;
        -webkit-text-decoration: none !important;
        text-decoration: none !important;
        color: #67c1f5 !important;
        background: rgba( 103,193,245,0.2 );
        padding: 8px 23px;
        font-size: 20px;
        line-height: 30px;
    }
    .btn:hover{
        background: linear-gradient( -60deg, #417a9b 5%,#67c1f5 95%);
        color : white !important;
    }
 
`

export const LoginTrace = styled.div`
    flex: 0;
    border-left: 1px solid #264959;
    width: 2px;
    height: 210px;
    margin: 0 16px;
`