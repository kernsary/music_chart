import React from 'react'

const ChartItem = (props) => {
  return(
    <div>
    <h1>Title: {props.song["im:name"].label}</h1>
    <p>Artist: {props.song["im:artist"].label}</p>
    <p>Chart position: {props.index + 1}</p>
    </div>
  )
}

export default ChartItem
