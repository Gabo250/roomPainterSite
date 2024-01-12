import { useRef } from "react";
import useViewBox from "../hooks/useViewBox";


function PriceItem({ name, price }) {
    const itemRef = useRef();
    const inViewBox = useViewBox(itemRef);
    const supTag = price.includes('nm') ? <sup>2</sup> : '';

    return (
      <div
        ref={itemRef}
        className={`flex flex-row items-center justify-between text-white
                                        ${
                                          inViewBox
                                            ? "animate-fade-in"
                                            : "opacity-0"
                                        }`}
      >
        <h3 className="whitespace-nowrap italic xsm:whitespace-normal xsm:break-words">
          {name}
        </h3>
        <span className="mt-1 h-1 w-full border-t-2 border-dotted border-zinc-400" />
        <span className="whitespace-nowrap font-semibold [text-shadow:0px_0px_4px_#ffffff]">
          {price.replace("nm", "m")}
          {supTag}
        </span>
      </div>
    );
}

export default PriceItem;