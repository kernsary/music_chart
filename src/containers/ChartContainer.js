import React from 'react'
import ChartList from '../components/ChartList'

class ChartContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      songs: []
    }
  }

  componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"

    fetch(url)
    .then(res => res.json())
    .then(data => this.setState({songs: data.feed.entry}))
    .catch(err => console.error)
  }

  render(){
    return(
      <div>
      <h1>The UK Top 20</h1>
      <ChartList songs={this.state.songs}/>
      </div>
    )
  }

}

export default ChartContainer
