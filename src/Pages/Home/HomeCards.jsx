import React from 'react'
import { Link } from 'react-router-dom'

export const HomeCards = ({title, description, linkDestination}) => {
  return (
    <div className='p-12 lg:p-16 border border-gray-900 rounded-5xl'>
    <h2 className='mb-6 text-5xl text-white tracking-5xl'>{title}</h2>a
    <p className='mb-24 lg:mb-56 text-lg text-white text-opacity-60'>{description}</p>
    <Link className='mr-3.5 text-white font-medium underline group inline-flex items-center'>Learn more</Link>
        </div>
  )
}
