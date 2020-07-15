import styled from 'styled-components'

export const HeaderNav = styled.header`
    width: 100%;
    height: 45px;
    background:#fff;
    color: rgb(0, 0, 0);
    display: flex;
    align-items:  center;
`
export const Img = styled.img`
    width: 75px;
    padding-left: 30px;
`

export const DivRight = styled.div`
    position: absolute; 
    right: 40px;
`

export const A = styled.a`
    cursor: pointer;

    :hover{
        color: rgba(7, 7, 7, 0.459) !important;
    }
`
export const SpanLink = styled.span`
    padding-left: 20px;
    color: black;

    :hover{
        text-decoration:none;
    }
`

export const Name = styled.span`
    padding-right: 10px;

`