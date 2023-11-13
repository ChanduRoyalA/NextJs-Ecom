"use client"

import ProductCard from '@/components/productCard'
import React, { useEffect, useState } from 'react'
import { ColorRing } from 'react-loader-spinner'


const ProductsPage = () => {
  const [productData, setproductData] = useState({})
  const [status, setstatus] = useState(true)
  const [error, seterror] = useState('')

  const getProductDetails= async()=>{
    const res=await fetch('/api/products',{
      method:"GET"
    })
    const data = await res.json()
    if (data.result === "Success") {
      setproductData(data.allProducts)
      
    }
    else {
      seterror(data.message)
    }
    setstatus(false)
  }

  const renderView = () => {
    if (status) {
      return (
        <div className='h-[90vh] flex justify-center items-center'>
          <ColorRing
            visible={true}
            height="100"
            width="100"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#214E34', '#214E34', '#214E34', '#214E34', '#214E34', '#214E34',]}
          />
        </div>
      )
    }
    else {
      return (
        <div className="h-auto grid grid-rows-1 md:grid-cols-2 py-10 gap-4">
          {
            productData.map((i) => {
              return <ProductCard data={i}/>
            })
          }
    </div>
      )
    }
  }
  useEffect(() => {
    getProductDetails()
    return ()=>{}
  },[])
  return (
    <div>
      {renderView()}
    </div>
  )
}

export default ProductsPage
