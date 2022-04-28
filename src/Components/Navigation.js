import React ,{useState} from 'react'
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchIcon  from '@mui/icons-material/Search';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';


function Navigation() {
  
  const [mobileState,mobileSetstate]= useState(false)
  return (
    <div>
        <nav style={{backgroundColor:"#203239",color:"#EEEDDE"}} className='font-serif '>
         <div className='flex justify-between'>
          <div className='flex items-center space-x-3'>
          <button className='md:hidden' type="" onClick={()=>mobileSetstate(!mobileState)}><MenuSharpIcon/></button>
            <div style={{backgroundColor:"#141E27",border:"solid #141E27"}} className="p-2 ">Home</div>
            <div className='hidden md:flex  hover:bg-black p-2'> <a href="">Contact us</a> </div>
            <div className='hidden md:flex hover:bg-black p-2'><a href="">Catagories</a> </div>
            <div className='hidden md:flex hover:bg-black p-2'><a href="">Browse</a> </div>

          </div>
          
            <div className=' hidden  md:flex  items-center lg:mr-36  pt-1'><div className=' absolute hidden md:flex'><SearchIcon fontSize='large' color="action"/></div>  <input className=' outline-2  items-end  md:px-28 p-1 -mt-1 text-center rounded-md ' type="search" name="" placeholder='Search book'/> <div className=" absolute top-1" > </div> </div>
            <div className='flex items-center'>
               <div className=' px-2 mr-1'><a href=""><BookmarkAddIcon fontSize='large' /></a> </div>
               <div className='  bg-black p-2 lg:mr-4'> <a href="">Login/register</a></div> 
            </div>
          </div>
          
    	    <div className=''>
            <hr/>
          <div className='md:hidden flex justify-center items-center px-16 py-2'><div className=' absolute hidden md:flex'><SearchIcon fontSize='large' color="action"/></div>  <input className=' outline-2  items-end  md:px-28 p-1 -mt-1 text-center rounded-md  w-full' type="search" name="" placeholder='Search book'/> <div className=" absolute top-1" > </div> </div>
            
          </div>

          {mobileState?
            (
          <div className='md:hidden text-xl '>
            <hr/>
            <a className='flex justify-center hover:bg-black' href="">Contact us</a>
            <a className='flex justify-center hover:bg-black' href="">Catagories</a>
            <a className='flex justify-center hover:bg-black' href="">Browse</a>
          </div>)
           :null 
          }
        </nav>
    </div>
  )
}

export default Navigation