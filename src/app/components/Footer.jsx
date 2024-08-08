'use client'
import React from 'react'
import Image from 'next/image';
import logo from './DashboardCompo/dashimages/klas-logo.svg'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { LuCopyright } from "react-icons/lu";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaRegCopyright } from "react-icons/fa";
import Link from 'next/link'


const Footer = () => {
  return (
    <>
      {/*<footer />*/}

      <div className='bg-blue-700 mt-20'>
        <div className='flex pt-10'>
          <div className='ml-24'>
            <h2 className='text-2xl font-semibold text-white'>Klas</h2>
          </div>

          <div className='flex gap-8 items-center align-center ml-auto mr-28'>
            < RiInstagramFill className='text-2xl text-white' />
            < FaTwitter className='text-2xl text-white' />
            < SiLinkedin className='text-xl text-white' />
          </div>
        </div>

        <div className='flex gap-5 text-center justify-center align-center pt-20'>
          <p className='text-white text-sm hover:text-gray-300 hover:cursor-pointer'>Home</p>
          <Link href="./pricing"> <p className='text-white text-sm hover:text-gray-300 hover:cursor-pointer'>Pricing</p></Link>
          <p className='text-white text-sm hover:text-gray-300 hover:cursor-pointer'>Company</p>
          <p className='text-white text-sm hover:text-gray-300 hover:cursor-pointer'>Case Studies</p>
          <p className='text-white text-sm hover:text-gray-300 hover:cursor-pointer'>Products</p>
          <p className='text-white text-sm hover:text-gray-300 hover:cursor-pointer'>Terms of Use</p>
          <p className='text-white text-sm hover:text-gray-300 hover:cursor-pointer'>Privacy Policy</p>
        </div>

        <div className='flex gap-1 text-center justify-center align-center pt-10 pb-10'>
          <p className='text-gray-300 text-xs pt-1'><FaRegCopyright /></p>
          <p className='text-sm text-gray-300 '> Klas Global, Inc.</p>
        </div>
      </div>
    </>
  )
}

export default Footer