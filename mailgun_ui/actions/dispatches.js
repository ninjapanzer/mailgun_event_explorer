import Actions from './';
import Dispatcher from '../stores/appDispatcher';

const Dispatches = {
  boot: (payload) => {
    Dispatcher.dispatch({
      type: Actions.BOOT,
      payload
    })
  },
  loadEvents: (events) => {
    Dispatcher.dispatch({
      type: Actions.LOAD_EVENTS,
      payload: events
    })
  }
}

export default Dispatches
