/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Setting } from './components/Setting';


// type showSettingProps = {
//   showSetting?: boolean;
//   setShowSetting?: React.Dispatch<React.SetStateAction<boolean>>;

// }

function App() {

  const [timerRed, setTimerRed] = useState(0);
  const [timerBlue, setTimerBlue] = useState(0);
  // const {showSetting, setShowSetting} = useState<boolean>(true);

  const handleSetTimer = (value: number) => {
    setTimerRed(Number(value))
    setTimerBlue(Number(value))
  }

  return (
    <>       
      <Setting handleSetTimer={handleSetTimer} />
      
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
