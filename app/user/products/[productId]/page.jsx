"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { ColorRing } from "react-loader-spinner"
import { BsFillStarFill } from 'react-icons/bs'

import { AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'


const Itempage = () => {
    var avail = true
    const params = useParams()
    const { productId } = params
    const [itemDetails, setitemDetails] = useState({})
    const [status, setstatus] = useState(true)
    const [error, seterror] = useState("")
    
    const getItemsDetails = async() => {
        const res = await fetch('/api/products', {
            method:"POST",
            headers: {
               "Content-type":"application/json"
            },
            body: JSON.stringify({
               _id:productId
           }) 
        })
        const data=await res.json()
        if (data.result === "Success") {
            setitemDetails(data.getItem)
        }
        else {
            seterror(data.message)
        }
        setstatus(false)
    }

    useEffect(() => {
        getItemsDetails()
        return ()=>{}
    },[])
    console.log(itemDetails)

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
            if (itemDetails.availability === "Out Of Stock") {
                avail = false
            }
            return (
                <div className="h-auto md:h-screen  grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-2">
                    <div className="h-full flex justify-center items-center ">
                        <div className="h-full w-full md:h-1/2 md:w-1/2 rounded-lg overflow-hidden shadow-lg">
                            <img src={itemDetails.image_url} className="h-full w-full" />
                        </div>
                    </div>
                    <div className=" h-full md:h-full  flex justify-center items-center">
                        <div className="h-full md:h-1/2 border-2 border-[#214E34] rounded-lg w-full flex flex-col gap-2 px-6 py-5">
                            <div className="flex flex-col md:flex-row justify-between items-start gap-2  md:items-center">
                                <h1 className="text-2xl font-semibold">{itemDetails.title}</h1>
                                <p className="px-2 py-1 bg-red-500 text-white font-semibold text-sm">{itemDetails.brand}</p>
                            </div>
                            <p>{itemDetails.style}</p>
                            <p>{itemDetails.description}</p>
                            <p>Rs {itemDetails.price}.00/-</p>
                            <div className='flex items-center gap-4'>
                                <div className='flex items-center gap-1'>
                                    <AiOutlineUser style={{ fontSize: "20px" }} />
                                    <p>{itemDetails.total_reviews}</p>
                                </div>
                                <div className='text-yellow-500 flex items-center gap-1'>
                                    <p className="text-[#214E34] text-base">{itemDetails.rating}</p>
                                    <BsFillStarFill />
                                </div>

                            </div>
                            <div className="md:hidden">
                                {
                                    !avail && (<p className=' bg-red-400 text-white font-bold px-2 py-1 w-fit '>{itemDetails.availability}</p>)
                                }
                                {
                                    avail && (<p className=' bg-green-400 text-white font-bold px-2 py-1 w-fit '>{itemDetails.availability}</p>)
                                }
                            </div>

                            <div className=" hidden md:flex flex-row gap-2 items-center">
                                <div className="hidden md:flex">
                                    {
                                        !avail && (<p className=' bg-red-400 text-white font-bold px-2 py-1 w-fit '>{itemDetails.availability}</p>)
                                    }
                                    {
                                        avail && (<p className=' bg-green-400 text-white font-bold px-2 py-1 w-fit '>{itemDetails.availability}</p>)
                                    }
                                </div>


                                <button className=' bg-green-400 text-white font-bold px-2 py-1 w-fit '>Add to Cart</button>
                                <button className=' bg-green-400 text-white font-bold px-2 py-1 w-fit '>Add to Like</button>
                            </div>
                            <div className="md:hidden flex gap-1 justify-between mt-4">
                                <button className='  text-[#214E34] font-bold px-2 py-1 w-fit '> <AiOutlineShoppingCart style={{fontSize:"30px"}}/> </button>
                                <button className=' text-[#214E34]  font-bold px-2 py-1 w-fit '> <AiOutlineHeart style={{fontSize:"30px"}}/> </button>
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
    }
  return (
      <div className="mt-20 md:mt-0">
          {renderView()}
      </div>
  )
}

export default Itempage
