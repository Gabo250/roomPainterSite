import { useEffect, useRef, useState } from "react";

/**
* Listening the current scroll position.
*
* @returns scrollY
*/
function useScroll() {
    const [scrollY, setScrollY] = useState(window.scrollY);
    const timeOutID = useRef();

    useEffect(() => {
        const handleScroll = () => {
            timeOutID.current = setTimeout(() => {                
                setScrollY(window.scrollY);
            }, 200)        
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeOutID);
        };
    }, [scrollY]);

    return scrollY;
}

export default useScroll;