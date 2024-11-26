import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./Components/CoffeeCard"
import { useState } from "react"

function App() {
const loadercoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadercoffees)

  return (
    <div className="w-11/12 mx-auto ">

      <h1 className='text-6xl text-center text-pink-600'>cold cold hot coffee : {coffees.length}</h1>
      <div className="grid grid-cols-2 gap-4 mt-20 p-4">
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffees={coffees} setCoffees={setCoffees} coffee={coffee}></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
