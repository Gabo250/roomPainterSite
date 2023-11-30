import { useEffect, useRef, useState } from "react";

/**
* Creates a timer that changes a boolean flag at a given interval
*
* @param interval the given interval
*
* @returns boolean flag
*/
function useTimer(interval) {
    const [ tick, setTick ] = useState(() => { return true });
    const timerInterval = useRef();

    useEffect(() => {
        timerInterval.current = setInterval(() => { setTick(prev => !prev) }, interval);

        return () => { clearInterval(timerInterval.current); }
    }, [interval]);

    return tick;
}

export default useTimer;