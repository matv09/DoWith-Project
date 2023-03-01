import React from 'react'
import Features from '../../components/Features/Features'
import sendIcon from '../../assets/send-sqaure.svg'
import increaseIcon from '../../assets/increase-icon.svg'
import money from '../../assets/money.svg'
import iphone from '../../assets/iphoneXS.png'
import human1 from '../../assets/human1.png'
import human2 from '../../assets/human2.png'
import human3 from '../../assets/human3.png'
import human4 from '../../assets/human4.png'
import human5 from '../../assets/human5.png'
import human6 from '../../assets/human6.png'
import human7 from '../../assets/human7.png'

import './Feature.scss'



function Feature() {

  return (
    <div className='featureContainer section__paddings'>
      <div className="featureHeading-text">
        <h3>Dashboard Feature<br /> Are Quite Complete</h3>
        <p>DoWhith makes it easy for you to make payments through your <br />dashboard easily without having to leave the house. We use the most <br />advanced systems so security is guaranted</p>
      </div>
      <div className='featuresContentContainer'>
        <div className='featuresWrapper'>
          <Features iconSrc={sendIcon} title="Quick Transaction Easier" text="Perform various transactions (transfers, request, top up and more) very easily."/>
          <Features iconSrc={increaseIcon} title="Transaction History" text="Perform various transactions (transfers, request, top up and more) very easily."/>
          <Features iconSrc={money} title="User Communication" text="Perform various transactions (transfers, request, top up and more) very easily."/>
        </div>
        <div className='featureImage'>
          <div className='circles'>
            <div className="circle">
            <div className="circleIcons">
              <img className="circleIcons1" src={human1} alt="" />
              <img className="circleIcons2" src={human2} alt="" />
              <img className="circleIcons3" src={human3} alt="" />
              <img className="circleIcons4" src={human4} alt="" />
              <img className="circleIcons5" src={human5} alt="" />
              <img className="circleIcons6" src={human6} alt="" />
              <img className="circleIcons7" src={human7} alt="" />
            </div>
            </div>

          </div>
          <div className="foto">
          <img src={iphone} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feature