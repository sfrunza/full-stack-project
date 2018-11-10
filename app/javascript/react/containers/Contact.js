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
    fetch(`/api/costumers`, {
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
         <section data-scroll-index="5" className="social bg-darken">
           <div className="container">
             <div className="row social-icons">
               <a href="http://www.facebook.com" target="_blank" className="social-link col-xs-6 col-sm-3">
                 <span className="social-name"><i className="fa fa-facebook" aria-hidden="true"></i><br></br>facebook</span>
               </a>
               <a href="https://www.twitter.com" target="_blank" className="social-link col-xs-6 col-sm-3">
                 <span className="social-name"><i className="fa fa-twitter" aria-hidden="true"></i><br></br>twitter</span>
               </a>
               <a href="https://www.youtube.com" target="_blank" className="social-link col-xs-6 col-sm-3">
                 <span className="social-name"><i className="fa fa-youtube" aria-hidden="true"></i><br></br>youtube</span>
               </a>
               <a href="https://www.instagram.com" target="_blank" className="social-link col-xs-6 col-sm-3">
                 <span className="social-name"><i className="fa fa-instagram" aria-hidden="true"></i><br></br>instagram</span>
               </a>
             </div>
           </div>
         </section>
         <section className="container">
           <div className="col col-md-4">
               <h4><i className="fa fa-phone mt-4 fa-2x"></i></h4>
                 <p className="paragraph"><a href={`tel:${this.state.number}`}>{this.state.number}</a></p>
                 <p className="paragraph"><a href={`tel:${this.state.secondNumber}`}>{this.state.secondNumber}</a></p>

               <h4><i className="fa fa-envelope mt-4 fa-2x"></i></h4>
                <p className="paragraph"><a href={`mailto:${this.state.email}`}>{this.state.email}</a></p>

               <h4><i className="fas fa-clock mt-4 fa-2x"></i></h4>
                <p className="paragraph">Mon-Fri : 9am - 9pm</p>
                <p className="paragraph">Sat : 9am - 2pm</p>
            </div>
            <div className="col col-md-8">
                 <EmailForm addNewMessage={addNewMessage}/>
            </div>
         </section>
      </div>
     )
  }
}

export default Contact;
