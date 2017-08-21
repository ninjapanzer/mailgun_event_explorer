import React from 'react'
import fetch from 'isomorphic-fetch'

import Event      from './Event'
import Dispatches from '../actions/dispatches'
import Store      from '../stores/appStore'

import Pagination from "./Pagination"
import Spinner from '../components/Spinner'

class LoadLogs extends React.Component {
  constructor(){
    super()
    this.state = {loaded: false}
  }

  componentDidMount(){
    Dispatches.boot({
      originalElement: this.props.originalElement
    })
    fetch(this.props.url)
      .then(response => response.json())
      .then(json => {
        console.log(json)
        Dispatches.loadEvents(json)
        this.setState({loaded: true})
      })
  }

  render(){
    if(this.state.loaded) {
      let eventsUnsorted = Store.filteredEvents()
      let events = eventsUnsorted
      return (
        <div>
          <div id="searchbox">
            <input type="text"
                   placeholder="Search..."
                   onChange={ this.filterInputHandler }
            />
          </div>
          <div>
            {Object.values(events).map(event => (<Event key={event.id} event={event} />))}
          </div>
          <div>
            <Pagination/>
          </div>
        </div>
      )
    } else {
      return <span><Spinner /></span>
    }
  }
}

export default LoadLogs
