import React from "react"

import Store      from '../stores/appStore'
import Section   from './section'
import LoadLogs from './loadLogs'

function AppView(props) {
  let spUrl = Store.getEventsUrl()
  return (
    <Section elementId="mailGunExplorer">
      <LoadLogs originalElement={props.originalElement} url={`${spUrl}`} />
    </Section>
  );
}

export default AppView
