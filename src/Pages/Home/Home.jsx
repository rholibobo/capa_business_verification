import React from 'react'
import { Email } from '@mui/icons-material'
import heroImage from "../../assets/hero.png"
import { HomeCards } from './HomeCards'
import businessAvatar from "../../assets/secureVerr.svg"
import emailAvatar from "../../assets/emailVerr.svg"

const Home = () => {
  const cardDetails = [{
    title: "Verify with Business name",
    description: "Experience hassle-free verification by simply typing in the business name. Our Verify with Business Namefeature puts the power in your hands, allowing you to effortlessly authenticate businesses by entering their names. Swift, accurate, and user-friendly",
    link: "/",
    avatar: businessAvatar ,
  },
  {
    title: "Verify with business email",
    description: "Seamlessly confirm identities and ensure trust by leveraging our 'verify with email' feature - With just an email address, you can authenticate users and businesses, adding an extra layer of security to your interactions",
    link: "/",
    avatar: emailAvatar ,
  },
]
  return (
    <div className='mt-10'>
    <section className='flex flex-col md:flex-row justify-between items-center  text-center px-10 py-8 mx-auto text-green-900'>
      <div className='md:text-left md:w-1/2'>
      <h1 className='text-4xl font-bold my-6'>Allow us handle your verification for you </h1>
      <p className=' text-left'><span className='text-orange-600 font-bold'>Capa Business Verification</span> serves as your comprehensive business verification platform, offering a streamlined experience for discovering and connecting with genuine businesses and their owners. Our platform is designed to provide you with all the tools you need for reliable and authentic business verification, ensuring a secure and trustworthy environment for your business interactions</p>
      </div>
      <img src={heroImage} className='md:w-2/5 mt-8 md:mt-0' alt="Hero" />
    </section>
    <>
    <hr />
      <h2 className='text-center text-2xl my-10 font-semibold'>Reliable end-to-end verification services</h2>
    <section className='w-11/12 md:w-10/12 mx-auto p-2 flex flex-col md:flex-row gap-6 items-center justify-between'>
      {cardDetails.map((card, index)=>{
        return(

          <HomeCards key={index} title={card.title} description={card.description} linkDestination={card.link} avatar={card.avatar} />
        )
      })}
      
    </section>
    </>
  
    </div>
  )
}

export default Home