import React, { useState } from 'react';

function App() {

  const [timerRed, setTimerRed] = useState(0);
  const [timerBlue, setTimerBlue] = useState(0);

  return (
    <>
      <div 
        className="
          w-screen
          h-screen
          flex


        "
      >
        <div
          className="
            bg-red-400
            w-[50%]
            h-screen
            flex
            justify-center
            items-center
          "
          onClick={()=>{setTimerRed(prev => prev + 1)}}
        >
          <div
            className="
            text-6xl
            font-medium
            text-white
          "
          >
            <p>{timerRed}</p>
          </div>
        </div>

        <div
          className="
            bg-blue-400
            w-[50%]
            h-screen 
            flex
            justify-center
            items-center
          "
          onClick={()=>{setTimerBlue(prev => prev + 1)}}
        >
          <div
            className="
              text-6xl
              font-medium
              text-white
            "
          >
            <p>{timerBlue}</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
