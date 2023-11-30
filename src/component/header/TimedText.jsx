import { useEffect, useRef } from "react";
import useTimer from "../hooks/useTimer";


/**
* Creates an element that changes the given text at a given interval
*
* @param text The given text array
* @param interval The given interval
*
* @returns styled h1 element
*/
function TimedText({ text, interval }) {
    const tick = useTimer(interval);
    const cpyText = useRef();

    useEffect(() => {
        if (!tick) {
            cpyText.current = text.shift();
            text.push(cpyText.current);
        }
    }, [tick, text])

    return (
        <h1 className={ `absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] uppercase text-[4rem] font-bold text-white 
                         backdrop-blur-[5px] p-6 rounded-2xl sm:text-[1.5rem] ${ tick ? 'animate-fade-in' : 'animate-fade-out [animation-fill-mode:forwards]' }` }>
            { text[0] }
        </h1>
    );
}

export default TimedText;