import getObjKeysValues from "../utility/GetObjKeysValues";
import { servPrices } from "../utility/datas";
import PriceCard from "./PriceCard";

const [TITLES] = getObjKeysValues(servPrices);

function PriceList() {
    return ( 
        <>
            {
                TITLES.map((title) => {
                    return <PriceCard servPrices={servPrices[title]} title={title} />            
                })
            } 
        </>        
    );
}

export default PriceList;