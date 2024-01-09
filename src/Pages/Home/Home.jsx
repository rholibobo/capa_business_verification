import React from 'react'
import { Email } from '@mui/icons-material'
import heroImage from "../../assets/hero.png"
import { HomeCards } from './HomeCards'

const Home = () => {
  const cardDetails = [{
    title: "Verify with Business name",
    description: "Experience hassle-free verification by simply typing in the business name. Our Verify with Business Namefeature puts the power in your hands, allowing you to effortlessly authenticate businesses by entering their names. Swift, accurate, and user-friendly",
    link: "/",
    avatar: "../../assets/undraw_authentication_re_svpt.svg" ,
  },
  {
    title: "Verify with business email",
    description: "Seamlessly confirm identities and ensure trust by leveraging our 'verify with email' feature - With just an email address, you can authenticate users and businesses, adding an extra layer of security to your interactions",
    link: "/",
    avatar: "../../assets/undraw_personal_email_re_4lx7.svg" ,
  },
]
  return (
    <div className=''>
    <section className='flex flex-col md:flex-row justify-between items-center bg-green-100 mb-10 text-center px-4 py-8 text-green-800'>
      <div className='md:text-left md:w-1/2'>
      <h1 className='text-4xl font-bold my-2'>Allow us handle your verification for you </h1>
      <p className='text-'><span className='text-orange-600 font-bold'>Capa Business Verification</span> serves as your comprehensive business verification platform, offering a streamlined experience for discovering and connecting with genuine businesses and their owners. Our platform is designed to provide you with all the tools you need for reliable and authentic business verification, ensuring a secure and trustworthy environment for your business interactions</p>
      </div>
      <img src={heroImage} className='md:w-2/5' alt="Hero" />
    </section>
    <div>
      <h2 className='text-center text-2xl leading-[5]'>Reliable end-to-end verification services</h2>
    <section className='w-11/12 md:w-10/12 mx-auto p-2 flex flex-col md:flex-row gap-6 items-center justify-between'>
      {cardDetails.map((card, index)=>{
        return(

          <HomeCards key={index} title={card.title} description={card.description} linkDestination={card.link} avatar={card.avatar} />
        )
      })}
      
    </section>
    </div>
  
    </div>
  )
}

export default Home