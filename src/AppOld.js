import React from 'react';

class App extends React.Component {
  state = {
    isAdmin: false
}
  
  handleClick = (e) => {
    console.log(this.state)
    this.setState({
        isAdmin: true
    })
}
  handleSubmit = (e) => {
    e.preventDefault(); // By default, when the button in the form is clicked, the page is refreshed
    console.log('Form submitted,', this.state.name)
  }

  render() {
    return (
      <div className="App">
        <h1>Desk Friend</h1>
        <h2>Computers for the Blind</h2>
        <p>What uupp, homey. You are {this.state.isAdmin.toString()}ly a CFTB admin.</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
        </form>
        <button onClick={this.handleClick}>Common Issue 1</button>
        <button onClick={this.handleClick}>Common Issue 2</button>

      </div>
    );
  }
}

export default App;
