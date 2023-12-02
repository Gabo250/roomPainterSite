import { Link } from "react-router-dom";
import { metaDatas, serviceItems } from "../utility/datas";
import Card from "../utility/Card";
import useMetaDataChange from "../hooks/useMetaDataChange";
import Button from "../utility/Button";

const META = metaDatas.services;

function Services() {
    useMetaDataChange(META.description, META.title, window.location.href);

    return (
        <section className="flex bg-neutral-500 flex-wrap gap-10 justify-evenly py-20">
            {
                serviceItems.map((service) => {
                    return (                       
                            <Card key={ service.alt } variant='vertical' shadow='xl2' animating={ true }
                                className="relative w-[30rem] bg-gradient-to-br from-[40%] from-zinc-300 to-zinc-600 shadow-black
                                            justify-center items-center gap-7 py-7  rounded-br-[250px] xsm:w-[100%]">
                                <div className="flex flex-col w-[80%] gap-4 sm:items-center xsm:!w-11/12">
                                    <img src={ service.icon } alt={ service.iconAlt } className="relative h-20 w-20 ml-[50%] -translate-x-[50%]                                                                                                
                                                                                                2xl:ml-0 2xl:translate-x-0" />
                                    <h1 className="text-[1.5rem] font-semibold text-emerald-700">{ service.name }</h1>
                                    <p className="leading-7 text-justify text-white">{ service.description }</p>
                                    <Button variant={ "base" } color={ "slate-transparent" } className={ "w-20 py-2 px-4 hover:scale-110 hover:shadow-xl hover:shadow-teal-900" }>
                                        <Link to={ service.link }>Tovább</Link>  
                                    </Button>                                  
                                </div>                                

                                <figure className="h-[300px] w-[300px] overflow-hidden rounded-[110px] 2xsm:h-[300px] 2xsm:w-[300px]">
                                    <img src={ service.img } alt={ service.alt } className="h-[400px] w-[400px] object-cover transition-transform duration-[1500ms] hover:scale-110 2xsm:h-[300px] 2xsm:w-[300px]" />
                                </figure>                            
                            </Card>
                    );
                })
            }
        </section>
    );
}

export default Services;