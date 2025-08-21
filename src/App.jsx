


import { useState } from 'react'
import Search from './components/Search'

const App = () => {

  const[searchTerm,setSearchTerm]= useState('');

  return (
    <main>
  <div  className='pattern'/>
  <div className="wrapper">
    <header>
      <img src="./hero.png" alt="hero banner"/>
      <h1>Find <span className='text-gradient'>movies</span> with Ease</h1>
    </header>

<Search searchTerm={searchTerm} setSearchTerm= {setSearchTerm}/>

<h1 className='text-pink'>{searchTerm}</h1>




  </div>
    </main>
  )
}

export default App