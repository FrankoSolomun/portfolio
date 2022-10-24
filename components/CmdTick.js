import { useEffect, useState } from "react";

const CmdTick = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
           setSeconds(seconds => seconds + 1);
        }, 500);
        return () => clearInterval(interval);
      }, []);
    return (
        <span className="font-bold">{seconds%2===0?'_':''}</span>
    )
}

export default CmdTick