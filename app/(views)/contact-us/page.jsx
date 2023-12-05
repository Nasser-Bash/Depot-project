import MainContainer from "@/app/components/layout/mainContainer"
import Addresses from "@/app/components/sections/contact/addresses"
import ContactForm from "@/app/components/sections/contact/contactForm"
import Map from "@/app/components/sections/contact/map"

function ContactUs() {
  return (
    <>
        <Map/>
        <MainContainer>
            <Addresses/>
            <ContactForm/>
        </MainContainer>
    </>
  )
}

export default ContactUs