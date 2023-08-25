type AppProps = {
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleSetTimer: Function;
};

export const Setting = ({ handleSetTimer }: AppProps) => {

    const validateValue = (value: string) => {
        console.log(value);
        handleSetTimer(Number(value))
    }

    return <select 
        className="
            select 
            select-warning 
            w-full 
            max-w-xs
        " 
        onChange={(e) => validateValue(e.target.value)}
    >
        <option id='t5' value="5">05:00 Minutos</option>
        <option id='t10' value="10">10:00 MInutos</option>
        <option id='t15' value="15">15:00 Minutos</option>
        <option id='t20' value="20">20:00 Minutos</option>
        <option id='t30' value="30">30:00 Minutos</option>
    </select>
}
