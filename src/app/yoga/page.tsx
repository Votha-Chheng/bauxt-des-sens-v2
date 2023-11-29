import React, { FC } from 'react'
import YogaScreen from './YogaScreen'
import Head from 'next/head'

const YogaPage: FC = () => {
  return (
    <>      
      <Head>
        <title>Baux't des sens | Initiation au yoga à domicile Arles, Camargue & Alpilles</title>
      </Head>
      <YogaScreen/>
    </>
  )
}

export default YogaPage