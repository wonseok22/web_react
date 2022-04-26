import React from 'react'
import YoutubeList from "./YoutubeList";
function YoutubeCont(props) {
  return (
    <div className='container'>
      <section className="youtube__cont">
        <div className="container">
          <div className="youtube__inner">
            <YoutubeList items={props.lists}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default YoutubeCont