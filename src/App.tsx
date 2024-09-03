
import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import ListenAgain from './Components/ListenAgain'
import SimilarTo from './Components/SimilarTo'
import PlayList from './Components/PlayList'

function App() {
  const[agregando, setAgregando]=useState(true);

  const home = ()=>{
    return(
      <>
      <Header /> 
      <ListenAgain />
      <SimilarTo />
      </>
    )
  }
  return (
    <div>
      { agregando ? <PlayList agregando = {agregando} setAgregando={setAgregando} /> : home() }
    </div>
  )
}

export default App
