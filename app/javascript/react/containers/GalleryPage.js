import React from 'react'
import {
  Grid,
  Header,
  Message
} from 'semantic-ui-react'
import Gallery from 'react-grid-gallery';

class GalleryPage extends React.Component{
  constructor(props) {
    super(props);
        this.state = {
          pictures: []
        }
}

  componentDidMount() {
  fetch('/api/v1/pictures')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      let newPictures = body.pictures;
      this.setState({ pictures: newPictures });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let array = []
    let pictures = this.state.pictures.map(picture => {
      array.push({"thumbnail": picture.photo.url, "src" : picture.photo.url})

    })
    return(
      <Grid  container style={{ padding: '5em 0em' }} className="gallery-container">
        <Grid.Row>
          <Grid.Column>
            <Message>
              <Header as='h1'>MY CAKE COLLECTION</Header>
              <Gallery images={array} enableImageSelection={false} />
            </Message>
          </Grid.Column>
        </Grid.Row>
       </Grid>

    )
  }
}
export default GalleryPage;
