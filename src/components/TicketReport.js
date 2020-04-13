import React from 'react';

//props: key='admin' id='admin' ticket={id:'1', summary:'Summary', comments:str[]} addCommentFn='{fn}' closeTicketFn='{fn}'
class TicketReport extends React.Component {
    state = {
        commentFieldValue: ""
      }
      
      handleSubmit = (e) => {
        e.preventDefault(); // By default, when the button in the form is clicked, the page is refreshed
        console.log('TicketReport : form submitted')
        this.props.addCommentFn();
      }

      handleChange = (e) => {
        this.setState({commentFieldValue: e.target.value});
      }

    render() {
        return(
            <div className='App'>
                <h1>Desk Friend</h1>
                <h2 id={this.props.id}>Ticket Report {this.props.ticket.id}</h2>

                <div className='mediumWidth centered'>
                    <p>{this.props.ticket.summary}</p>
                    {
                        this.props.ticket.comments.map(comment => {
                            return (
                                <p>{comment}</p>
                            )
                        })
                    }

                    <form id="submitAttribute" onSubmit={this.handleSubmit}>
                        <label for="newComm">Enter new comment (no new lines): </label>
                        <input type="text" id="newComm" name="newComm" placeholder="Start typing..." value={this.state.commentFieldValue} onChange={this.handleChange} />
                    </form>
                </div>
                

                <div id="buttonDiv" className='mediumWidth centered'>
                    <p id="centered">{this.props.navMsg}</p>
                    {
                        this.props.navButtons.map(button => {
                        return (
                            <button id="smallButton" onClick={() => {button.executeWhenClicked()}} key={button.id}>{button.name}</button>
                        )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TicketReport