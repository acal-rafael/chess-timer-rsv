import React from 'react'


type AppProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleSetTimer: Function;
};


export const Setting = ({ handleSetTimer }: AppProps) => {



    return <select className="select select-warning w-full max-w-xs" onChange={(e) => handleSetTimer(Number(e.target.value))}>
        <option disabled selected>Escolha o tempo da partida</option>
        <option id='05:00' value="">05:00 Minutos</option>
        <option id='10:00'>10:00 MInutos</option>
        <option id='15:00'>15:00 Minutos</option>
        <option id='20:00'>20:00 Minutos</option>
        <option id='30:00'>30:00 Minutos</option>
    </select>
}



// const Setting = ({ handleSetTimer } : { handleSetTimer: React.Dispatch<React.SetStateAction<number>> }) => {

   
//   }