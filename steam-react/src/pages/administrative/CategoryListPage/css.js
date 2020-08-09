import  styled  from 'styled-components'

import { Table}  from  'react-bootstrap'

export const Content = styled.div`
    color : #c6d4df;
    font-family: "Motiva Sans", Sans-serif;
    background-color : #1b2838 !important;
    height : 100%;
   
`
export const CustomTable =  styled(Table) `
    color : white;

    
    tr{
        :hover{
            color : red !important;
        }
    }
    
`
