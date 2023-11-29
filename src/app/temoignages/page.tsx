import Head from 'next/head'
import React, { FC } from 'react'
import TemoignagesScreen from './TemoignagesScreen'

const TemoignagePage: FC = () => {  
  return (
    <>
      <Head>
        <title>Baux't des sens | Témoignages, partenaire, livre d'or</title>
      </Head>
      <TemoignagesScreen/>
    </>
  )
}

export default TemoignagePage