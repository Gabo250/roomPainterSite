import { servPrices, metaDatas } from "../utility/datas";
import PriceItemList from "./PriceItemList";
import { useRef } from "react";
import useViewBox from "../utility/useViewBox";
import useMetaDataChange from "../utility/useMetaDataChange";
import Card from "../utility/Card";

const META = metaDatas.prices;
const TITLES = Object.keys(servPrices);

function Price() {
    const lineRef = useRef();
    const lineInViewBox = useViewBox(lineRef);
    
    useMetaDataChange(META.description, META.title, window.location.href);    

    return (
        <section className="bg-gradient-to-r from-zinc-700 via-zinc-400 to-slate-200 flex flex-row flex-wrap justify-center gap-40 py-20">
            <div className="basis-full flex flex-col justify-center items-center gap-2">
                <p ref={ lineRef } className={`relative text-3xl font-extrabold text-gray-700 text-center sm:text-sm
                            before:absolute before:left-[60%] before:top-[110%] before:w-2/5 before:h-[.35rem] before:content-['']
                            before:bg-red-600 ${ lineInViewBox ? "before:transition-transform before:duration-[2.5s] before:origin-right before:scale-x-100" : "before:scale-x-0" }`}>Az árak az anyagot nem tartalmazzák!</p>
            </div>
            
            {
                TITLES.map((title) => {              
                    return (
                        <Card key={ title } variant='vertical' shadow='xl2' className="p-10 w-[50rem] gap-8 shadow-cyan-800 rounded-b-3xl xmd:w-5/6 xsm:!w-full 2xsm:px-3">
                            <header className="flex justify-center pb-5">
                                <h2 className="relative text-3xl font-bold before:absolute before:left-0 before:top-[140%] before:w-2/5
                                                before:h-[.35rem] before:content-[''] before:bg-cyan-600">                                
                                    { title + ' árak' }                                
                                </h2>
                            </header>
                            <PriceItemList priceList={ servPrices[title] } />
                        </Card>                       
                    );
                })
            }
        </section>
    );
}

export default Price;