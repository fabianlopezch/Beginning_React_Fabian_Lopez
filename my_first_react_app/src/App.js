import React, { Component } from 'react';
import Products from './Products';

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
      </div>
    );
  }
}

export default App;