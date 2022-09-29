import React from 'react'
import { HomepageMainBody } from '../../component/Homepage/bankOffer';
import {
  BottomSlider,
  SliderBanner,
} from "../../component/Homepage/SliderBanner";

const Homepage = () => {
  return (
    <>
      <SliderBanner />
      <BottomSlider />
      <HomepageMainBody/>
    </>
  )
}

export default Homepage