import { useEffect, useRef, useState } from "react";

function useTimer(interval) {
    const [ tick, setTick ] = useState(true);
    const timerInterval = useRef();

    useEffect(() => {
        timerInterval.current = setInterval(() => { setTick(!tick) }, interval);
        
        return () => { clearInterval(timerInterval.current); }
    }, [interval, tick]);

    return tick;
}

export default useTimer;