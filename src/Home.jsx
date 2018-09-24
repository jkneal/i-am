import React from 'react'
import { Player, BigPlayButton } from 'video-react'

import brickWallImg from './images/brick-wall.jpg'

export default () => (
  <div>
    <div className="header">
      <h1>I Am</h1>
      <div className="header_by">
        Rudimental Snare Solo by <span className="header_name">Jerry Neal</span> 
        <br/><span className="header_song">Song by <span className="header_name">Critters Buggin</span></span>
      </div>
    </div>
    <Player
      playsInline
      poster="/images/brick-wall.jpg"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
      <BigPlayButton position="center" />
    </Player>
    <div className="footer">
        {/* <i className="fa fa-headphones" aria-hidden="true"></i> Audio Note: For the best experience, use good headphones! */}
        <a href="#"><i className="far fa-file-pdf" aria-hidden="true"></i> Download Solo</a>
        <span className="footer_email"><a href="#"><i className="fas fa-envelope" aria-hidden="true"></i> Email</a></span>
    </div>
  </div>
)
