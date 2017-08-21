import {ReduceStore}   from 'flux/utils'
import Dispatcher      from './appDispatcher'
import Actions         from '../actions'

const defaultState = () => {
  return {
    events: [],
    paging: {
      next: "",
      previous: "",
      first: "",
      last: ""
    },
    eventsFilter: '',
    currentUrl: "/MailGunEvents/fetch"
  }
}

class AppStore extends ReduceStore {

  constructor() {
    super(Dispatcher);

    // this.filteredEvents = this.filteredEvents.bind(this);
  }

  getInitialState() {
    return defaultState()
  }

  filteredEvents() {
    // var events = this.eventValues()
    // var filter = this.getState().eventsFilter.toLowerCase()
    // if (filter === '') {
    //   return events
    // } else {
    //   return events.filter((event) => {
    //     return event.name.toLowerCase().indexOf(filter) !== -1
    //     console.log('wtf', event.name.indexOf(filter))
    //   })
    // }
    return this.getState().events;
  }

  getEventsUrl() {
    return this.getState().currentUrl;
  }

  getEventsPageUrl(key) {
    let request_keys = this.getState().paging[key].split("/")
    return this.getEventsUrl() + "/?page=" + request_keys[request_keys.length - 1]
  }

  reduce(state, action) {
    switch (action.type) {
      case Actions.BOOT:
        return Object.assign({}, defaultState(), action.payload)
      case Actions.LOAD_EVENTS:
        return Object.assign({}, state, {
          events: action.payload.items,
          paging: action.payload.paging
        })
      case Actions.CHANGE_PAGE:
        return state
      default:
        return state
    }
  }
}

export default new AppStore();
