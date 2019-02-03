import React, { Component } from 'react';

const styleContainer = {
    background: '#333',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const styleTitle = {
    fontSize: '20px',
    margin: '0',
    color: '#F1F1F1'
}

class Header extends Component {
  render() {
    return (
      <header style={styleContainer}>
          <h1 className="site--title" style={styleTitle}>markdown previewer</h1>
      </header>
    );
  }
}

export default Header;
