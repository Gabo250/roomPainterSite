import { useState } from "react";
import SlideShow from "./SlideShow";
import useTitleChange from "../utility/useTitleChange";

/**
 * It creates a section with images.
 * 
 * @param images The given images
 * @param titleName A part of the document title name
 * 
 * @returns gallery images
 */
function LoadImages({ images, titleName}) {
    const [ slideImg, setSlideImg ] = useState({});

    useTitleChange(`Geringer János - ${ titleName }`);

    const handleClick = (id) =>{   
        let update = {
            slideShow: true,
            index: id
        };

        setSlideImg((slideImg) => ({
            ...slideImg,    
            ...update
            })
        );        
    }

    return (
        <>
            <section className="flex flex-row flex-wrap gap-10 p-10">
                {
                    images.map((image, id) => {
                        return (
                            <div key={ image.url } onClick={ () => handleClick(id) } className="w-[10rem] h-[10rem] overflow-hidden cursor-pointer">
                                <img src={ image.url } alt={ image.alt } loading="lazy" className="w-[10rem] h-[10rem] object-cover transition-transform duration-[1500ms] hover:scale-110" />
                            </div> 
                        );
                    })                
                }           
            </section>
            {
                slideImg.slideShow ? <SlideShow images={ images } currentIndex={ slideImg.index } loadIMG={ setSlideImg } /> : null
            }
        </>
    );
}
export default LoadImages;