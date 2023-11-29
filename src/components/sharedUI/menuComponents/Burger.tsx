import Image from 'next/image'
import React, { Dispatch, FC, SetStateAction } from 'react'

type BurgerProps = {
  burger: boolean
  setBurger: Dispatch<SetStateAction<boolean>>
}

const Burger: FC<BurgerProps> = ({burger, setBurger}) => {
  return (
    <>
      {
        burger
        ?
        <Image src="/images/burger-menu.svg" width={30} height={30} alt="burger-menu" className="cursor-pointer" onClick={()=> setBurger(false)} />
        :
        <Image src="/images/close.svg" width={30} height={30} alt="burger-menu" className="cursor-pointer" onClick={()=> setBurger(true)} />
      }
    </>
  )
}

export default Burger