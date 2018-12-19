import React from 'react';
import { Jumbotron, Button, Col, Row} from 'react-bootstrap'
import { Link } from "react-router-dom"
import EmailForm from './EmailForm'

class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      costumers: [],
      number: "+1 613-242-0725",
      secondNumber: "+1 617-877-1450",
      email: "contact@gmail.com"

    }

    this.addNewMessage = this.addNewMessage.bind(this)
  }

  addNewMessage(formPayload) {
    fetch(`/api/v1/costumers`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })

    .then(body => {
      let newCostumer = this.state.costumers.concat(body)
      this.setState({
        costumers: newCostumer
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let addNewMessage = (formPayload) => this.addNewMessage(formPayload)

     return(
       <div className="contacts-container">
        <h1 className="contact-header">CONTACT ME</h1>
        <p className="contact-paragraph">I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        <p className="contact-paragraph">123-456-7890    |    INFO@MYSITE.COM </p>
        <p className="contact-paragraph-delivery">Delivery in Greater Boston area is free. </p>
                 <EmailForm addNewMessage={addNewMessage}/>
      </div>
     )
  }
}

export default Contact;
