import React from 'react'
import { Info } from '../../components/Info/Info'
import TickCircle from '../../assets/tick-circle.svg'
import frame from '../../assets/frame.png'
import playButton from '../../assets/play.svg'

import './About.scss'
import Abouts from '../../components/Abouts/Abouts'

function About() {
  return (
    <div className='aboutContainer section__padding'>
      <div className="aboutVideoContainer">
        <img className="frame" src={frame}/>
        <img className='playButton' src={playButton} />
      </div>
      <div className="aboutContent">
        <h3>Pay and receive <br />money hassle-free</h3>
        <p>Many great people use our app and are trusted by <br />them, so our app is highly recommended for you</p>
      
        <Abouts title="Instantly move money between sites"/>
        <Abouts title="Attractive appearance is not boring"/>
        <Abouts title="Withdraw to your bank in second"/>
        <Abouts title="Used by millions arround the world"/>
        <Abouts title="Message with same user of DoWhith"/>
        </div>
      </div>

  )
}

export default About