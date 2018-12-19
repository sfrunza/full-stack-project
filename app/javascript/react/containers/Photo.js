import React from 'react'

// Cache gallery container
const galleryContainer = document.querySelector('.react-gallery');

// Component for gallery image
class GalleryImage extends React.Component {
  render() {
    return(
      <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
    )
  }
}

// Component for gallery modal
class GalleryModal extends React.Component {
  render() {
    if (this.props.isOpen === false) {
      return null;
    }
    return(
      <div className='modal-overlay' onClick={this.props.onClick} name={this.props.name}>
        <div className='modal-body'>
          <a className='modal-close' href='#' onClick={this.props.onClick}><span className='fa fa-times'></span></a>
          <img src={this.props.src} />
        </div>
      </div>
    )
  }
}

// Component for gallery
class Photo extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      url: '',
      pictures: []
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  // Function for opening modal dialog
  openModal(url, e) {
     this.setState({
       showModal: true,
       url: url
     })
   };
   // Function for closing modal dialog
   closeModal() {
     this.setState({
       showModal: false,
       url: ''
     })
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
    return(
      <div refs='gallery-container' className='container-fluid gallery-container'>
      <h1 className="contact-header">MY CAKE COLLECTION</h1>
        <div className='gallery-row'>
          {
            this.state.pictures.map((url, index) => {
               return <div className='col-sm-6 col-md-3 col-xl-2' key={url.id}>
                  <div className='gallery-card'>
                    <GalleryImage className='gallery-thumbnail' src={url.photo.url} alt={'Image number ' + (index + 1)} />
                    <span className='card-icon-open fa fa-expand' value={url.photo.url} onClick={(e) => this.openModal(url.photo.url, e)}></span>
                  </div>
                </div>
             })
           }
        </div>
        <GalleryModal isOpen={this.state.showModal} onClick={this.closeModal} src={this.state.url} />
      </div>
    )
  }
}
export default Photo;
