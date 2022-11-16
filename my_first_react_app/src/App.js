import React, { Component } from 'react';
import Products from './Products';
import Button from 'react-bootstrap/Button';

class App extends Component {

  formatName(user){
    return user.firstName + ' ' + user.lastName;
  }

  render() {

    // "user" is an object representting the user's first and last names.
    const user = {
      firstName: "Fabian Marcelo",
      lastName: "Lopez Chamorro"
    };

    return (
      <div>
        <h1>Hello, {this.formatName(user)}</h1>
        <Products />
        <Button>Default</Button>
      </div>
    );
  }
}

export default App;