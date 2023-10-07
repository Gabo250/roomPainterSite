import { useEffect, useRef, useState } from "react";

/**
* Creates a timer that changes a boolean flag at a given interval
*
* @param interval the given interval
*
* @returns flag
*/
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