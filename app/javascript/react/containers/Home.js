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
                   <Image className="paragraph-image" src="https://previews.dropbox.com/p/thumb/AAQOP2r_1TiMgRo5xJMOhO4e-WghWwN93L0z13LXh-_qiBxmEqNzL1sQBM0vgznkdKUDYd2gsGOxS_4kRIl3hcAAY07F5lKtrUoJ4PQ1rPXdmB71YJ2ZHNTZeWh_1uY64hYdtrWinasH4zIOwoFhyS3qz-V-PO0fZ7FFvhCXV43DkQW3mgNXSM_z8NJtDJFqXzEEElxdt0-uyLrsxyVCdJdZ5cbCF8a7CR-KxOuonhkWBqOvDZhZM60Hw-g7Gzj-J8M/p.jpeg?size=2048x1536&size_mode=3" />
                 </Grid.Column>
              </Grid>
              <Grid container columns={2} stackable className="container-bottom">
                <Grid.Column className="column-image">
                  <Segment className="container-image">
                    <Image src='https://previews.dropbox.com/p/thumb/AATCHzGATnKp3f-8gHfRjhkq3EfcD_0TiWMNQgi6NdZuN07mFa51ziNl4slaAepdFntKnXokVCIfBgdaGxX2URRd2WJqLmrdn7aqzFniLDvN17imymFkKl3BliYJivqq0SRf-6Mgg4_Z97LWB1F7Jds8TJ-gsM4jh7Yg3nOB9rBYnawmpFjc5wWxAI2T3uhyEl3ZTktZ8Mzm_FJ0sJ4oHRBthcOU1pauyDw_d38efpiYVtmBDn2gimWqlcqYa0jXb7c/p.jpeg?size_mode=5'
                    />
                    <a className="bttn" href="/photo">Expleore Gallery</a>
                  </Segment>
                </Grid.Column>
                <Grid.Column className="column-image">
                  <Segment className="container-image">
                    <Image src='https://previews.dropbox.com/p/thumb/AATPu0o17R-z0Lh6wbG7jxTBv8lwVAONoCj4ATp7CkMcM-8B3S_KPhgqIHS8vwzKkT3-kquhYqZaVwJ1icF2E68hL7bELYhen9GplKiSeX2OQWlsh37w7kdbCO7xKkhojtQmm4z_NNdYr3KHh9eMFXB0Xo_ya821xjfkPJeoo5EFIDWrjDZgDH49SyVpwn8q0vGjffZtv0xMcppH76gODL3_POzgDJhwJ1gYScvnaIrAhBDEXsftebEd2N2IQ9h1oh0/p.jpeg?size_mode=5'
                     />
                     <a className="bttn" href="/pricing">Meet The Baker</a>
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
