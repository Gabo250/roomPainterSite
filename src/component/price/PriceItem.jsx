import { useRef } from "react";
import useViewBox from "../utility/useViewBox";

function PriceItem({ name, price }) {
    const itemRef = useRef();
    const inViewBox = useViewBox(itemRef);

    return (
        <div ref={ itemRef } className={`flex flex-row justify-between items-center text-white
                                        ${inViewBox ? "animate-fade-in" : "opacity-0"}`}>
            <h2 className="whitespace-nowrap italic xsm:break-words xsm:whitespace-normal">{ name }</h2>
            <span className="h-1 w-full mt-1 border-t-2 border-dotted border-zinc-400" />
            <span className="whitespace-nowrap font-semibold [text-shadow:0px_0px_4px_#ffffff]">{ price }</span>
        </div>
    );
}

export default PriceItem;