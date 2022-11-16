import React, { Component } from 'react';
import Products from './Products';
import Button from 'react-bootstrap/Button';
import Ratings from './Rating';

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

    const isValid = false;

    return (
      <div>
        <h1>Hello, {this.formatName(user)}</h1>
        <Products />
        <Button variant="danger" disabled={!isValid}>Default</Button>
        <Ratings rating="1"/>
        <Ratings rating="2"/>
        <Ratings rating="3"/>
        <Ratings rating="4"/>
        <Ratings rating="5"/>
      </div>
    );
  }
}

export default App;