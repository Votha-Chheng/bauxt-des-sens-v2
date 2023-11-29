import { MenuItem } from '@/@types/menuItem'
import { menuItems } from '@/datas/menuItems'
import { karla } from '@/fonts/karla'
import Link from 'next/link'
import React, { Dispatch, FC, SetStateAction } from 'react'

type DropdownMenuProps = {
  display: boolean
  setBurger: Dispatch<SetStateAction<boolean>>
}

const DropdownMenu: FC<DropdownMenuProps> = ({ display, setBurger }) => {
  return (
    <ul
      className={`${karla.className} transition-all duration-300 text-lg py-2 text-white fixed bg-main-theme top-14 flex flex-col gap-y-2 ml-0 items-center w-full z-10 border-b border-white`}
      style={{transform: `${display ? 'translateY(0)':'translateY(-100%)'}`, visibility: `${display ? 'visible':'hidden'}`}}
    >
      {
        menuItems.map((item: MenuItem, index: number)=> (
        <li key={index}>
          <Link href={`/${item.path}`} onClick={()=>setBurger(true)}>{item.nom}</Link>
        </li>
        ))
      }
    </ul> 
  )
}

export default DropdownMenu