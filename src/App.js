import React from 'react';
import AppAdmin from './AppAdmin'
import AppUser from './AppUser'
//import 'index.css'

class App extends React.Component {
  state = {
    isAdmin: false
  }

  updateAdmin = (newValue) => {
    this.setState({isAdmin: newValue})
  }

  render() {
    if (this.state.isAdmin) {
      return <AppAdmin setAdminState={this.updateAdmin} />
    } else {
      return <AppUser setAdminState={this.updateAdmin} />
    }
  }
}

export default App;
