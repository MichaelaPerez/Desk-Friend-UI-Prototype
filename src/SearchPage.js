import React from 'react';

class SearchPage extends React.Component {
  state = {
    pageGreeting: this.props.initGreeting,
    searchFieldValue: ""
  }
  
  handleSubmit = (e) => {
    e.preventDefault(); // By default, when the button in the form is clicked, the page is refreshed
    console.log('SearchPage : form submitted')
    this.setState({
      pageGreeting: 'You have searched: ' + this.state.searchFieldValue
    })
  }
  handleChange = (e) => {
    this.setState({searchFieldValue: e.target.value});
  }

  render() {
    const results = this.props.results; //results is an array containing {issue:'', id:''}
    const resultButtons = results.map(result => { //resultButtons is an array containing html/jsx code for an array of buttons
      return (
        <button onClick={() => this.props.setAdminState()} key={result.id}>{result.issue}</button>
      )
    })

    return (
      <div className="App">
        <h1>Desk Friend</h1>
        <h2 id={this.props.id}>{this.props.heading2}</h2>

        <p>{this.state.pageGreeting}</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder={this.props.placeholder} value={this.state.searchFieldValue} onChange={this.handleChange} />
        </form>

        {resultButtons}
      </div>
    );
  }
}

export default SearchPage;
