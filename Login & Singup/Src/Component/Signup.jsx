import React from 'react'
import {Link} from 'react-router-dom'
import SideImg from './Assest/image.jpg';
function Signup() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
    <div className='relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0'>
      <div className='flex flex-col justify-center p-8 md:p-14'>
        <span className='mb-3 text-4xl font-bold'>Welcome back Signup</span>
        <span className='font-light text-grey-400 mb-8'>Welcome back! please enter your details</span>
        <div className='py-4'>
          <span className='mb-2 text-md'>Name:-</span>
          <input type="text" className='w-full p-2 border border-grey-300 rounded-md placeholder:font-light placeholder:text-grey-500'  name='email'  />
        </div>
        <div className='py-4'>
          <span className='mb-2 text-md'>Password:-</span>
          <input type="password" className='w-full p-2 border border-grey-300 rounded-md placeholder:font-light placeholder:text-grey-500' name='password' />
        </div>
        <div className='flex justify-between w-full py-4'>
          <div className='mr-24'>
            <input type="checkbox" name='ch' className='mr-2' />
            <span className='text-md'>Remember for 30 days</span>
          </div>
          <span className='font-bold text-md'>Forgot password</span>
        </div>
       <Link to="/login"> <button className='w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300'>Login</button></Link>
         
        
      </div>  
      <div className='relative'>
        <img src={SideImg} alt="" className='h-full w-[400px] hidden rounded-r-2xl md:block object-cover' />
              {/* Text on image */}
              <div className='absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block'>
                <span>We've been uesing Untitle to click<br/>start every new projectand can't <br/>imagine working without it.</span>

              </div>
      </div>
    </div>
</div>
  )
}

export default Signup