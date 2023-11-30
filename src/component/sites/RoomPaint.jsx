import useMetaDataChange from "../hooks/useMetaDataChange";
import { metaDatas, paintingDatas } from "../utility/datas";
import ServiceCard from "../service/ServiceCard";

const META = metaDatas.paint;

function RoomPaint() {    
    useMetaDataChange(META.description, META.title, window.location.href)

    return (
        <ServiceCard data={ paintingDatas } name={ "Szobafestés" } id={ "szobafestes" } />
    );
}

export default RoomPaint;