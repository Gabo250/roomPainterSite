import Card from "../utility/Card";
import PriceItemList from "./PriceItemList";

function PriceCard({ servPrices, title }) {
  return (
    <Card
      id={servPrices.id}
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
      <PriceItemList priceList={servPrices} />
    </Card>
  );
}

export default PriceCard;