import { useEffect, useState } from "react";
import useScroll from "./useScroll";


/**
* Checks a react element to if it is in the viewport
*
* @param element the given react element's ref
*
* @returns inViewBox
*/
function useViewBox(element) {
    const [inViewBox, setInViewBox] = useState(false);
    const scrollY = useScroll();
    const OFFSET = 20;

    useEffect(() => {
        if (!element.current){
            return;
        }

        const rect = element.current.getBoundingClientRect();          
        if(Math.abs(rect.top) + OFFSET < window.innerHeight && rect.bottom - OFFSET > 0 && !inViewBox) {                           
            setInViewBox(true);                
        }
    }, [scrollY, inViewBox, element]);

    return inViewBox;
}

export default useViewBox;