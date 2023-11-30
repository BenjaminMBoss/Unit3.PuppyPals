import './App.css'
import { puppyList } from './data'
import { useState } from 'react'

function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  
  const featuredPup = puppies.find((puppy)=> puppy.id === featPupId)

  return (
   <div>
    <h1>Our Puppies:</h1>
      {
        puppies.map((puppy) => {
          return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>
        })
      }
      
      { featPupId && (
        <div>
        <h1> Selected Puppy: </h1>
        <h2>{featuredPup.name}</h2>
        <ul>
          <li>Age: {featuredPup.age}</li>
          <li>Email: {featuredPup.email}</li>
        </ul>
        </div>
      )}
   </div>
  )
}

export default App
