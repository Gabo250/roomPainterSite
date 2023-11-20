import { useEffect, useRef, useState } from "react";

const OFFSET = '-20px';

/**
* Checks a react element to if it is in the viewport
*
* @param element the given react element's ref
*
* @returns inViewBox - boolean
*/
function useViewBox(element) {
    const [inViewBox, setInViewBox] = useState(() => { return false });
    const obsRef = useRef(null);

    useEffect(() => {              
        obsRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setInViewBox(true);
                }
            })
        }, { rootMargin: OFFSET });
    }, []);

    useEffect(() => {
        obsRef.current.observe(element.current);        

        return () => {
            obsRef.current.disconnect();
        }
    }, [element]);

    return inViewBox;
}

export default useViewBox;