import React, { Component } from 'react'
import TextField from '../components/TextField'
import { Col, Row, Alert, Button, ButtonToolbar} from 'react-bootstrap'

class QuestionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      name: '',
      email: '',
      message: '',
      success: {}
    }
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.validateName = this.validateName.bind(this)
    this.validateEmail = this.validateEmail.bind(this)
    this.validateMessage = this.validateMessage.bind(this)
  }

  handleClearForm(event) {
    event.preventDefault();
    this.setState({
      errors: {},
      name: '',
      email: '',
      message: '',
      success: {}
    })
  }

  handleFormSubmit(event){
    event.preventDefault();
    if(
      this.validateName(this.state.name) &&
      this.validateEmail(this.state.email) &&
      this.validateMessage(this.state.message)
    ) {
      let formPayLoad = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
        success: this.state.success
      }
      this.props.addNewMessage(formPayLoad);
      this.handleClearForm(event)
      let newSuccess = {success: 'Your message has been sent'}
      this.setState({ success: Object.assign(this.state.success, newSuccess) })
    }
  }

  handleChange(event){
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }

  validateName(names) {
    if (names === '' || names === ' ') {
      let newError = { name: 'Name field is required.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.name
      this.setState({ errors: errorState })
      return true
    }
  }
  validateEmail(emails) {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!emails.match(mailformat)) {
      let newError = { email: 'Valid email is required.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.email
      this.setState({ errors: errorState })
      return true
    }
  }
  validateMessage(messages) {
    if (messages === '' || messages === ' ') {
      let newError = { message: 'Message field is required.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.message
      this.setState({ errors: errorState })
      return true
    }
  }
  render() {
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<p key={error}>{error}<br></br></p>)
      })
      errorDiv = <Alert bsStyle="danger">
                    {errorItems}
                 </Alert>
    }

    let successDiv;
    let successItem;
    if (Object.keys(this.state.success).length > 0) {
      successItem = Object.values(this.state.success).map(green => {
        return(<p key={green}>{green}<br></br></p>)
      })
      successDiv = <Alert bsStyle="success">
                    {successItem}
                 </Alert>
    }


    return (
      <Row className="show-grid">
        <form className="message-form" onSubmit={this.handleFormSubmit} >
          <h2 className="get-touch">GET IN TOUCH</h2>
          {errorDiv}
          {successDiv}
          <Row className="show-grid">
           <Col md={6} >
             <TextField
             placeholder='Name'
             name='name'
             value={this.state.name}
             handleChange={this.handleChange}
             />
           </Col>
           <Col md={6}>
             <TextField
             placeholder='Email'
             name='email'
             value={this.state.email}
             handleChange={this.handleChange}
             />
           </Col>
          </Row>
            <TextField
            placeholder='Message'
            name='message'
            value={this.state.message}
            handleChange={this.handleChange}
            />
          <ButtonToolbar>
            <Button onClick={this.handleFormSubmit} bsStyle="success">Send Message</Button>
            <Button bsStyle="default" onClick={this.handleClearForm}>Clear</Button>
		  	  </ButtonToolbar>
        </form>
      </Row>
    )
  }
}

export default QuestionForm
