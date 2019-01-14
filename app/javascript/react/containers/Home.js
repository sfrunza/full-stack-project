import React, { Component } from 'react';
import { Col, Row, Image } from 'react-bootstrap'
import {
  Grid,
  Header,
  Message,
  Segment
} from 'semantic-ui-react'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <Grid className="index">
        <div className="strc1">
            <Image src="/cake.jpg"/>
        </div>
        <Grid.Row className="row-index">
          <Grid.Column className="column-2">
            <Message className="message-home">
              <Grid columns={2} stackable  className="container-home">
                 <Grid.Column width={10} className="container-ten-wide">
                 <Segment className="paragraph">
                    <h1 className="text-intro">MY <span className="cakes">CAKES</span> ARE HANDCRAFTED WITH LOVE.</h1>
                    <p>
                      I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
                    </p>
                 </Segment>
                 </Grid.Column>
                 <Grid.Column width={6}>
                   <Image className="paragraph-image" src="/cake1.JPG" />
                 </Grid.Column>
              </Grid>
              <Grid container columns={2} stackable className="container-bottom">
                <Grid.Column className="column-image">
                  <Segment className="container-image">
                    <Image src='/gallery-pic.JPG' />
                    <a className="bttn" href="/gallery">Expleore Gallery</a>
                  </Segment>
                </Grid.Column>
                <Grid.Column className="column-image">
                  <Segment className="container-image">
                    <Image src='/about-pic.JPG' />
                     <a className="bttn" href="/about">Meet The Baker</a>
                  </Segment>
                </Grid.Column>
              </Grid>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Home;
