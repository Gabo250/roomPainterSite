import { servPrices, metaDatas } from "../utility/datas";
import PriceItemList from "../price/PriceItemList";
import { useRef } from "react";
import Card from "../utility/Card";
import useMetaDataChange from "../hooks/useMetaDataChange";
import useViewBox from "../hooks/useViewBox";
import getObjKeysValues from "../utility/GetObjKeysValues";

const META = metaDatas.prices;
const [TITLES] = getObjKeysValues(servPrices);

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

      {TITLES.map((title) => {
        return (
          <Card
            id={servPrices[title].id}
            key={title}
            variant="vertical"
            shadow="xl2"
            className="w-[50rem] gap-8 rounded-b-3xl p-10 shadow-cyan-800 2xsm:px-3 xsm:!w-full xmd:w-5/6"
          >
            <header className="flex justify-center pb-5">
              <h2
                className="relative text-3xl font-bold before:absolute before:left-0 before:top-[140%] before:h-[.35rem]
                                                before:w-2/5 before:bg-cyan-600 before:content-['']"
              >
                {title + " árak"}
              </h2>
            </header>
            <PriceItemList priceList={servPrices[title]} />
          </Card>
        );
      })}
    </section>
  );
}

export default Price;
