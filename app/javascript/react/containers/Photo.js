import React, { Component } from 'react'
import PictureTile from '../components/PictureTile'
import { Grid, Row, Col, Image, Thumbnail, Button } from 'react-bootstrap'

class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictures: []
      }

    }

  componentDidMount() {
  fetch('/api/pictures')
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
      let newPictures = body;
      this.setState({ pictures: newPictures });
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
}

  render() {
    let pictures = this.state.pictures.map(picture => {
      return(
        <PictureTile
          key={picture.id}
          name={picture.name}
          picture={picture.picture}
          description={picture.description}
          id={picture.id}
        />
      )
    })
    return (
      <Grid className="pictures-container">
        <Row className="photos-container">
          {pictures}
        </Row>
      </Grid>
    );
  }
}

export default Photo;
