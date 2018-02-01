import React, { PureComponent } from 'react';
import './App.css';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'hello',
    };
  }
  render() {
    return (
      <div className="app">
        <h1>{this.state.hello}</h1>
      </div>
    );
  }
}

export default App;
