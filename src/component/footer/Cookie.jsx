import { useState } from "react";
import { experationDate, getCookie, setCookie } from "../utility/cookieUtility";

function Cookie() {
    const [visible, setVisible] = useState(() => { return getCookie("accepted") ? false : true });

    const handleOkClick = () => {
        setCookie("accepted", true, experationDate.WEEK);
        setVisible(false);
    }

    return (
        <div className={`bg-slate-800 bg-opacity-50 backdrop-blur-sm w-[35rem] fixed flex flex-wrap gap-4 justify-evenly items-center
                        left-[50%] -translate-x-[50%] bottom-10 p-3 rounded-lg z-10 ${ visible ? "opacity-100" : "opacity-0 transition-opacity duration-500 !-z-[10]" }
                        sm:w-full`}>
            <span className="text-sm text-slate-200 text-center font-semibold">Az oldal böngészésével elfogadod, hogy az oldal sütiket használ.</span>
            <button disabled={ !visible } onClick={ handleOkClick } className="py-1 px-5 bg-green-400 bg-opacity-40 text-sm rounded-xl transition-all duration-500 hover:scale-110 hover:bg-green-300">OK</button>
        </div>
    );
}

export default Cookie;