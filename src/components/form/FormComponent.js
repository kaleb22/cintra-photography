import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, Alert, Spinner } from 'reactstrap';
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
      clientMessage: '',
      validate: {
        nameState: '',
        emailState: '',
        celphoneState: '', 
        showFeedbackMsg: false, 
        showSpinner: false, 
        showErrorMsg: false
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

  handleSubmitForm(e) {
    e.preventDefault();

    const { validate } = this.state;
    const state = this.state;

    const promise = new Promise((resolve) => {
      resolve();
    });
    
    if( validate.nameState     === 'has-success' & 
        validate.emailState    === 'has-success' & 
        validate.celphoneState === 'has-success') {
      
      promise
        .then( () => this.showSpinner(e, validate))
        .then( () => this.sendEmail(e, state));

        } else {
          return;
        }
  }

  showSpinner(e, validateObj) {
    const { target } = e;
    target[4].disabled = true;
    validateObj.showSpinner = true;
    this.setState({ validateObj });
    return validateObj;
  }

  sendEmail(e, state) {
    const { target } = e;
    
    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID,
                     process.env.REACT_APP_TEMPLATE_ID,
                     e.target,
                     'user_ePM302dwy97OTBPhyGTTDaa')
      .then(( result ) => {
        state.validate.showFeedbackMsg = true;
        state.validate.showSpinner = false;
        state.clientName    = '';
        state.clientEmail   = '';
        state.clientPhone   = '';
        state.clientMessage = '';
        state.validate.nameState     = '';
        state.validate.emailState    = '';
        state.validate.celphoneState = '';
        
        this.setState( state );
      }, (error) => {
        console.log(error.text);
        target[4].disabled = false;
        state.validate.showErrorMsg = true;
        state.validate.showSpinner = false;
        this.setState( state );
    });
  }

  render() {
    const { clientName, clientEmail, clientPhone, clientMessage } = this.state;
    const { showFeedbackMsg, showSpinner, showErrorMsg } = this.state.validate;
    return(
      <div className="form-container">
        <Form onSubmit={ (e) => {
          this.handleSubmitForm(e);
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
            <Input 
              type="textarea" 
              name="clientMessage" 
              id="msgField" 
              maxLength="350"
              value={ clientMessage }
              onChange={ (e) => {
                this.handleChanges(e);
              }} />
          </FormGroup>
          <div className="button-container">
            <Button type="submit">Enviar</Button>
            { showSpinner ? 
              <Spinner color="secondary" style={{ marginLeft: '1em' }}></Spinner> : null
            }
          </div>
          { showFeedbackMsg ? 
            <Alert style={{ marginTop: '1em'}}>
              <h4>Email enviado com sucesso!</h4>
              <p>Obrigado pelo seu contato. Em breve entrarei em contato com você para maiores informações.</p></Alert> : null }
          { showErrorMsg ? 
            <Alert color="danger" style={{ marginTop: '1em'}}>
              Ocorreu um erro com o envio do e-mail. Tente novamente mais tarde.</Alert> : null }
        </Form>
      </div>
    );
  }
}

export default FormComponent;