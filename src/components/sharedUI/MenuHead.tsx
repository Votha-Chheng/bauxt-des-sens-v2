'use client'

import { karla } from "@/fonts/karla"
import { mrsDelafield } from "@/fonts/mrsDelafield"
import { useWindowSize } from "@uidotdev/usehooks"
import Link from "next/link"
import { FC, MouseEvent, useState } from "react"
import Burger from "./menuComponents/Burger"
import DropdownMenu from "./menuComponents/DropdownMenu"
import { menuItems } from "@/datas/menuItems"
import { MenuItem } from "@/@types/menuItem"

const MenuHead: FC = () => {

  const [burger, setBurger] = useState(true)
  const [itemToDropDown, setItemToDropDown] = useState<string>('')
  const [dropdownDisplayed, setDropdownDisplayed] = useState<string>('')

  const { width } = useWindowSize()

  return (
    <>
      <DropdownMenu display={!burger} setBurger={setBurger}/>
      <nav role="navigation" aria-label="navigation site Baux't des sens" className="w-full h-14 flex justify-between items-center bg-main-theme fixed z-50 py-2.5 px-10 border-b">
        <Link href="/">
          <h1 className={`translate-y-1 tracking-wider text-white text-3xl ${mrsDelafield.className}`}>Baux't des sens</h1>
        </Link>
        {
          width && width<900
          ?
          <Burger burger={burger} setBurger={setBurger} />
          :
          <ul className={`${karla.className} text-white tracking-wide text-lg flex justify-center list-none pl-0 m-0 gap-x-8`}>
            {
              menuItems.map((item: MenuItem, index: number)=> (
                <li 
                  id={index.toString()} 
                  key={index} 
                  className={`hover:text-yellow-600 transition-colors duration-150 ease-out relative`} 
                  onMouseEnter={(event: MouseEvent)=> {
                    setItemToDropDown(event.currentTarget.id)
                    setDropdownDisplayed(event.currentTarget.id)
                  }}
                  onMouseLeave={(event: MouseEvent)=> setItemToDropDown('')}
                >
                  <Link href={`/${item.path}`}>{item.nom}</Link>
                  {
                    item.dropdown && (itemToDropDown === index.toString() || dropdownDisplayed === index.toString()) &&
                    <div 
                      id={index.toString()} 
                      key={item.nom}
                      className="absolute w-[150%] bg-white text-main-theme top-8 left-1/2 -translate-x-1/2 border border-black" 
                      onMouseEnter={(event: MouseEvent)=> setDropdownDisplayed(event.currentTarget.id)}
                      onMouseLeave={(event: MouseEvent)=> setDropdownDisplayed('')}
                    >
                      {
                        item.dropdown.map((subItem: MenuItem, index: number)=> (
                          <div className={`${karla.className} font-bold text-center my-2 text-base hover:text-yellow-600`} key={index}>
                            <Link href={`/${item.path}/${subItem.path}`}>{subItem.nom}</Link>
                          </div>
                        ))
                      }
                    </div>
                  }
                </li>
              ))
            }
          </ul>
        }
      </nav>
    </>
  )
}

export default MenuHead
