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
                    <Image src='https://previews.dropbox.com/p/thumb/AAQTlsNp0zvg1_gF-3kEUZ4r0ELblktSRs8S7o7Kq1K_7oC0WH_PBELLFjaNNDHZxnTvAKgvaaRCh4Y0UfZkpXSW-HyGVmu_vxEwjWJPUQoxZHeKC8I2fS9swgTHvH15hjskpryWNsCqKhtNvZ6oortz_P8ZjohJMbIXXU25_Ums4Bd5MBBGG4f7rqxFklzGdiyFVevlZK3loIIZRNF6kHYK5guw3TquZdADP555-q94R6kRBlRQ3zFjs5cdFIxht1E/p.jpeg?size=2048x1536&size_mode=3'
                    />
                    <a className="bttn" href="/photo">Expleore Gallery</a>
                  </Segment>
                </Grid.Column>
                <Grid.Column className="column-image">
                  <Segment className="container-image">
                    <Image src='https://previews.dropbox.com/p/thumb/AAR2ghPEVNZcaZmw10nk4OtpqyRLSNQI-kbfvP03YShFQSpDXXnrjC2U2PBLat0Mdu7LDXPf5wBwGG_EKshaA_85Wz--2Ie3AxIlszRHrcFxsjzDxAN0q6QLrk8VSpJCzWrWyg77sbVWqNqMkwOxaBa64yX2IrQS936oW8JBctHQJk3TSV4sdh1xrSU2Tb0WqZKU_2fE318Zr7SP4ZeKtMtoMq2a1Z0tJ2MiP7lLemHWiR9HTZtxXLR6mgmYjLe-j_g/p.jpeg?size=2048x1536&size_mode=3'
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
