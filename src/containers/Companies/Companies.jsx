import React from 'react'
import Company from '../../components/Company/Company'

import companyImg from '../../assets/company.svg'
import './Companies.scss'

function Companies() {
  return (
    <div className='companiesContainer'>
      <h3>Support by</h3>
        <div className="companiesLogos">
          <Company imgSrc={companyImg}/>
          <Company imgSrc={companyImg}/>
          <Company imgSrc={companyImg}/>
          <Company imgSrc={companyImg}/>
          <Company imgSrc={companyImg}/>
        </div>
    </div>
  )
}

export default Companies