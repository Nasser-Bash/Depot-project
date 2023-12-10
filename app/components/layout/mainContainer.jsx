

function MainContainer(props) {
  return (
    <div className='lg:containe mx-auto lg:p-10  p-5 '>
        {props.children}
    </div>
  )
}

export default MainContainer