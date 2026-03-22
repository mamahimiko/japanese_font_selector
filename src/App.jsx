import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {

  const [page, setPage] = useState(null)

  return (
    <>
      <Header updateFunction={setPage} />
      <Main page={page} />
      <Footer />
    </>
  )
}

export default App
