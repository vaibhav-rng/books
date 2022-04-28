import React, { useState } from 'react'
import product from '../tempData/product.json'


function Product() {

  const [Next, setNext] = useState(1);
  let count=product.length 
  console.log(count)
  return (
  <>
    <button onClick={()=>setNext(Next-1)}>prev</button>
    
    {product.map(product =>{return<>
      {product.id==Next||product.id==Next+1?
        <div className=' w-96 h-96  divide-x'>
        {/* offer */} 
    
    

     <>

          <div className='flex justify-center'>
          <div className=' text-center ml-4 h-36  w-60 m-4 flex justify-center '>
              <img className=' h-40 w-36' src={require('../images/one_m.jpg')}  />
          </div>      
        </div>
       
          <div className=' text-center  font-serif font-bold'>
          {product.name}
          </div>
          <div className="p-4 flex justify-between">
            
              <div className=' w-56 h-32 text-sm space-y-2 mt-7'>
                 <h1 className=''><span className=' font-bold'> Series:</span> {product.Series}</h1> 
                 <h1><span className=' font-bold'> Genre:</span> {product.Genre}</h1>
                 <h1> <span className=' font-bold'> Publication Year:</span> {product['Publication Year']}</h1> 
              </div>
              <div className='border-l-2 w-36 h-36   m-1 space-y-2  '>
                 <button className='ml-5 mt-7 rounded-sm py-2 w-32 text-white bg-red-500' >Buy Now</button>  
                 <button className='ml-5 rounded-sm   py-2 w-32 text-white bg-green-400' >Add to wishList</button>
              </div>
          </div>
          
          
          </>
         
           
        </div>:null}
        </>})}
        
        <button onClick={()=>Next<count?setNext(Next+1):setNext(1)}>Next</button>
    </>
  )
}

export default Product