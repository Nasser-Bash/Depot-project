import MainContainer from "../../components/layout/mainContainer"
import Services from "../../components/sections/about/services"
import HeroSection from "../../components/sections/cart/heroSection"
import ProgressBar from "../../components/widgets/progressBar"



function About() {

  return (
    <>  
        <HeroSection title='About'/>
        <MainContainer>
          <Services/>

          
        </MainContainer>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 ">
            <div className="">
                    <img className="object-contain h-full w-full" src="/images/h8-product-2.jpg"/>
                    </div>
                    <div className="info my-auto px-10">
                         <h4 className="uppercase text-black text-xl font-bold mb-4">STRATEGY AND TIMING</h4>
                         <p className=" text-md text-gray-500 mx-auto mb-28 ">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient montes
                          </p>
                    <ProgressBar percent={90} title='WEB DESIGN'/>
                    <ProgressBar percent={45} title='DEVELOPMENT'/>
                    </div>
            </div>
    </>
  )
}

export default About