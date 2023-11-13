
import { FiArrowRight } from 'react-icons/fi'
import { BsFillStarFill } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'

const ProductCard = ({ data }) => {
  var avail=true
  const { image_url, title, price, brand, availability, style, total_reviews,rating } = data
  if (availability === "Out Of Stock") {
    avail=false
  }
  return (
    <div className=' h-[50vh] col-span-1  shadow-xl rounded-2xl overflow-hidden text-[#214E34]'>
      <div className='h-full flex flex-col md:flex-row gap-2'>
        <img src={image_url} className='h-3/4 w-full md:h-full md:w-1/2 ' />
        <div className='flex flex-col grow  md:py-5 py-2 px-4' >
          <div className='flex justify-between items-center'>
            <h1 className='font-semibold'>{title}</h1>
            <p className='md:hidden rounded-lg py-1 font-bold bg-[#214E34] text-white px-2'>{brand}</p>
          </div>
          <p className='hidden md:flex my-2'>{style}</p>
          <p className='hidden md:flex w-fit rounded-lg py-1 font-bold bg-[#214E34] text-white px-2'>{brand}</p>
          <div className='flex my-2 justify-between items-center'>
            <p className=" font-bold text-sm md:text-xs ">{price}.00Rs</p>
            <div className='flex gap-2 items-center'>
              <div className='md:hidden'>
                {
                  !avail && (<p className=' bg-red-400 text-white font-bold px-2 py-1 w-fit '>{availability}</p>)
                }
              </div>
              {avail && (<button className='md:hidden  px-2 py-1'><FiArrowRight style={{ fontSize: '28px' }} /></button>)}

            </div>
          </div>
          <div className='hidden md:flex flex-col justify-between flex-grow '>
            <div className='flex justify-between'>
              <div className='text-yellow-500 flex items-center gap-1'> 
                <p className="text-[#214E34] text-sm">{rating}</p>
                <BsFillStarFill/>
                
              </div>
              <div className='flex items-center gap-1'>
                <AiOutlineUser style={{ fontSize: "20px" }} />
                <p>{total_reviews}</p>
              </div>
            </div>
            <div className='flex justify-between'>
              {
                avail ? (<p className=' bg-green-400 text-white font-bold px-2 py-1 w-fit '>{availability}</p>) : (<p className=' bg-red-400 text-white font-bold px-2 py-1 w-fit '>{availability}</p>)
              }
              <button className=''><FiArrowRight style={{ fontSize: '28px' }} /></button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
