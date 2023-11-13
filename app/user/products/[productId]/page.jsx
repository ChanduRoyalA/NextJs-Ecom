"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

 

const Itempage = () => {
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
  return (
    <div>
          <p>{productId}</p>
    </div>
  )
}

export default Itempage
