import React from 'react';

class AppAdmin extends React.Component {
  state = {
    isAdmin: true
  }

  render() {
    return (
      <div className="App">
        <h1>Desk Friend</h1>
        <h2 id="admin">ADMINISTRATOR ACCESS : DASHBOARD</h2>
        <p>You are {this.state.isAdmin.toString()}ly a CFTB admin.</p>
        <button onClick={() => this.props.setAdminState(false)}>Issue Management</button>
        <button onClick={() => this.props.setAdminState(false)}>View Ticket Reports</button>

      </div>
    );
  }
}

export default AppAdmin;
