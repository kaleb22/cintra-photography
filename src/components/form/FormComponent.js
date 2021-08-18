import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import InputMask from 'react-input-mask';
import emailjs from 'emailjs-com';

import './FormComponent.scss'

const FormComponent = () => {

  function sendEmail(e) {
    debugger;
    console.log('service id ==> ', process.env.REACT_APP_SERVICE_ID);
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,
                     process.env.REACT_APP_TEMPLATE_ID,
                     e.target,
                     process.env.REACT_APP_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return(
      <div className="form-container">
        <Form onSubmit={sendEmail} >
        <FormGroup className="field-size">
            <Label for="nomeField" className="field-title">Nome:</Label>
            <Input type="text" name="nome_cliente" id="nomeField" placeholder="nome completo" />
          </FormGroup>
          <FormGroup className="field-size">
            <Label for="emailField" className="field-title">E-mail:</Label>
            <Input type="email" name="email_cliente" id="emailField" placeholder="insira seu email" />
          </FormGroup>
          <FormGroup className="field-size">
            <Label for="celField" className="field-title">Celular:</Label>
            <Input 
              type="cel" 
              name="cel_cliente" 
              id="celField" 
              mask="(99) 99999-9999" 
              maskChar=" " 
              tag={InputMask}
              placeholder="(11) 99999-9999" />
          </FormGroup>
          <FormGroup>
            <Label for="msgField" className="field-title">Mensagem:</Label>
            <Input type="textarea" name="mensagem_cliente" id="msgField" maxLength="350" />
          </FormGroup>
          <Button type="submit" style={{ marginTop: '2em'}}>Enviar</Button>
        </Form>
      </div>

  )
}

export default FormComponent;