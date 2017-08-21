import React from 'react'
import Store      from '../stores/appStore'
import Dispatches from '../actions/dispatches'

class Pagination extends React.Component {
  constructor(){
    super()
    this.reloadEvents = this.reloadEvents.bind(this);
  }


  reloadEvents(key) {
    let url = Store.getEventsPageUrl(key)
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(json => {
        Dispatches.loadEvents(json)
      })
  }

  render() {
    let paging = Store.getState().paging
    return(
      <div>
        <a onClick={this.reloadEvents.bind(null, "first")}>First</a> |
        <a onClick={this.reloadEvents.bind(null, "next")}>Previous</a> |
        <a onClick={this.reloadEvents.bind(null, "previous")}>Next</a> |
        <a onClick={this.reloadEvents.bind(null, "last")}>Last</a>
      </div>
    )
  }
}

export default Pagination
