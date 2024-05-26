'use client'
import React from 'react'
import './Signinpage.css'
import Link from 'next/link'
import Image from 'next/image'
import slide1 from './images/slide-1.svg'
import { useState } from 'react'


const Signinpage = () => {

    const [show1, setShow1] = useState(true)
    const [show2, setShow2] = useState(false)
    const [show3, setShow3] = useState(false)

    const handleShow1 = () => {
        setShow1(true)
        setShow2(false)
        setShow3(false)

    }

    const handleShow2 = () => {
        setShow1(false)
        setShow2(true)
        setShow3(false)

    }

    const handleShow3 = () => {
        setShow1(false)
        setShow2(false)
        setShow3(true)

    }

  return (
    <div>
        <div className='flex fixed h-full'>
            <div className='px-24 py-3 bg-blue-800'>
                <Image src={slide1} alt='' />

                <span className='flex-column justify-center text-center align-center'>
                    <h1 className='text-white text-3xl'>Deliver an unforgettable experience</h1>
                    <p className='text-lg mt-2 text-white font-sans'>Host all types of classss and sizez on Klas</p>
                </span>

                <span className='btn'>
                <p onClick={handleShow1} className={show1 === true ? ('gray') : ''}>⨀</p>
                <p onClick={handleShow2} className={show2 === true ? ('gray') : ''}>⨀</p>
                <p onClick={handleShow3} className={show3 === true ? ('gray') : ''}>⨀</p>
                </span>
            </div>

            <div className='flex-column px-10 py-12'>
                <h1 className='text-blue-700 text-3xl'>Sign In</h1>

                <form className='p-30 mt-14'>
                    <p className='mt-8 font-sans text-lg'>Email Address</p>

                    <div>
                        <input className='bg-blue-200 font-sans mt-3 rounded-sm p-3' type="email" placeholder='Enter Your Email' required />
                    </div>
                </form>

                <form className='mt-8'>
                    <p className='mt-8 font-sans text-lg'>Password</p>

                    <div>
                        <input className='bg-blue-200 font-sans mt-3 rounded-sm p-3' type="password" placeholder='Enter Your Password' required />
                    </div>
                </form>

                <div className='check'>
                    <span className='left'>
                      <p className='mt-4 w-28'>Remember me</p>
                    
                      <span>
                        <input className='tick' type="checkbox" />
                      </span>

                    </span>

                    <span className='right'>
                        <p>Forgot Password</p>

                    </span>
                </div>

                <div className='btn'>
                   <Link href="./dashboard"><button className='bg-blue-700 p-3 mt-10 px-20 text-white font-sans cursor-pointer rounded-sm'>Continue</button></Link> 
                </div>
                
            </div>

            
        </div>
      
    </div>
  )
}

export default Signinpage