// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       Hello React
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react';
import Projects from './Projects';

class RegularClass {}
class ComponentClass extends Component {}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regularClassInstance', regularClassInstance);
console.log('componentClassInstance', componentClassInstance);

class App extends Component {
  state = { displayBio: false };

  // constructor() {
  //   super();
  //   this.state = { displayBio: false };

  //   console.log('Component this', this);
     
  //   //  this.readMore = () => { 
  //   //   console.log('readMore this', this);
  //   //  }
  //   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
  //   // this.readMore = this.readMore.bind(this);

  //   // this.toggleDisplayBio = () => { ... };
  // }

  // readMore() {
  //   console.log('readMore this', this);
  //   this.setState({ displayBio: true});
  // }

  // showLess() {
  //   console.log('showLess this', this);
  //   this.setState({ displayBio: false});
  // }

  toggleDisplayBio= () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
        {/* <h1 onClick={this.clicky}>Hello!</h1> */}
        <h1>Hello!</h1>
        <p>My name is Michael. I'm a software engineer</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        { 
          this.state.displayBio ? (
            <div>
              <p>I live in Indonesia, and code every day</p>
              <p>My favorite language is Java, and I think React.js is awesome</p>
              <p>Besides coding, I also love playing games</p>
              <button onClick={this.toggleDisplayBio}>Show Less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }
      <hr />
      <Projects />
      </div>
    )
  }
}

export default App;
