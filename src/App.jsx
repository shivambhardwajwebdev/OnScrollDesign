import { useEffect, useState } from "react";
import "./index.css"
import car from "./assets/image/car.png"

function App() {
  const [progress, setProgress] = useState(0.02);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerWidth > 768 ? window.innerHeight * 2 : window.innerHeight * 0.5;
      const percent = Math.min(scrollTop / maxScroll, 1);
      setProgress(percent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="hero h-[150vh] md:h-[300vh] lg:h-[300vh] ">


        <div className="sticky top-0 h-screen overflow-hidden bg-white ">

          <div className="bg-zinc-300 w-screen h-screen fixed flex-col items-center">
            <div className="box1 flex-col h-60 w-screen gap-[20px] md:gap-[40px] lg:gap-[60px]" >
              <div className="box-1  bg-yellow-400 text-black" style={{ opacity: `${progress > 0.5 ? "1" : "0"}` }} ><h1>80%</h1><p>Increase in Delivery Accuracy</p></div>
              <div className="box-2 box-1  bg-green-400 text-black" style={{ opacity: `${progress > 0.7 ? "1" : "0"}` }}><h1>30%</h1><p>Increase in Delivery Time</p></div>
            </div>
            <div className="box bg-white  w-screen text-center  " style={{
              minHeight: `${window.innerWidth > 768 ? "260px" : "250px"
                }`
            }}>
              <div
                style={{
                  width: `${progress * 100}%`
                }}
                className="background absolute bg-green-500"
              >
                <h1
                  className="heading fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl lg:text-9xl text-white text-center font-bold "
                  style={{
                    opacity: `${progress
                      }`
                  }}>
                  WELCOME ITZ FIZZ
                </h1>

                <img className="left-0 z-10" style={{
                  transform: `translateX(${window.innerWidth > 768 ? progress * 1450 : progress * 400
                    }px)`,
                  minWidth: `${window.innerWidth > 768 ? "260px" : "150px"
                    }`,
                  maxWidth: `${window.innerWidth > 768 ? "260px" : "150px"
                    }`,
                  minHeight: `${window.innerWidth > 768 ? "260px" : "250px"
                    }`
                }} alt="car" src={car} />
              </div>

            </div><div className="box2 h-64 gap-[20px] md:gap-[40px] lg:gap-[60px]" style={{ opacity: `${progress > 0.5 ? "1" : "0"}` }}>
              <div className="box-3   bg-blue-400 text-black" style={{ opacity: `${progress > 0.6 ? "1" : "0"}` }}><h1>36%</h1><p>Decrease in Delivery Cost</p></div>
              <div className="box-4  bg-orange-400 text-black" style={{ opacity: `${progress > 0.8 ? "1" : "0"}` }}><h1>78%</h1><p>Decrease in Return Request</p></div></div></div>
        </div>
      </div>
    </>
  )
}

export default App
