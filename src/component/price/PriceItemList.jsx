import getObjKeysValues from "../utility/GetObjKeysValues";
import PriceItem from "./PriceItem";

function PriceItemList({ priceList }) {
    const [objKeys] = getObjKeysValues(priceList);
    objKeys.shift();

    return (
      <>
        {objKeys.map((key) => {
          return <PriceItem key={key} name={key} price={priceList[key]} />;
        })}
      </>
    );
}

export default PriceItemList;