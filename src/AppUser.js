import React from 'react';

class AppUser extends React.Component {
  state = {
    pageGreeting: "Enter your issue into the search bar or tab through then select one from the list of common issues below.",
    searchFieldValue: ""
  }
  
  // handleClick = (e) => {
  //   console.log(this.state)
  //   this.setState({
  //       isAdmin: true
  //   })
  // }
  handleSubmit = (e) => {
    e.preventDefault(); // By default, when the button in the form is clicked, the page is refreshed
    console.log('Form for issue search submitted')
    this.setState({
      pageGreeting: 'You have searched: ' + this.state.searchFieldValue
    })
  }
  handleChange = (e) => {
    this.setState({searchFieldValue: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <h1>Desk Friend</h1>
        <h2>Computers for the Blind</h2>
        <p>What can we help you with?</p>
        <p>{this.state.pageGreeting}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Type here to search issues" value={this.state.searchFieldValue} onChange={this.handleChange}/>
        </form>
        <button onClick={() => this.props.setAdminState(true)}>Common Issue 1</button>
        <button onClick={() => this.props.setAdminState(true)}>Common Issue 2</button>

      </div>
    );
  }
}

export default AppUser;
