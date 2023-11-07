import PriceItem from "./PriceItem";

function PriceItemList({ priceList }) {
    const objKeys = Object.keys(priceList);

    return (
        <>
            {
                objKeys.map((key) => {
                    return <PriceItem key={ key } name={ key } price={ priceList[key] } />
                })
            }
        </>
    );
}

export default PriceItemList;