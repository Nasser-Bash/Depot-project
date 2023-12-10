


function HeroSection({title}) {
  return (
    <div className='hero-section relative w-full h-[300px]' style={{
      backgroundImage : 'url("images/pexels-rachel-claire-5490778.jpg")',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      backgroundPosition : 'center'
  }}>
    <h4 className='text-6xl text-white text-center lg:py-28 py-28'>{title}</h4>
  </div>
  )
}

export default HeroSection