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
      array.push({"thumbnail": picture.photo.url, "src" : picture.photo.url, "caption" : picture.image_name})

    })
    return(
      <div className="gallery-container" >
      <Grid container style={{ padding: '3em 0em' }}>
        <Grid.Row>
          <Grid.Column>
            <Message className="gallery-header">
              <Header as='h1'>MY CAKE COLLECTION</Header>
            </Message>
          </Grid.Column>
        </Grid.Row>
       </Grid>
        <Gallery images={array} enableImageSelection={false} lightboxWidth={1000}/>
      </div>

    )
  }
}
export default GalleryPage;
