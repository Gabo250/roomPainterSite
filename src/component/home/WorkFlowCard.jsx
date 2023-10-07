import { useRef } from "react";
import useViewBox from "../utility/useViewBox";

function WorkFlowCard({ name, description, icon }) {
    const titleRef = useRef();
    const descRef = useRef();
    const iconRef = useRef();

    const titleInViewBox = useViewBox(titleRef);
    const descInViewBox = useViewBox(descRef);
    const iconInViewBox = useViewBox(iconRef);

    return (
        <article className="relative bg-gray-100 flex flex-col items-center w-80 h-[26rem] gap-3 p-5 rounded-2xl
                            shadow-2xl shadow-slate-500 2xsm:w-11/12">   
            { 
                <div ref={ iconRef } className={ iconInViewBox ? 'animate-fade-in' : 'opacity-0' }>
                    { icon } 
                </div>
            }         
            <h2 ref={ titleRef } className={`text-[2rem] uppercase font-semibold transition-transform duration-700
                            ${ titleInViewBox ? 'scale-y-100 origin-top' : 'scale-y-0' }`}
                            >{ name }</h2>
            <p ref={ descRef } className={`leading-6 text-justify transition-transform duration-700
                                            ${ descInViewBox ? ' scale-y-100 origin-bottom' : 'scale-y-0' }`}>{ description }</p>
        </article>
    );
}

export default WorkFlowCard;