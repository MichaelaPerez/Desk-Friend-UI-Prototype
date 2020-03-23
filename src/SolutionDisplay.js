import React, {Component} from 'react';

class SolutionDisplay extends Component {
    render() {
        return(
            <div className="ninja-list">
                <h1>Desk Friend</h1>
                <h2 id="user">{this.props.heading2}</h2>
                <p>{this.props.solution}</p>
                <button onClick={() => this.props.setAdminState()} key='1'>Next</button>
            </div>
        )
    }
}

export default SolutionDisplay