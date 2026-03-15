import { useState } from 'react'
import './App.css'
import Header from './compornents/Header'
import Footer from './compornents/Footer'
import FontSelector from './compornents/FontSelector'
import FontInfoPage from './compornents/FontInfoPage'

function App() {

  const [page, setPage] = useState(null)

  return (
    <>
      <Header updateFunction={setPage} />
      {!page && <FontSelector />}
      {page === "fontInfo" && <FontInfoPage />}
      <Footer />
    </>
  )
}

export default App
