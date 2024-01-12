import useMetaDataChange from "../hooks/useMetaDataChange";
import { metaDatas, paperHangDatas } from "../utility/datas";
import ServiceCard from "../service/ServiceCard";

const META = metaDatas.paperHanging;

function PaperHanging() {
    useMetaDataChange(META.description, META.title, window.location.href);

    return (
      <ServiceCard data={paperHangDatas} name={"Tapétázás"} id={"tapetazas"} />
    );
}

export default PaperHanging;