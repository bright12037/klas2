'use client'
import React from 'react'
import './Case.css'
import { useState } from 'react'
import Image from 'next/image'
import ai from './Images/AIschool.svg'
import logo from './Images/logo.png'
import img from './Images/designpalimg1.svg'
import holding from './Images/holdinghand.jpg'
import img2 from './Images/ai-schoolimg1.svg'
import holding2 from './Images/Bookings-img2.jpeg'
import img3 from './Images/dev-careerimg1.svg'
import holding3 from './Images/blog3.webp'
import design from './Images/Designpal.svg'
import dev from './Images/Devcareer.svg'

const CasesTudy = () => {

  return (
    <div className=''>

        <div className='top'>
      <div className='navbar'>
        <a href="dashboardpage">
          <div>
            <Image src={logo} height={50} width={100} alt='' />
          </div>
        </a>

        <div className='flex ml-60 align-center gap-5'>
          <a href="HomeComp">
            <p>Home</p>
          </a>

          <a href="pricingpage">
            <p>Pricing</p>
          </a>

          <a href="comapanypage">
            <p>Companies</p>
          </a>

          <a href="casestudiespage">
            <p>Case Studies</p>
          </a>

          <a href="blogpage">
            <p>Blog</p>
          </a>
        </div>

        <div className='display-flex ml-40 gap-3 align-center'>

          <a href="signinpage">
            <button className='mr-7'>Login</button>

          </a>

          <a href="signuppage">
            <button className='bg-blue-600 text-white mr-3 p-3 rounded-sm cursor-pointer'>Sign up free</button>
          </a>

        </div>

      </div>
      
        </div>

        <div className='mt-40 py-5'>
            <div>
              <h1 className='flex-column mt-10 font-bold text-6xl text-center align-center'>Customer Case Studies</h1>
            </div>

            <div className='flex-column text-center mt-5 align-center'>
              <p className='text-gray-500 text-xl'>See how top communities, online schools, and brands globally are using Klas to power live learning for</p>
              <p className='text-gray-500 text-xl'>their students.</p>

            </div>
        </div>

        <div className='flex align-center pb-10 mt-7 justify-center gap-20'>
            <Image className='img' src={design} alt='' />
            <Image className='img' src={dev} alt='' />
            <Image className='img' src={ai} alt='' />

        </div>

        <div className='flex gap-10 justify-center align-center mt-40'>
          <div className='ebay'>
          <div>
            <Image className='cover' src={img} alt='' />
          </div>

          <div>
            <Image className='img2' src={holding} alt='' />
          </div>

          <div className='flex justif-center align-center'>

            <div id='one' className='p-6 bg-white'>
              <p className='font-bold text-lg'>DesignPal</p>

              <p className='underline text-gray-500 text-sm py-5'>https://www.designpal.com/</p>

              <p className='py-3'>DesignPal is an online design school with a goal <br /> to train over 100k designers globally using Klas.</p>

              <p className='py-4 font-bold'>Online school</p>
            </div>

            

          </div>

          </div>

          <div className='ebay'>
          <div>
            <Image className='cover' src={img2} alt='' />
          </div>

          <div>
            <Image className='img2' src={holding2} alt='' />
          </div>

          <div className='flex justif-center align-center'>

            <div id='one' className='p-6 bg-white'>
              <p className='font-bold text-lg'>AI School Africa</p>

              <p className='underline text-gray-500 text-sm py-5'>https://phcschoolofai.org/</p>

              <p className='py-3'>AI School is an online community that trains <br /> thousands of aspiring ML engineers in Africa <br /> using Klas.</p>

              <p className='py-4 font-bold'>Community</p>
            </div>

            

          </div>

          </div>

          <div className='ebay'>
          <div>
            <Image className='cover' src={img3} alt='' />
          </div>

          <div>
            <Image className='img2' src={holding3} alt='' />
          </div>

          <div className='flex justif-center align-center'>

            <div id='one' className='p-6 bg-white'>
              <p className='font-bold text-lg'>DevCareer</p>

              <p className='underline text-gray-500 text-sm py-5'>https://devcareer.io/</p>

              <p className='py-3'>DevCareer is one of the biggest coding <br /> communities in Africa with over 10k active <br /> members. They use Klas for their virtual <br /> bootcamps & classes.</p>

              <p className='py-4 font-bold'>Community</p>
            </div>

            

          </div>

          </div>

        </div>

        <div className='flex gap-10 pb-5 justify-center align-center mt-10'>
          <div className='ebay'>
          <div>
            <Image className='cover' src={img3} alt='' />
          </div>

          <div>
            <Image className='img2' src={holding3} alt='' />
          </div>

          <div className='flex justif-center align-center'>

            <div id='one' className='p-6 bg-white'>
              <p className='font-bold text-lg'>DevCareer</p>

              <p className='underline text-gray-500 text-sm py-5'>https://devcareer.io/</p>

              <p className='py-3'>DevCareer is one of the biggest coding <br /> communities in Africa with over 10k active <br /> members. They use Klas for their virtual <br /> bootcamps & classes.</p>

              <p className='py-4 font-bold'>Community</p>
            </div>

            

          </div>

          </div>

          <div className='ebay'>
          <div>
            <Image className='cover' src={img} alt='' />
          </div>

          <div>
            <Image className='img2' src={holding} alt='' />
          </div>

          <div className='flex justif-center align-center'>

            <div id='one' className='p-6 bg-white'>
              <p className='font-bold text-lg'>DesignPal</p>

              <p className='underline text-gray-500 text-sm py-5'>https://www.designpal.com/</p>

              <p className='py-3'>DesignPal is an online design school with a goal <br /> to train over 100k designers globally using Klas.</p>

              <p className='py-4 font-bold'>Online school</p>
            </div>

            

          </div>

          </div>

          <div className='ebay'>
          <div>
            <Image className='cover' src={img3} alt='' />
          </div>

          <div>
            <Image className='img2' src={holding2} alt='' />
          </div>

          <div className='flex justif-center align-center'>

            <div id='one' className='p-6 bg-white'>
              <p className='font-bold text-lg'>DevCareer</p>

              <p className='underline text-gray-500 text-sm py-5'>https://devcareer.io/</p>

              <p className='py-3'>DevCareer is one of the biggest coding <br /> communities in Africa with over 10k active <br /> members. They use Klas for their virtual <br /> bootcamps & classes.</p>

              <p className='py-4 font-bold'>Community</p>
            </div>

            

          </div>

          </div>
          
        </div>       

    </div>
  )
}

export default CasesTudy
