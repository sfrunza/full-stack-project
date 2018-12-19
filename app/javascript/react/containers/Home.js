import React, { Component } from 'react';
import { Col, Row, Grid, Image } from 'react-bootstrap'

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
            <Image src="https://i.ytimg.com/vi/Xh_Neg-Hp84/maxresdefault.jpg"/>
        </div>
        <Row className="show-grid">
          <Col xs={12} md={8} className="intro-text">
            <div className="intro">
            <h1 className="text-intro">MY <span className="cakes">CAKES</span> ARE HANDCRAFTED WITH LOVE.</h1>
            <p className="paragraph">I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
            </div>
          </Col>
          <Col xs={6} md={4} className="intro-pic">
            <Image src="https://www.cheesecake.com.au/media/catalog/product/cache/c9e0b0ef589f3508e5ba515cde53c5ff/w/e/web_mobile_750x814_scr_caramel.png" responsive />
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Home;
