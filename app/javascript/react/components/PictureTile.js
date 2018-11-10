import React, { Component } from 'react'
import { Grid, Row, Col, Image, Thumbnail } from 'react-bootstrap'

const PictureTile = props => {
    return(
      <Col xs={6} md={4}>
        <Thumbnail href="#" src={props.picture.url} />
        <h5>{props.name}</h5>
        <h6>{props.description}</h6>
      </Col>
  )
}

export default PictureTile;
