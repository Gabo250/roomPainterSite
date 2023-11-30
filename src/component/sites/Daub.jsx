import useMetaDataChange from "../hooks/useMetaDataChange";
import { daubDatas, metaDatas } from "../utility/datas";
import ServiceCard from "../service/ServiceCard";

const META = metaDatas.daub;

function Daub() {
    useMetaDataChange(META.description, META.title, window.location.href);

    return (
       <ServiceCard data={ daubDatas } name={ "Mázolás" } id={ "mazolas" } />
    );
}

export default Daub;