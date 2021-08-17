import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import InputMask from 'react-input-mask';
import './FormComponent.scss'

const FormComponent = () => {

  return(
      <div className="form-container">
        <Form>
          <FormGroup className="field-size">
            <Label for="emailField" className="field-title">E-mail:</Label>
            <Input type="email" name="email" id="emailField" placeholder="insira seu email" />
          </FormGroup>
          <FormGroup className="field-size">
            <Label for="celField" className="field-title">Celular:</Label>
            <Input 
              type="cel" 
              name="celular" 
              id="celField" 
              mask="(99) 99999-9999" 
              maskChar=" " 
              tag={InputMask}
              placeholder="(11) 99999-9999" />
          </FormGroup>
          <FormGroup>
            <Label for="msgField" className="field-title">Mensagem:</Label>
            <Input type="textarea" name="mensagem" id="msgField" maxLength="350" />
          </FormGroup>
          <Button style={{ marginTop: '2em'}}>Enviar</Button>
        </Form>
      </div>

  )
}

export default FormComponent;