import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./index.css"
import car from "./assets/image/car.png"

function App() {
  return(
    <>
    <main className="bg-zinc-300 w-screen h-screen fixed flex items-center">
      <div className="box bg-white w-screen h-64 "><h1 className="text-8xl text-center text-white "> W E L C O M E I T Z F I Z Z</h1><img  alt="car" className="onScroll-Animation h-full w-80 bg-[linear-gradient(to_right,#22c55e_40px,white_40px)]" src={car}/></div>

    </main>
    </>
  )
}

export default App
