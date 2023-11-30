import { useEffect } from "react";
import { useLocation } from "react-router-dom"

/**
* Sets the scroll on the top when the URL is changed
*
* @returns null
*/
function ScrollTop() {
    const path = useLocation(); 

    useEffect(() => {
        let to = 0;
        if(path.hash.includes('#')) {
            to = document.getElementById(path.hash.slice(1)).offsetTop;
        }

        window.scrollTo({ top: to, behavior: "smooth" });
    }, [path]);
}

export default ScrollTop;