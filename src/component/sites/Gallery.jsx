import { galleryImages, metaDatas } from "../utility/datas";
//import TypeCard from "./TypeCard";
import { useParams } from "react-router-dom";
import LoadImages from "../gallery/LoadImages";
import useMetaDataChange from "../hooks/useMetaDataChange";


const META = metaDatas.gallery;

/**
 * It creates a gallery for images
 * 
 * @returns gallery element
 */
function Gallery() {
    const params = useParams();
    //const objKeys = Object.keys(galleryImages);

    useMetaDataChange(META.description, META.title, window.location.href);

    if (params['*'] !== '') {
        return <LoadImages images={ galleryImages[params['*']] } titleName={ params['*'] } />
    }
    else {
        return (
          <section className="flex flex-row flex-wrap justify-center bg-gradient-to-r from-zinc-700 via-zinc-400 to-slate-200 px-10 py-20">
            <h2 className="text-4xl font-semibold">Feltöltés alatt.</h2>
            {/*objKeys.map((name) => {                    
                        return <TypeCard key={ name } name={ name } images={ galleryImages[name] } />
                    })*/}
          </section>
        );
    }   
}

export default Gallery;