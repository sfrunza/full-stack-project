import React, { Component } from 'react';
import { Breadcrumb, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class BreadCrumbs extends Component {
    constructor(props) {
      super(props);

    }

    render(){
       return(

            <div className="footer navbar-bottom">
              <p>Copyright © Sweet-Cakes - All Rights Reserved.</p>
            </div>
          )
        }
    }

export default BreadCrumbs;
