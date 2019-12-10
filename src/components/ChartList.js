import React from 'react'
import ChartItem from './ChartItem'

const ChartList = (props) => {

  const songNodes = props.songs.map(song => {
    return(
      <ChartItem
      song={song}
      index={props.songs.indexOf(song)}
      key={props.songs.indexOf(song)}
      />
    )
  })

  return(
    <ul>
    {songNodes}
    </ul>
  )
}

export default ChartList
