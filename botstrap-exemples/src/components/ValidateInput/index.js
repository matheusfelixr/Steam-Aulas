import React from 'react'
import Form from 'react-bootstrap/Form'


function ValidateInput(props) {
    return (
        <Form.Text>
            {props.text}
        </Form.Text>
    );
}

export default ValidateInput;