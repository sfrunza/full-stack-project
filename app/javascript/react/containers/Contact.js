import React from 'react';
import { Link } from "react-router-dom"
import EmailForm from './EmailForm'
import {
  Grid,
  Header,
  Message
} from 'semantic-ui-react'

class Contact extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      costumers: [],
      number: "+1 613-242-0725",
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
       <Grid container style={{ padding: '5em 0em' }}>
         <Grid.Row>
           <Grid.Column>
             <Message>
               <Header as='h1'>CONTACT ME</Header>
               <p className="contact-paragraph">
                 This is a template for a simple marketing or informational website. It includes a large
                 callout called a jumbotron and three supporting pieces of content. Use it as a starting
                 point to create something more unique.
               </p>
               <p className="contact-paragraph">{this.state.number}    |    INFO@MYSITE.COM </p>
               <p className="contact-paragraph-delivery">Delivery in Greater Boston area is free. </p>
               <EmailForm addNewMessage={addNewMessage}/>
             </Message>
           </Grid.Column>
         </Grid.Row>
        </Grid>

     )
  }
}

export default Contact;
