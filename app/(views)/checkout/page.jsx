'use client'

import MainContainer from "../../components/layout/mainContainer"
import HeroSection from "../../components/sections/cart/heroSection"
import CheckoutForm from "../../components/sections/checkout/form"


function Checkout() {
  return (
    <div>
        <HeroSection title='Checkout'/>
        <MainContainer>
                <CheckoutForm/>
        </MainContainer>
    </div>
  )
}

export default Checkout