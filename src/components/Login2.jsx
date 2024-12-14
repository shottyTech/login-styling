import React from 'react'
import photo from '../assets/rockey.jpg'
function Login2() {
    return (
        <div className='relative w-full h-screen bg-gray-600/100'>
            <img src={photo} alt="image" className='absolute w-full h-full object-cover mix-blend-overlay' />

            <div className='flex justify-center h-full'>
                <form className=" bg-blue-500 max-w-[400px] m-auto w-full p-10">
                    <h2 className='px-2 py-2 text-center my-2 text-white text-3xl'>ShottyFarms</h2>
                    <div className='flex flex-col'>
                        <label htmlFor="">Username</label>
                        <input></input>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Password</label>
                        <input></input>
                    </div>
                    <button className='py-2 px-4 bg-blue-500 my-3 w-full'>Sign in</button>
                    <p><input type="checkbox" /></p>
                    <p></p>
                </form>
            </div>
        </div>

    )
}

export default Login2