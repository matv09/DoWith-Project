import React from 'react'
import { Link } from 'gatsby'
import Logo from '../../assets/logo.svg'
import Card from '../../assets/card.png'
import TickCircle from '../../assets/tick-circle.svg'
import Countries from '../../assets/countries.svg'
import Chart from '../../assets/chart.svg'
import Trending from '../../assets/fi_trending-up.svg'
import Bg from '../../assets/bg.png'
import BgBottom from '../../assets/EllipsePrp.png'
import { Button } from '../../components/Button/Button'
import { Info } from '../../components/Info/Info' 
import './Header.scss'

function Header() {
  return (
    <>
        <div className="header section__padding" id="home">
          <img src={Bg} alt="" class="blurry-gradient"/>
          <img src={BgBottom} alt="" class="blurry-gradient-bottom"/>
          <div className="header-content">
            <h1>Manage your <br /> money with <br /> DoWhith</h1>
            <p>Only wallet you need to carry that allows <br /> making online payment</p>
            <div className="header-buttons">
              <Button primary big round>Request Demo</Button>
              <Button big round>Learn More</Button>
            </div>
          </div>
          <div className="header-image">

            <img src={Card} alt="" />
          
            <div className="header-image-container">
            <Info className="moneyTransfer">
              <div className="moneyTransfer-content">
                <img src={TickCircle} alt=""/>
                <p>Money Transfer Succesfull</p>
              </div>
            </Info>
            <Info blurred className='totalAmmount'>
                <h6>Total Ammount</h6>
                <div className="totalAmmount-content">
                  <p>$ <span>600|</span>.00</p>
                  <img src={Countries} alt=""/>
                </div>
         
            </Info>
            <Info className="infoIcon">
              <img src={Chart} alt=""/>
            </Info>
            <Info blurred className='trending'>
              <h6>Total Income</h6>
              <p>$26,800.00</p>
              <div className='trendingInfo'>
                <p>18%</p>
                <img src={Trending} alt=""/>
              </div>
            </Info>
            <Info className="upgradeInfo">
              <p>Upgrade</p>
            </Info>
            </div>
          </div>
        </div>
    </>
  )
}

export default Header