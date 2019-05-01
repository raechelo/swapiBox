import React, { Component } from 'react';
import People from '../People/People'
import Card from '../Card/Card'

class CardContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  // console.log(props)
  // return (
    // <People />
  // )
  render () {
    return <h1>hello</h1>
  //  return this.props.people.map(p => {
      // return (
        // 'hello'
    //     <Card
            // name={p.name}
            // homeworld={p.homeworld}
    //     />
    //   )
    // })
  }
}

export default CardContainer;