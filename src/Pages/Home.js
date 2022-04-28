import React from 'react'
import Navigation from '../Components/Navigation'
import Product from '../Components/Product'


function Home() {
  return (
    <>

      <Navigation/>
      <div className='flex justify-center'>
        <Product/>
      </div>
    </>
  )
}

export default Home