import { twMerge } from "tailwind-merge";

const buttonVariant = (variant, color) => {
    const colors = {
        "slate-transparent": "bg-gradient-to-tr from-slate-200 to-[rgb(0_0_0_/_0)]"
    }

    const variants = {
        "base": "rounded-bl-2xl font-semibold transition-all duration-500 hover:scale-110"
    }

    return `${ colors[color] } ${ variants[variant] }`;
}

function Button({ variant, color, className, children, ...props }) {
    const thisVariant = buttonVariant(variant, color);

    return (
        <button { ...props } className={ twMerge(thisVariant, className) }>
            { children }
        </button>
    );
}

export default Button;