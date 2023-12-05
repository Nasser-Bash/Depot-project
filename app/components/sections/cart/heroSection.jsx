


function HeroSection({title}) {
  return (
    <div className='hero-section relative w-full h-[300px]' style={{
        backgroundImage : 'url("images/faq-title-img.jpg")'
    }} >

      <h4 className='text-6xl text-white text-center lg:py-28 py-28'>{title}</h4>

      
    </div>
  )
}

export default HeroSection