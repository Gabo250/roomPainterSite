import { useState } from "react";
import { experationDate, getCookie, setCookie } from "../utility/cookieUtility";

function Cookie() {
  const [visible, setVisible] = useState(() => {
    return getCookie("accepted") ? false : true;
  });

  const handleOkClick = () => {
    setCookie("accepted", true, experationDate.YEAR);
    setVisible(false);
  };

  return (
    <div
      className={`fixed bottom-10 left-[50%] z-10 flex w-[35rem] -translate-x-[50%] flex-wrap items-center justify-evenly
                        gap-4 rounded-lg bg-slate-800 bg-opacity-50 p-3 backdrop-blur-sm
                        ${
                          visible
                            ? "opacity-100"
                            : "animate-hide-on opacity-0 transition-opacity duration-500 [animation-fill-mode:forwards]"
                        }
                        sm:w-full`}
    >
      <span className="text-center text-sm font-semibold text-slate-200">
        Az oldal böngészésével elfogadod, hogy az oldal sütiket használ.
      </span>
      <button
        disabled={!visible}
        onClick={handleOkClick}
        className="rounded-xl bg-green-400 bg-opacity-40 px-5 py-1 text-sm transition-all duration-500 hover:scale-110 hover:bg-green-300"
      >
        OK
      </button>
    </div>
  );
}

export default Cookie;
