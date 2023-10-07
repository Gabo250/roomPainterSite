import { chooseMeTexts } from "../utility/datas";

function Marketing() {
    return (
        <section className="relative py-11 pr-12 flex flex-row justify-end items-center gap-20 2xl:flex-col lg:pr-0 xsm:gap-y-20">
            <article className="relative w-[700px] mr-40 xl:mr-10 lg:!mr-0 2xl:w-1/2 xmd:!w-11/12">
                <p className="text-justify leading-7">
                    Ha szép és minőségi munkára van szükséged, ne késlekedj lépj kapcsolatba velem.
                    Örömmel segítek megvalósítani otthonod vagy üzleted elképzeléseit.
                    Vedd fel velem a kapcsolatot, és kérd az akár ingyenes felmérést és árajánlatot!
                </p>
            </article>
            <div className="flex flex-row gap-20 lg:flex-wrap lg:justify-center xsm:flex-col">
                {
                    chooseMeTexts.map((text) => {
                        return (
                            <article key={ text.name } className="relative w-60 flex flex-col gap-3 border-solid border-b-[1px] border-t-[1px]
                                              border-gray-300 rounded-[20px] py-4 px-4
                                                before:absolute before:bg-white before:-top-[5px] before:left-[50%] before:-translate-x-[50%]
                                                before:h-[5px] before:w-[11rem]
                                                after:absolute after:bg-white after:-bottom-[5px] after:left-[50%]
                                                after:-translate-x-[50%] after:h-[5px] after:w-[11rem]">
                                <h2 className="text-[1.25rem] font-bold text-lime-700">{ text.name }</h2>
                                <p className="leading-7 text-justify">{ text.description }</p>
                            </article>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Marketing;