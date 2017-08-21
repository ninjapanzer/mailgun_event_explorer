import React from 'react'
import Moment from 'moment'

class Event extends React.Component {
  render(){
    let event = this.props.event
    return (
      <div style={{margin: "0.5em", padding: "0.5em", backgroundColor: "#F7F7F7"}}>
        <div>Event(
          <strong>{event.event}</strong>)&gt;
          severity: <strong>{event.severity}</strong> |
          reason: <strong>{event.reason}</strong> |
          domain:<strong>{event["recipient-domain"]}</strong> |
          id: <strong>{event.id}</strong>
        </div>
        <div>Message: <span style={{color: "#C41A16"}}>{(event["delivery-status"] || {message: ""}).message}</span> </div>
        <div>Target: {(event.envelope || {targets: ""}).targets}</div>
        <div>Subject: {(event.message || {headers: {subject: ""}}).headers.subject}</div>
        <div>Date: {Moment.unix(event.timestamp).local().toDate().toString()}</div>
      </div>
    )
  }
}

export default Event
