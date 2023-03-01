import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import storySg from '../../assets/story.svg'


function Features({iconSrc, title, text}) {
  const [shouldHover, setShouldHover] = useState(false);
  
  return (
    <FeaturesCompContainer onMouseEnter={() => setShouldHover(true)} onMouseLeave={() => setShouldHover(false)}>
      {shouldHover ? (
      <>
        <div className="featuresHeading">
          <img src={iconSrc} alt='' />
          <h5>{title}</h5>
        </div>
        <div className="featureCompContainer-text">
          <p>{text}</p>
        </div>
      </>
        ) : (
      <>
        <div className="featuresHeading">
        <img src={storySg} alt='' />
          <h5>{title}</h5>
        </div>
        <div className="featureCompContainer-text">
          <div className='featureCompContainer-text-hidden'></div>
          <div className='featureCompContainer-text-hidden-two'></div>
        </div> 
      </>
        )}
      
    </FeaturesCompContainer>
  )
}

export default Features;


const FeaturesCompContainer = styled.div`


 transition: 0.3s !important;
  width: 368px;
  height: 170px;
  margin: 5rem 0;
  padding: 1.5rem;
  border-radius: 16px;
  border: 1px solid #2C1A74;

  &:hover{
    background: ${(shouldHover) => (shouldHover && '#fff')};
    transform: translateY(-2px);

    .featuresHeading {
    h5 {
      color: ${(shouldHover) => (shouldHover && '#192252')};
    }
  }
  }


  .featuresHeading {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    

    img {
      width: 48px;
    }

    h5 {
      font-size: 18px;
      color: #fff;
    }
  }
  .featureCompContainer-text {
    color: #848FAC;
    padding: 1rem 0;
  }

  .dupskoBorder {
    width: 200px;
    background: black;
  }

  .featureCompContainer-text-hidden {
    width:300px;
    height:15px;
    background: #fff;
    opacity: 0.3;
    border-radius: 4px;
  }

  .featureCompContainer-text-hidden-two {
    width:200px;
    height:15px;
    background: #fff;
    opacity: 0.3;
    border-radius: 4px;
    margin-top: 15px;
  }
  

`
