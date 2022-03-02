import React from 'react'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchIcon from '@mui/icons-material/Search';

function Navigation() {
  return (
    <div>
        <nav style={{backgroundColor:"#203239",color:"#EEEDDE"}} className='font-serif '>
         <div className='flex justify-between'>
          <div className='flex items-center space-x-3'>
            <div style={{backgroundColor:"#141E27",border:"solid #141E27"}} className="p-2 ">Home</div>
            <div className=''> <a href="">Contact us</a> </div>
            <div className=''><a href="">Catagories</a> </div>
          </div>
            <div className=' flex items-center'> <SearchIcon/> <input className=' outline-2  items-end outline-yellow-100 p-1 -mt-1 text-center rounded-md ' type="search" name="" placeholder='Search book'/> <div className=" absolute top-1" > </div> </div>
            <button className='lg:hidden' type=""><MenuSharpIcon/></button> 
            
           
          </div> 
        </nav>
    </div>
  )
}

export default Navigation