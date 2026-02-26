import { useEffect, useState } from "react";
import "./index.css"
import car from "./assets/image/car.png"

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerWidth > 740 ? window.innerHeight*2: window.innerHeight*0.5;
      const percent = Math.min(scrollTop / maxScroll, 1);
      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return(
    <>
    <div className="h-[150vh] md:h-[100vh] lg:h-[300vh]">
  <div className="sticky top-0 h-screen overflow-hidden bg-white">
    <div className="bg-zinc-300 w-screen h-screen fixed flex items-center">
      <div className="box bg-white w-screen text-center  h-64 ">
        <div
  style={{
    width: `${progress * 100}%`
  }}
  className="absolute bg-green-500"
>
       <h1
  className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-6xl lg:text-9xl text-white text-center font-bold "
>
  WELCOME ITZ FIZZ
</h1>

        <img  className="left-0 h-64 z-10"  style={{
  transform: `translateX(${
    window.innerWidth > 740 ? progress * 1400 : progress * 600
  }px)`,
  minWidth: `${
    window.innerWidth > 740 ? "300px": "50px"
  }`,
  minHeight: `${
    window.innerWidth > 740 ? "300px": "50px"
  }`
}} alt="car"  src={car}/>
        </div></div></div>
    </div>
    </div>
    </>
  )
}

export default App
