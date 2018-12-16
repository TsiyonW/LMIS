import React, { Component } from 'react';
import '../styles/App.css';

import {Link} from 'react-router-dom';

class NotFoundPage extends Component {
  render() {
    return (
      <div className="App">
       404!
       <Link to="/">Go to Home</Link>
      </div>
    );
  }
}

export default NotFoundPage;
