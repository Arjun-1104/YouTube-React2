import React from 'react'
import { useSelector } from 'react-redux'

const Offline = () => {
  const {open,theme} = useSelector((store) => store.app)
  return (
    <div  className=' h-[83vh] text-center'>
        <h2 className='text-2xl font-medium'>You are offline</h2>
        <p className='m-5'>Please check your connection or watch your downloaded videos.</p>
        <button type='button' className={`${theme? 'font-semibold border-white/20 hover:bg-blue-300': 'hover:bg-blue-100 border-gray-200'} text-sm text-blue-700 cursor-pointer py-1 px-3 border rounded-full`}>Go to downloads</button>
    </div>
  )
}

export default Offline;