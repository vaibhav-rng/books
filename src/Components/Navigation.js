import React from 'react'

function Navigation() {
  return (
    <div>
        <nav style={{backgroundColor:"#203239",color:"#EEEDDE"}} className='p-2 space-x-5 font-serif'>
            <span style={{backgroundColor:"#141E27",border:"solid #141E27"}} className="p-2 ">Home</span>
            <span> <a href="">Contact us</a> </span>
            <span><a href="">Catagories</a> </span>
            <span className='float-right' > <input className=' outline-2 outline-yellow-100 p-1 -mt-1 text-center rounded-md ' type="search" name="" placeholder='Search book'/> </span>
        </nav>
    </div>
  )
}

export default Navigation