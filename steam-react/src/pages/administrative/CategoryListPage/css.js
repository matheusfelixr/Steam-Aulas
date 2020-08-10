import  styled  from 'styled-components'

import { Table}  from  'react-bootstrap'

export const Content = styled.div`

    font-family: "Motiva Sans", Sans-serif;

    height : 100%;
   
    body{
        background: #1b2838 !important ;
    }
`
export const CustomTable =  styled(Table) `
    color : white;

    
    tr{
        :hover{
            color : #aab3bd !important;
        }
    }
    td, th {
     padding: 0px !important;
     vertical-align: inherit;
    }
`
