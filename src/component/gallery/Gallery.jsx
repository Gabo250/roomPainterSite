import { galleryImages } from "../utility/datas";
//import TypeCard from "./TypeCard";
import { useParams } from "react-router-dom";
import LoadImages from "./LoadImages";
import useTitleChange from "../utility/useTitleChange";

/**
 * It creates a gallery for images
 * 
 * @returns gallery element
 */
function Gallery() {
    const params = useParams();
    //const objKeys = Object.keys(galleryImages);

    useTitleChange("Geringer János - Lakásfelújítás munkák képek");

    if (params['*'] !== '') {
        return <LoadImages images={ galleryImages[params['*']] } titleName={ params['*'] } />
    }
    else {
        return (
            <section className="bg-gradient-to-r from-zinc-700 via-zinc-400 to-slate-200 flex flex-row justify-center flex-wrap py-20 px-10">
                <h2 className="text-4xl font-semibold">Feltöltés alatt.</h2>
                {
                    /*objKeys.map((name) => {                    
                        return <TypeCard key={ name } name={ name } images={ galleryImages[name] } />
                    })*/
                }
            </section>
        );
    }   
}

export default Gallery;