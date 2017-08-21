import React from "react"

class Section extends React.Component {
  render(){
    return (<section id={this.props.elementId}>
      {this.props.children}
    </section>)
  }
}

export default Section
