import React from 'react'


const Button = ({title, variant, padding}) => {
  return (
    <button className={`w-full ${padding} hover:opacity-80 ${variant==="contained"? "bg-green-600 text-white": "bg-white text-green-700 border-2 border-green-700"} rounded-full font-medium grid place-items-center`} variant={variant}>{title}</button>
  )
}
//contained outlined

export default Button