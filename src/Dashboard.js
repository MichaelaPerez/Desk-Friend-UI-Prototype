// This component takes in an array of Ninjas and displays their properties (props)

import React from 'react';

class Dashboard extends React.Component {
  state = {
    isAdmin: true
  }

  render() {
    const buttons = this.props.buttons; //issue, id...
    const optionButtons = buttons.map(button => {
      return (
        <button onClick={() => this.props.setAdminState()} key={button.id}>{button.name}</button>
      )
    })

    return (
      <div className="App">
        <h1>Desk Friend</h1>
        <h2 id="admin">{this.props.heading2}</h2>
        <p>{this.props.pageGreeting}</p>
        
        {optionButtons}

      </div>
    );
  }
}

export default Dashboard;
