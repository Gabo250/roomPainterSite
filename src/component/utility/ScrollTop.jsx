import { useEffect } from "react";
import { useLocation } from "react-router-dom"

function ScrollTop() {
    const path = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [path]);

    return null
}

export default ScrollTop;