import React from 'react'
import ReactDOM from 'react-dom'
import CardList from './components/CardList'
import CardData from './CardData.json'
import AddCardForm from './components/AddCardForm'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cards: CardData
    }
  }

  addCard = (card) => {
    console.log("adding card", card)
    this.setState({
      cards: this.state.cards.concat(card)
    })
  }

  render() {
    return (
     <main>
        <CardList title="To Do" cards={this.state.cards} />
        <AddCardForm addCard={this.addCard}/>
     </main>
    )
  }

}

ReactDOM.render(<App />, document.getElementById('root'))
