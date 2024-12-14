import React from 'react'
import photo from '../assets/mounts.jpg'
function Login() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-screen'>
        <div className='hidden sm:block'>
            <img src={photo} alt="image" className='object-cover w-full h-full' />
        </div>
        <div className='flex flex-col justify-center bg-gray-100'>
            <form className='max-w-[400px] m-auto w-full bg-white p-4'>
                <div className='py-4 text-center text-4xl'>
                    <h2>ShottyTech.</h2>
                </div>
                <div className='flex flex-col p-2'>
                    <label htmlFor="">Username</label>
                    <input type="text" className='border p-2'/>
                </div>
                <div className='flex flex-col p-2'>
                    <label htmlFor="">Password</label>
                    <input type="password"className='border p-2' />
                </div >
                <button className='text-white w-full py-2 my-5 bg-indigo-600 hover:bg-indigo-500 hover:transition-all hover:duration-.5s ease-in-out'>Sing in</button>
                <div className=' flex justify-between w-full'>
                    <p className='flex'><input type="checkbox" className='mr-2' />Remember Me</p>
                    <p>Create an Account</p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login