import React, {Component} from 'react';

import Footer from './layout/Footer';
import Navbar from './layout/Navbar';


class Layout extends Component {

  render() {
    return (
      <div class="site">
        <Navbar title={"React App"}/>
        <div class="site-content container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;