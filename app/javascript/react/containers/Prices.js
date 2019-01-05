import React from 'react';
import {
  Grid,
  Header,
  Message,
  Segment,
  Image
} from 'semantic-ui-react'
import { Link } from "react-router-dom"

const Prices = (props) => {
 return(
   <Grid container style={{ padding: '5em 0em'}}className="about-container">
     <Grid.Row>
       <Grid.Column className="about-column">
         <Message>
           <Header as='h1'>ABOUT</Header>
           <p className="chef">
             OKSANA SAMSONOVA, TOP PASTRY CHEF.
           </p>
           <p className="about-info">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.</p>
           <Grid columns={2} stackable>
              <Grid.Column>
                <Image src='https://scontent.fphl1-1.fna.fbcdn.net/v/t1.0-9/15055738_929523650525269_7869132334710984126_n.jpg?_nc_cat=110&_nc_ht=scontent.fphl1-1.fna&oh=8301a42d355fd12b2c5c0b8481ace1ed&oe=5C967B4F' size='small' />
              </Grid.Column>
              <Grid.Column>
                <Segment className="about-paragraph">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
                This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.
                </Segment>
              </Grid.Column>
           </Grid>
         </Message>
       </Grid.Column>
     </Grid.Row>
    </Grid>
 )
}

export default Prices;
