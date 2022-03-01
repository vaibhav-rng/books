import React from 'react'

function Navigation() {
  return (
    <div>
        <nav style={{backgroundColor:"#203239",color:"#EEEDDE"}} className='p-2 space-x-5 font-serif'>
            <span style={{backgroundColor:"#141E27",border:"solid #141E27"}} className="p-2 ">Home</span>
            <span> <a href="">Contact us</a> </span>
            <span><a href="">Catagories</a> </span>
            <span className='float-right' > <input className=' outline-2 outline-yellow-100 p-1 -mt-1 text-center rounded-md ' type="search" name="" placeholder='Search book'/> <div className=" absolute top-1" > <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"/></div> </span>
            
        </nav>
    </div>
  )
}

export default Navigation