'use client'
import React from 'react'
import './Navbar.css'
import Image from 'next/image'
import logo from './DashboardCompo/dashimages/klas-logo.svg'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>

      <div className='bg-gradient-to-b from-blue-700 to-violet-500 flex flex-col'>
        {/*<Navbar />*/}
        <nav className='flex items-center bg-white py-4 mx-12 my-10 align-center text-center rounded-xl shadow-md'>
          <div className='text-blue-600 text-2xl font-bold ml-5'>
            <Link href="/"><h2 className='flex items-center'><Image src={logo} width={60} alt='k' /> Klas</h2></Link>
          </div>
          <div className='flex ml-auto gap-10 pt-3'>
            <Link href="/"><p className='hover:text-blue-700 hover:cursor-pointer'>Home</p></Link>
            <Link href="./pricing"><p className='hover:text-blue-700 hover:cursor-pointer'>Pricing</p></Link>
            <Link href="./companypage"><p className='hover:text-blue-700 hover:cursor-pointer'>Company</p></Link>
            <Link href="./casestudiespage"><p className='hover:text-blue-700 hover:cursor-pointer'>Case Studies</p></Link>
            <Link href="./blog"><p className='hover:text-blue-700 hover:cursor-pointer'>Blog</p></Link>
          </div>
          <div className='flex items-center gap-3 ml-auto pr-10 '>
            <Link href="./signuppage"> <button className='text-blue-600 font-semibold mr-3'>Login</button></Link>
            <Link href="./signinpage"> <button className='bg-blue-600 text-white py-3 px-5 rounded-lg'>Sign up free</button></Link>
          </div>
        </nav>
      </div>

    </div>
  )
}

export default Navbar