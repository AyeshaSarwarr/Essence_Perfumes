import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import CartNumberProvider from "./context/cartContext"
import { useState } from "react"

function App() {
  const [ count, setCount ] = useState(0)

  const increaseNumber = () => {

    
      setCount(count + 1)
    
  }

  const decreaseNumber = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return(
    <main>
      <CartNumberProvider value={{ count, increaseNumber, decreaseNumber }}>

        <Header/>
        <div className="pt-18"></div>
        <Outlet/>
        <Footer/>

      </CartNumberProvider>
    </main>
  )
}

export default App
