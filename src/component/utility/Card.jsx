import { twMerge } from "tailwind-merge";

const cardVariant = (variant, shad) => {
    const horizontal = 'flex flex-row flex-wrap';
    const vertical = 'flex flex-col'

    const shadow = {
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
        xl2: 'shadow-2xl'
    }

    return `${ variant === 'horizontal' ? horizontal : vertical } ${ shadow[shad] ? shadow[shad] : '' } p-3`;
}

function Card({ variant, shadow, className, children, ...props }) {  
    return (
        <article { ...props } className={ twMerge(cardVariant(variant, shadow), className) } >
            { children }
        </article>
    );
}

export default Card;