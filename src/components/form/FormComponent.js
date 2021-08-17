import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import InputMask from 'react-input-mask';

const FormComponent = () => {

  return(
    <Form>
      <FormGroup>
        <Label for="emailField">E-mail</Label>
        <Input type="email" name="email" id="emailField" placeholder="insira seu email" />
      </FormGroup>
      <FormGroup>
        <Label for="celField">Celular</Label>
        <Input 
          type="cel" 
          name="celular" 
          id="celField" 
          mask="(99) 99999-9999" 
          maskChar=" " 
          tag={InputMask}
          placeholder="(11) 99999-9999" />
      </FormGroup>
    </Form>
  )
}

export default FormComponent;