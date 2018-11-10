import React, { Component } from 'react';
import { Jumbotron, Button, Carousel, Image } from 'react-bootstrap'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <div className="index" style={{ width: '100%' }} >
        <Carousel>
          <Carousel.Item>
            <Image width={900}   src="https://images.unsplash.com/photo-1528643445466-1f204fbd8f88?ixlib=rb-0.3.5&s=9f2cb9f361be900e06eaf7b7db613f74&auto=format&fit=crop&w=2100&q=80" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image width={900}  src="https://images.unsplash.com/photo-1508873760731-9c3d0bb6b961?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4492a93e67cf18b7ccd3aeb5bdb3346f&auto=format&fit=crop&w=2100&q=80" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image width={900}  src="https://images.unsplash.com/photo-1521380119896-a63bbcf9b954?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd54976933769ac21d47bb17672677e5&auto=format&fit=crop&w=2100&q=80" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>;
      </div>
    )
  }
}

export default Home;
