import { servPrices } from "../utility/datas";
import PriceItemList from "./PriceItemList";
import useTitleChange from "../utility/useTitleChange";

function Price() {
    useTitleChange("Geringer János - Lakásfelújítási munkálatok árai");

    const titles = Object.keys(servPrices);   

    return (
        <section className="bg-gradient-to-r from-zinc-700 via-zinc-400 to-slate-200 flex flex-row flex-wrap justify-center gap-40 py-20">
            <div className="basis-full flex flex-col justify-center items-center gap-2">
                <p className="relative text-3xl font-extrabold text-gray-700 text-center sm:text-xl
                            before:absolute before:left-[50%] before:-translate-x-[50%] before:top-[140%] before:w-2/5 before:h-[.35rem] before:content-['']
                            before:bg-red-600">Az árak anyag nélkül értendőek !</p>
            </div>
            
            {
                titles.map((title) => {               
                    return (                        
                        <article key={ title } className="p-10 flex flex-col w-[50rem] gap-8 shadow-2xl shadow-cyan-800 rounded-b-3xl xmd:w-5/6 xsm:!w-full 2xsm:px-3">
                            <header className="flex justify-center pb-5">
                                <span className="relative text-3xl font-bold before:absolute before:left-0 before:top-[140%] before:w-2/5
                                                before:h-[.35rem] before:content-[''] before:bg-cyan-600">
                                    { title }
                                </span>
                            </header>
                            <PriceItemList priceList={ servPrices[title] } />
                        </article>                        
                    )
                })
            }
        </section>
    );
}

export default Price;