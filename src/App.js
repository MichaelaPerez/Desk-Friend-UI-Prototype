import React from 'react';
import Dashboard from './Dashboard'
import SearchPage from './SearchPage'
//import SolutionDisplay from './SolutionDisplay'

class App extends React.Component {
  state = {
    isAdmin: false,
    solutions : [
      { issue:'Issue 1', id:0 },
      { issue:'Issue 2', id:1 },
      { issue:'Issue 3', id:2 }
    ],
    issues : [
      { issue:'issue 1', id:0 },
      { issue:'issue 2', id:1 },
      { issue:'issue 3', id:2 }
    ],
    adminDashboardButtons : [
      { name:'Issue Management', id:0 },
      { name:'View Ticket Reports', id:1 }
    ],
    ticketReports : [
      { name:'Ticket Report 1', id:0 },
      { name:'Ticket Report 2', id:1 },
      { name:'Ticket Report 3', id:2 },
      { name:'Ticket Report 4', id:3 }
    ]
  }

  updateAdmin = () => {
    this.setState({isAdmin: ! this.state.isAdmin})
  }

  render() {
    if (this.state.isAdmin) {
      return <Dashboard key='admin' setAdminState={this.updateAdmin} heading2='ADMINISTRATOR ACCESS : DASHBOARD' pageGreeting='You are an admin.' buttons={this.state.adminDashboardButtons}/>
      //return <Dashboard key='ticketReports' setAdminState={this.updateAdmin} heading2='ADMINISTRATOR ACCESS : VIEW TICKET REPORTS' pageGreeting='Here are the currently open ticket reports' buttons={this.state.ticketReports}/>
      //return <SearchPage key='admin' id='admin' setAdminState={this.updateAdmin} results={this.state.issues} heading2='ADMINISTRATOR ACCESS: ISSUE MANAGEMENT' initGreeting='Search the issue you would like to manage.' placeholder='Type here to search issues'/>
      
    } else {
      //return <SolutionDisplay key='user' id='1' setAdminState={this.updateAdmin} heading2='Solution 1' solution='This is a solution to your problem'/>
      return <SearchPage key='user' id='user' setAdminState={this.updateAdmin} results={this.state.solutions} heading2='Computers for the Blind' initGreeting='Enter your issue into the search bar or tab through then select one from the list of common issues below.' placeholder='Type here to search issues'/>
    }
  }
}

export default App;
