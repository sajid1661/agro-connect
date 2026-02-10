import { Link } from 'react-router'


const Crop = ({ id, name, price, location, status,image }) => {

  return (
    <>
      <Link className='w-full' to={`/crop-details/${id}`}>
        <div className='border-2 pb-8 md:text-lg bg-gray-200'>
          <img className='max-sm:h-50 w-full h-70'  src={image instanceof File ? URL.createObjectURL(image) : image} alt="Crop-Pic" />
          <hr />
          <div className='flex justify-between px-2 mt-2' >
            <p><b className='font-semibold'>Crop:</b>{name}</p>
            <p>{location}</p>
          </div>

          <div className='flex justify-between px-2 mt-1'>
            <p><b className='font-semibold' >Price:</b>{price}</p>
            <p>{status}</p>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Crop;
