import useMetaDataChange from "../hooks/useMetaDataChange";
import { metaDatas, plasterBoardDatas } from "../utility/datas";
import ServiceCard from "../service/ServiceCard";

const META = metaDatas.plasterBoarding;

function PlasterBorading() {
    useMetaDataChange(META.description, META.title, window.location.href);

    return (
        <ServiceCard data={ plasterBoardDatas } name={ "Gipszkartonozás" } id={ "gipszkartonozas" } />
    );
}

export default PlasterBorading;