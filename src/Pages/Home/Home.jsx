import React from 'react'
import { Email } from '@mui/icons-material'

const Home = () => {
  return (
    <div className=''>
    <section className='flex flex-col justify-between items-center bg-green-100 mb-10 text-center px-4 py-8 text-green-800'>
      <div className=''>
      <h1 className='text-4xl font-bold my-2'><span className='text-black'>Verify</span> any business </h1>
      <p className='text-lg'><span className='text-orange-600 font-bold'>Capa Business Verification</span> serves as your comprehensive business verification platform, offering a streamlined experience for discovering and connecting with genuine businesses and their owners. Our platform is designed to provide you with all the tools you need for reliable and authentic business verification, ensuring a secure and trustworthy environment for your business interactions</p>
      </div>
      <img src="" alt="" />
    </section>
    <section className='w-11/12 mx-auto text-center p-2'>
      <h1 className='text-2xl font-bold my-2'>Verify with Business name</h1>
      <p>Experience hassle-free verification by simply typing in the business name. Our <span className='italic text-green-600'>
      Verify with Business Name
        </span>  feature puts the power in your hands, allowing you to effortlessly authenticate businesses by entering their names. Swift, accurate, and user-friendly – confirming business details has never been this easy.</p>
    </section>
    <section className='w-11/12 mx-auto p-2 flex justify-between items-center md:flex-row-reverse flex-col-reverse'>
     <div className='md:w-3/5'>
     <h1 className='text-2xl font-bold my-2'>Verify with Business Email</h1>
      <p>With just an email address, you can authenticate users and businesses, adding an extra layer of security to your interactions.</p>
     </div>
      <Email className='' style={{fontSize: "20rem"}} />
    </section>
    </div>
  )
}

export default Home