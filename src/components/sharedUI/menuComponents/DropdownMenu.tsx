'use client'

import { MenuItem } from '@/@types/menuItem'
import { menuItems } from '@/datas/menuItems'
import { karla } from '@/fonts/karla'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import { FaSquareCaretRight } from "react-icons/fa6";

type DropdownMenuProps = {
  display: boolean
  setBurger: Dispatch<SetStateAction<boolean>>
}

const DropdownMenu: FC<DropdownMenuProps> = ({ display, setBurger }) => {
  const [subMenu, setSubMenu] = useState<boolean>(false)
  const [start, setStart] = useState<boolean>(false)

  const router = useRouter()

  useEffect(()=> {
    !display && setSubMenu(false)
  }, [display, setSubMenu])

  useEffect(()=> {
    setStart(true)
  }, [])

  if(!start) return null

  return (
    <ul
      className={`${karla.className} transition-all duration-300 text-lg py-2 text-white fixed bg-main-theme top-14 flex flex-col gap-y-2 ml-0 items-center w-full z-50 border-b border-white`}
      style={{transform: `${display ? 'translateY(0)':'translateY(-100%)'}`, visibility: `${display ? 'visible':'hidden'}`}}
    >
      {
        menuItems.map((item: MenuItem, index: number)=> (
        <li className='relative' key={index}>
          <Link href={`/${item.path}`} onClick={()=>setBurger(true)}>{item.nom}</Link>
          {
            item.dropdown &&
            <div className='absolute top-1/4 -right-10' onClick={()=> setSubMenu(prev=> !prev)} >
              <FaSquareCaretRight className={`${subMenu ? "rotate-90":"rotate-0"} transition-transform duration-300`} />
            </div>
          }
          {
            subMenu && item.dropdown &&
            <ul className='absolute bg-white z-50 px-3 w-[220px] border-main-theme border'>
              {
                item.dropdown.map((subItem: MenuItem, index: number)=> (
                  <li 
                    key={index} 
                    className='text-main-theme my-2.5 font-bold' 
                    onClick={()=>{
                      router.push(`/${item.path}/${subItem.path}`)
                      setSubMenu(false)
                      setBurger(true)
                    }}>
                    <Link href={`/${item.path}/${subItem.path}`} >{subItem.nom}</Link>
                  </li>
                ))

              }

            </ul>
          }
        </li>
        ))
      }
    </ul> 
  )
}

export default DropdownMenu