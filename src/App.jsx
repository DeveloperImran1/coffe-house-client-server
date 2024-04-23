import { useState } from 'react'

import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './Components/CoffeeCard';

function App() {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee)
  console.log(loadedCoffee)

  return (
    <>
     
      <h1>Total Coffee: {coffees.length} </h1>
      <div className='grid grid-cols-2 gap-6'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee = {coffee} setCoffees={setCoffees} coffees={coffees
          } ></CoffeeCard> )
        }
      </div>
  
    </>
  )
}

export default App
