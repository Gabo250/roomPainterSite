import Card from "../utility/Card";
import { chooseMeTexts } from "../utility/datas";

function Marketing() {
  return (
    <section className="relative flex flex-row items-center justify-end gap-20 py-11 pr-12 lg:pr-0 2xl:flex-col xsm:gap-y-20">
      <article className="relative mr-40 w-[700px] lg:!mr-0 xl:mr-10 2xl:w-1/2 xmd:!w-11/12">
        <p className="text-justify leading-7">
          Ha szép és minőségi munkára van szükséged, ne késlekedj lépj
          kapcsolatba velem. Örömmel segítek megvalósítani otthonod vagy üzleted
          elképzeléseit. Vedd fel velem a kapcsolatot, és kérd az akár ingyenes
          felmérést és árajánlatot!
        </p>
      </article>
      <div className="flex flex-row gap-20 lg:flex-wrap lg:justify-center xsm:flex-col">
        {chooseMeTexts.map((text) => {
          return (
            <Card
                key={text.name}
                variant="vertical"
                className="relative w-60 gap-3 rounded-[20px] border-y-[1px] border-solid border-gray-300 px-4 py-4
                            before:absolute before:-top-[5px] before:left-[50%] before:h-[5px] before:w-[11rem]
                            before:-translate-x-[50%] before:bg-white
                            after:absolute after:-bottom-[5px] after:left-[50%] after:h-[5px]
                            after:w-[11rem] after:-translate-x-[50%] after:bg-white"
            >
                <h3 className="text-[1.25rem] font-bold text-lime-700">
                    {text.name}
                </h3>
                <p className="leading-7">{text.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export default Marketing;
