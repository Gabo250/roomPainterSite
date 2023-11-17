import { serviceItems } from "../utility/datas";
import useMetaDataChange from "../utility/useMetaDataChange";

function Services() {
    useMetaDataChange("Lakásfelújítás munkálatok leírása, amiket elvállalok - mikre érdemes figyelni adott munkálatnál",
                        "Geringer János Lakásfelújítási Szolgáltatások - Szobafestés, Mázolás, Tapétázás, Gipszkartonozás",
                        window.location.href);

    return (
        <section className="flex flex-col">
            {
                serviceItems.map((service) => {
                    return (
                        <div key={ service.name }>
                            <article className="relative bg-gradient-to-br from-[40%] from-zinc-300 to-zinc-600 flex flex-row flex-wrap justify-center items-center gap-7 py-7 sm:flex-col">
                                <div className="flex flex-col w-[50%] gap-4 2xl:w-8/12 2xl:items-center sm:!w-11/12">
                                    <img src={ service.icon } alt={ service.iconAlt } className="h-20 w-20 ml-[50%] -translate-x-[50%] 2xl:ml-0 2xl:translate-x-0" />
                                    <h1 className="text-[1.5rem] font-semibold text-emerald-700">{ service.name }</h1>
                                    <p className="leading-7 sm:text-justify text-white">{ service.description }</p>
                                    <ul className="text-white">
                                        {
                                            Object.keys(service.listDescription).map((key, id) => {
                                                return (
                                                    <li key={ key + id } className="mt-3 flex flex-row sm:flex-col">   
                                                        <h2 className="mr-2 font-semibold text-black whitespace-nowrap">{ key }</h2>                                                     
                                                        <p className="sm:text-justify">                                                            
                                                            { service.listDescription[key] }
                                                        </p>
                                                    </li>
                                                );
                                            })                                        
                                        }
                                    </ul>
                                </div>

                                <figure className="h-[400px] w-[400px] overflow-hidden rounded-[110px] 2xsm:h-[300px] 2xsm:w-[300px]">
                                    <img src={ service.img } alt={ service.alt } className="h-[400px] w-[400px] object-cover transition-transform duration-[1500ms] hover:scale-110 2xsm:h-[300px] 2xsm:w-[300px]" />
                                </figure>                            
                            </article>

                            <div className="relative bg-divide bg-no-repeat bg-cover bg-fixed w-full h-40" />
                        </div>
                    );
                })
            }
        </section>
    );
}

export default Services;