import React from 'react'
import Image from 'next/image'
import logo from '../public/logo.png'
import Link from 'next/link'
import './style.css'

const Header = () => {
  const header_links = [
    {title: 'Биржа',},
    {title: 'Ворки'},
    {title: 'Конкурсы'},
    {title: 'Создать ворк'},
    {title: 'Создать заказ'},

  ]
  return (
    <div className='w-[80%] flex items-center justify-between container pr-5 sm:'>
      <Image 
      className='w-[165px] h-[30px]'
        src={logo}        
        alt="Company Logo" 
      />
      <ul className='gap-5 items-center hidden xl:flex'>
        {
          header_links.map(item => {
            return <Link className='transition hover:text-green-500' href='/' key={item.title}  >{item.title}</Link>
          })
        }
      </ul>
      <div className="gap-2 hidden sm:flex">
        <button className='bg-[#F2F0FE] w-[171px] h-[40px] rounded-xl text-green-500'>Регистрация</button>
        <button className='bg-[#1DBF73] w-[113px] h-[40px] rounded-xl text-white border-[1px] border-green-500 hover:bg-transparent hover:text-green-500'>Войти</button>
      </div>
      <div className="gap-2 flex items-center sm:hidden">
        <Link href='/' className='text-green-500'>Регистрация</Link>
        <Link href='/' className='text-black'>Войти</Link>
      </div>
    </div>
  )
}

export default Header
