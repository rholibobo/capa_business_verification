import React from 'react'
import { Email } from '@mui/icons-material'

const Home = () => {
  return (
    <div className='p-1'>
    <section className='flex flex-col justify-between items-center bg-blue-100 mb-10 mt-4 w-11/12 mx-auto'>
      <div className='text-center p-2'>
      <h1 className='text-4xl font-bold my-2'><span className='text-green-700'>Verify</span> any business </h1>
      <p className='text-lg'><span className='text-orange-600 font-bold'>Capa Business Verification</span> serves as your comprehensive business verification platform, offering a streamlined experience for discovering and connecting with genuine businesses and their owners. Our platform is designed to provide you with all the tools you need for reliable and authentic business verification, ensuring a secure and trustworthy environment for your business interactions</p>
      </div>
      <img src="" alt="" />
    </section>
    <section className='w-11/12 mx-auto text-center p-2'>
      <h1 className='text-2xl font-bold my-2'>Verify with Business name</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptatibus deleniti praesentium eaque iste obcaecati ullam placeat facilis voluptates expedita.</p>
    </section>
    <section className='w-11/12 mx-auto p-2 flex justify-between items-center md:flex-row-reverse flex-col'>
     <div className='w-3/5'>
     <h1 className='text-2xl font-bold my-2'>Verify with Business Email</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto voluptatibus deleniti praesentium eaque iste obcaecati ullam placeat facilis voluptates expedita.</p>
     </div>
      <Email className='' style={{fontSize: "20rem"}} />
    </section>
    </div>
  )
}

export default Home