import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import useViewBox from "../hooks/useViewBox";

const cardVariant = (variant, shad, animating) => {
    const horizontal = variant === 'horizontal' ? 'flex flex-row flex-wrap' : 'flex flex-col';
    const anime = animating ? "transition-all duration-1000" : '';

    const shadow = {
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
        xl2: 'shadow-2xl'
    }

    return `${ horizontal } ${ shadow[shad] ? shadow[shad] : '' } ${ anime } p-3`;
}

function Card({ variant, shadow, className, animating, children, ...props }) {  
    const ref = useRef();
    const inViewBox = useViewBox(ref); 

    return (
        animating ? 
            <article ref={ ref } { ...props } className={ twMerge(cardVariant(variant, shadow, animating), `${ inViewBox ? "opacity-100 " : 'opacity-0' }`, className) } >
                { children }
            </article>
                :
            <article { ...props } className={ twMerge(cardVariant(variant, shadow, animating), className) } >
                { children }
            </article>
      
    );
}

export default Card;