import AppView     from './components/AppView'
import {Container} from 'flux/utils'

import Actions    from './actions'
import Dispatches from './actions/dispatches'
import AppStore   from './stores/appStore'
import Dispatcher from './stores/appDispatcher'

function getStores() {
  return [AppStore]
}

function getState(prevState, props) {
  return {
    events: AppStore.getState(),
    originalElement: props.originalElement,

    loadEvents: (events) => {
      Dispatcher.dispatch({
        type: Actions.LOAD_EVENTS,
        payload: events
      })
    }
  };
}

export default Container.createFunctional(AppView, getStores, getState, {withProps: true});
