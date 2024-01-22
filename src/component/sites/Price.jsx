import { metaDatas } from "../utility/datas";
import { useRef } from "react";
import useMetaDataChange from "../hooks/useMetaDataChange";
import useViewBox from "../hooks/useViewBox";
import PriceList from "../price/PriceList";

const META = metaDatas.prices;

function Price() {
  const lineRef = useRef();
  const lineInViewBox = useViewBox(lineRef);

  useMetaDataChange(META.description, META.title, window.location.href);

  return (
    <section className="flex flex-row flex-wrap justify-center gap-40 bg-gradient-to-r from-zinc-700 via-zinc-400 to-slate-200 py-20">
      <div className="flex basis-full flex-col items-center justify-center gap-2">
        <p
          ref={lineRef}
          className={`relative text-center text-3xl font-extrabold text-gray-700 before:absolute before:left-[60%]
                      before:top-[110%] before:h-[.35rem] before:w-2/5 before:bg-red-600 before:content-[''] sm:text-[20px]
                      2xsm:!text-[16px]
                      ${
                        lineInViewBox
                            ? "before:origin-right before:scale-x-100 before:transition-transform before:duration-[2.5s]"
                            : "before:scale-x-0"
                      }`}
        >
          Az árak az anyagot nem tartalmazzák!
        </p>
      </div>

      <PriceList />
    </section>
  );
}

export default Price;
