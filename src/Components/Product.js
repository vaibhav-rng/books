import React from 'react'

function Product() {
  return (
    <div className=' w-96 h-96 divide-x   '>
        {/* offer */}
    <div className='flex justify-center'>
      <div className=' text-center ml-4 h-36  w-60 m-4 flex justify-center '>
          <img className=' h-40 w-36' src={require('../images/one_m.jpg')}  />
      </div>      
    </div>

      <div className=' text-center  font-serif font-bold'>
          A Millon to one
          by  Tony Faggioli
          
      </div>
      <div className="p-4 flex justify-between">
          <div className=' w-56 h-32 text-sm space-y-2 mt-7'>
             <h1 className=''><span className=' font-bold'> Series:</span> Beyond the Veil Supernatural Thriller, Book 2</h1> 
             <h1><span className=' font-bold'> Genre:</span> Supernatural Thriller</h1>
             <h1> <span className=' font-bold'> Publication Year:</span> 2016</h1> 
          </div>
          <div className='border-l-2 w-36 h-36   m-1 space-y-2  '>
             <button className='ml-5 mt-7 rounded-sm py-2 w-32 text-white bg-red-500' >Buy Now</button>  
             <button className='ml-5 rounded-sm   py-2 w-32 text-white bg-green-400' >Add to wishList</button>
          </div>
      </div>
    </div>
  )
}

export default Product