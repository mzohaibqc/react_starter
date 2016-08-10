import React, {Component} from 'react'
import {Link} from 'react-router'

class Navbar extends Component {
  render() {
    return (
      <header class="navbar-fixed">
        <nav class="teal lighten-1">
          <div class="container">
            <div class="nav-wrapper">
              <a href="#" id="logo-container" class="brand-logo">{this.props.title}</a>

              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="contacts">Contatcs</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;