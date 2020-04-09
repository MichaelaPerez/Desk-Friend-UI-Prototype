import React from 'react';

//props: key='admin' id='admin' ticket={id:'1', summary:'Summary', comments:str[]} addCommentFn='{fn}' closeTicketFn='{fn}'
const TicketReport = (props) => {
    return(
        <div className='App'>
            <h1>Desk Friend</h1>
            <h2 id={props.id}>Ticket Report {props.ticket.id}</h2>

            <div className='mediumWidth centered'>
                <p>{props.ticket.summary}</p>
                {
                    props.ticket.comments.map(comment => {
                        return (
                            <p>{comment}</p>
                        )
                    })
                }
                <button onClick={() => props.addCommentFn()} key='100'>Add Comment</button>
            </div>
            

            <div className='bordered mediumWidth centered'>
                <button onClick={() => props.closeTicketFn()} key='200'>Close Ticket</button>
            </div>
        </div>
    )
}

export default TicketReport