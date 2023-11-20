import { Link, useLocation } from "react-router-dom";
import { ArrowIcon } from "../utility/Icons";
import Card from "../utility/Card";

function TypeCard({ name, images }) {
    const currentLocation = useLocation();

    const length = images.length;
    const rndNumber = Math.floor(Math.random() * length);
    const rndURL = images[rndNumber];
                   
    return(
        <Card key={ name } variant='vertical' shadow='xl2' className="w-[20rem] gap-3 bg-gradient-to-r from-slate-400 to-cyan-100 shadow-blue-200 pb-8"> 
            <div className="overflow-hidden">
                <img src={ rndURL.url } alt={ rndURL.alt } className="w-full h-[10rem] object-cover transition-transform duration-[1500ms] hover:scale-110" />
            </div>

            <header>
                <h2 className="text-xl font-semibold text-center">{ name }</h2>
            </header>

            <Link className="bg-gradient-to-r from-slate-800 to-slate-400 w-24 py-[.4rem] rounded-3xl
                                flex flex-row justify-center items-center gap-1 mt-5 ml-[50%] -translate-x-[50%] 
                            text-slate-200 font-semibold hover:shadow-2xl hover:shadow-white
                                hover:transition-all hover:duration-500 hover:scale-105"
                to={ `${currentLocation.pathname}/${name}` }
            >
                <span>Képek</span>
                <ArrowIcon />
            </Link>            
        </Card>
    );
}

export default TypeCard;