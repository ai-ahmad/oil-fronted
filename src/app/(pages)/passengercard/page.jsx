import ConstructionCard from '@/app/components/CardFiltration/ConstructionCard'
import PassengerCars from '@/app/components/CategoryCard/PassengerCars'
import TrucksCard from '@/app/components/CategoryCard/TrucksCard'
import Header from '@/app/components/Header/Header'
import React from 'react'

const Page = () => {
  return (
   <>
    <Header/>
    <main>

    <section className='container mx-auto px-4 py-12'>
    <PassengerCars/> 
    </section>
    </main>
    </>
  )
}

export default Page
