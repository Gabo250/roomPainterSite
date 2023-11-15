import { useRef, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from "../utility/Icons";
import useScroll from "../utility/useScroll";


/**
 * Shows up a modal slider for images.
 * 
 * @param images The given images
 * @param currentIndex The index of current image
 * @param loadIMG The given state from the parent element which it can set the modal off with
 * 
 * @returns 
 */
function SlideShow({ images, currentIndex, loadIMG }) {
    const scrollY = useScroll();
    const [isLeftArrowDisabled, setIsLeftArrowDisabled] = useState(() => { return currentIndex === 0 });
    const [isRightArrowDisabled, setIsRightArrowDisabled] = useState(() => { return currentIndex === images.length - 1 });
    const index = useRef(currentIndex);

    const handleCLoseCLick = () => {
        loadIMG((slideImg) => ({
            ...slideImg,
            slideShow: false
        }));
    }

    const handleArrowClick = (e) => {
        const direction = e.currentTarget.dataset.direction;
        
        if (direction === "left") {
            index.current--;                    
        }
        else {
            index.current++;
        }     
        
        if (index.current !== 0 && isLeftArrowDisabled){
            setIsLeftArrowDisabled(false);
        }
        else if (index.current === 0) {
            setIsLeftArrowDisabled(true);
        }
        
        if (index.current !== images.length - 1 && isRightArrowDisabled) {
            setIsRightArrowDisabled(false);
        }
        else if (index.current === images.length - 1){
            setIsRightArrowDisabled(true);
        }       
    }

    const imgLocation = (id) => {
        if (id === index.current){
            return "transition-all duration-1000 left-[50%] -translate-x-[50%] opacity-100";
        }
        else if (id > index.current){
            return "transition-all duration-1000 left-[100%] opacity-0";
        }
        else {
            return "transition-all duration-1000 -left-[100%] opacity-0";
        }
    }

    return (
        <div style={ { top: scrollY } } className="absolute w-full h-screen bg-black bg-opacity-40 backdrop-blur-lg overflow-hidden z-10">
            <button onClick={ handleCLoseCLick } className="absolute left-[calc(100%-4rem)]">
                <XIcon className={ "w-12 h-12" } />
            </button>    

            <button onClick={ handleArrowClick } data-direction="left" disabled={ isLeftArrowDisabled } 
                    className="absolute block bg-slate-600 bg-opacity-25 left-[10%] top-[50%] -translate-y-[-50%] z-[100] rounded-full backdrop-blur-md group
                    hover:scale-125 hover:transition-transform hover:duration-500 disabled:hidden sm:left-[1%]">
                <ArrowLeftIcon className={ "w-10 h-10 group-disabled:opacity-20" } strokeColor={ isLeftArrowDisabled ? "black" : "white" } />
            </button>

            <button onClick={ handleArrowClick } data-direction="right" disabled={ isRightArrowDisabled }
                    className="absolute block bg-slate-600 bg-opacity-25 left-[calc(90%-2.5rem)] top-[50%] -translate-y-[-50%] z-[100] rounded-full backdrop-blur-md group
                    hover:scale-125 hover:transition-transform hover:duration-500 disabled:hidden sm:left-[calc(99%-2.5rem)]">
                <ArrowRightIcon className={ "w-10 h-10 group-disabled:opacity-20" } strokeColor={ isRightArrowDisabled ? "black" : "white" } />
            </button>        

            <div className="absolute w-full h-4/5 top-[50%] -translate-y-[50%]">
                {
                    images.map((image, id) => {
                        return <img key={ image.url } src={ image.url } alt={ image.alt } loading="lazy"
                                className={`absolute h-4/5 top-[50%] -translate-y-[50%] sm:object-contain ${ imgLocation(id) }`} />
                    })
                }
            </div>            
        </div>
    );
}

export default SlideShow;