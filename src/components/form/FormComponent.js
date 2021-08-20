import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, Alert } from 'reactstrap';
import InputMask from 'react-input-mask';
import emailjs from 'emailjs-com';

import './FormComponent.scss'

class FormComponent extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      clientName: '',
      clientEmail: '',
      clientPhone: '',
      validate: {
        nameState: '',
        emailState: '',
        celphoneState: '', 
        showFeedbackMsg: false
      }
    };
    
    this.handleChanges = this.handleChanges.bind(this);
  };

  handleChanges = (event) => {
    const { target } = event;
    const value = target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  };

  validateFields(e) {
    const emailRegex =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const nameRegex =  /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
    const celRegex = /^\([0-9]{2}\)\s[0-9]{5}-[0-9]{4}$/; // matches mask (99) 99999-9999.

    const { validate } = this.state;
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    switch(fieldName) {
      case 'clientName':
        validate.nameState = 'has-danger';  
        
        if( nameRegex.test(fieldValue) ) {
          validate.nameState = 'has-success';
        }
        break;
      case 'clientEmail':
        validate.emailState = 'has-danger';
        
        if( emailRegex.test(fieldValue) ) {
          validate.emailState = 'has-success';
        }
        break;
      case 'clientPhone':
        validate.celphoneState = 'has-danger';
        
        if( celRegex.test(fieldValue) ) {
          validate.celphoneState = 'has-success';
        }
        break;
      default:
        break;
    }

    this.setState({ validate });
  }

  sendEmail(e) {
    debugger;
    e.preventDefault();

    const { validate } = this.state;

    if( validate.nameState     === 'has-success' & 
        validate.emailState    === 'has-success' & 
        validate.celphoneState === 'has-success') {
          emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            e.target,
            process.env.REACT_APP_USER_ID)
            .then((result) => {
            validate.showFeedbackMsg = true;
            this.setState({ validate });
            console.log(result.text);
            }, (error) => {
            console.log(error.text);
            });
        } else {
          return;
        }
  }

  render() {
    const { clientName, clientEmail, clientPhone } = this.state;
    const { showFeedbackMsg } = this.state.validate;
    return(
      <div className="form-container">
        <Form onSubmit={ (e) => {
          this.sendEmail(e);
        }}>
          <FormGroup className="field-size">
            <Label for="nameField" className="field-title">Nome:</Label>
            <Input 
              type="text" 
              name="clientName" 
              id="nameField" 
              placeholder="nome completo"
              valid={ this.state.validate.nameState === 'has-success' }
              invalid={ this.state.validate.nameState === 'has-danger' }
              value={ clientName }
              onChange={ (e) => {
                this.handleChanges(e);
              }}
              onBlur={ (e) => {
                this.validateFields(e);
              }} />
            <FormFeedback>Campo obrigatório. obs: campo não aceita números e caracteres especiais.</FormFeedback>
          </FormGroup>
          <FormGroup className="field-size">
            <Label for="emailField" className="field-title">E-mail:</Label>
            <Input 
              type="email" 
              name="clientEmail" 
              id="emailField" 
              placeholder="insira seu email"
              valid={ this.state.validate.emailState === 'has-success' }
              invalid={ this.state.validate.emailState === 'has-danger' }
              value={ clientEmail }
              onChange={ (e) => {
                this.handleChanges(e);
              }}
              onBlur={ (e) => {
                this.validateFields(e);
              }} />
            <FormFeedback>Desculpe, e-mail invalido.</FormFeedback>
          </FormGroup>
          <FormGroup className="field-size">
            <Label for="celField" className="field-title">Celular:</Label>
            <Input 
              type="cel" 
              name="clientPhone" 
              id="celField" 
              mask="(99) 99999-9999" 
              maskChar=" " 
              tag={InputMask}
              placeholder="(11) 99999-9999"
              valid={ this.state.validate.celphoneState === 'has-success' }
              invalid={ this.state.validate.celphoneState === 'has-danger' }
              value={ clientPhone }
              onChange={ (e) => {
                this.handleChanges(e);
              }}
              onBlur={ (e) => {
                this.validateFields(e);
              }} />
            <FormFeedback>Desculpe, celular inválido. Preencha conforme (99) 99999-9999.</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="msgField" className="field-title">Mensagem:</Label>
            <Input type="textarea" name="mensagem_cliente" id="msgField" maxLength="350" />
          </FormGroup>
          <Button type="submit" style={{ marginTop: '2em'}}>Enviar</Button>
          { showFeedbackMsg ? 
            <Alert style={{ marginTop: '1em'}}>
              <h4>Email enviado com sucesso!</h4>
              <p>Obrigado pelo seu contato. Em breve entrarei em contato com você para maiores informações.</p></Alert> : null }
        </Form>
      </div>
    );
  }
}

export default FormComponent;